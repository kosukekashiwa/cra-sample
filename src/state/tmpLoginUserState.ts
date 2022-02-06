import { atom, selector, useRecoilValue } from 'recoil';
import { client } from './apiClient';

type LoginUser = {
  id: number;
  name: string;
};

// memo: 試しにaxiosでget処理かく
const tmpLoginUserState = atom<LoginUser>({
  key: 'tmpLoginUserState',
  default: selector({
    key: 'savedLoginuser',
    get: async () => {
      try {
        const respons = await client.get('/loginUser');
        return respons.data;
      } catch (e) {
        // memo: 仮error処理
        console.log(e);
      }
    },
  }),
});

export const useLoginUserState = (): LoginUser => {
  return useRecoilValue(tmpLoginUserState);
};
