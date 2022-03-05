import { atom, selector, useRecoilValue } from 'recoil';
import { client } from './apiClient';

type LoginUser = {
  id: number;
  name: string;
};

const tmpCurrentUserIDState = atom({
  key: 'TmpCurrentUserIDState',
  default: 1,
});

const tmpCurrentUserState = selector<LoginUser>({
  key: 'TmpCurrentUserState',
  get: async ({ get }) => {
    try {
      const userID = get(tmpCurrentUserIDState);
      const respons = await client.get(`/loginUser/${userID}`);
      return respons.data;
    } catch (e) {
      // memo: 仮error処理
      console.log(e);
    }
  },
});

export const useCurrentUserState = (): LoginUser => {
  return useRecoilValue(tmpCurrentUserState);
};
