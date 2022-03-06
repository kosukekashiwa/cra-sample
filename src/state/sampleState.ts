import { selector, selectorFamily, useRecoilValue } from 'recoil';
import { client } from './apiClient';

export type Sample = {
  id: number;
  name: string;
};

// memo いつかはnormalize
// 単一取得
const sampleState = selectorFamily<Sample, number>({
  key: 'SampleState',
  get: (sampleID) => async () => {
    try {
      const respons = await client.get(`/sample/${sampleID}`);
      return respons.data;
    } catch (e) {
      // memo: 仮error処理
      console.log(e);
    }
  },
});

export const useSampleState = (sampleID: number): Sample => {
  return useRecoilValue(sampleState(sampleID));
};

// 全件取得
const sampleListState = selector<Sample[]>({
  key: 'SampleListState',
  get: async () => {
    try {
      const respons = await client.get(`/sample`);
      return respons.data;
    } catch (e) {
      // memo: 仮error処理
      console.log(e);
    }
  },
});

export const useSampleListState = (): Sample[] => {
  return useRecoilValue(sampleListState);
};
