import { atom, selector, useRecoilValue } from 'recoil';
import { client } from './apiClient';

type LoginUser = {
  id: number;
  name: string;
};

const userIDState = atom({
  key: 'UserIDState',
  default: 1,
});

const userState = selector<LoginUser>({
  key: 'UserState',
  get: async ({ get }) => {
    try {
      const userID = get(userIDState);
      const respons = await client.get(`/loginUser/${userID}`);
      return respons.data;
    } catch (e) {
      // memo: 仮error処理
      console.log(e);
    }
  },
});

export const useUserState = (): LoginUser => {
  return useRecoilValue(userState);
};
