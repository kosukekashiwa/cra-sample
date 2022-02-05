import { useCallback } from 'react';
import { atom, useRecoilValue, useSetRecoilState } from 'recoil';

const tmpCounterState = atom<number>({
  key: 'tmpCounterState',
  default: 0,
});

export const useTmpCounterState = (): number => {
  return useRecoilValue(tmpCounterState);
};

export const useCountUpTmpCounterState = () => {
  const setState = useSetRecoilState(tmpCounterState);

  const countUp = useCallback(() => {
    setState((currVal) => currVal + 1);
  }, [setState]);

  return { countUp };
};

export const useCountDownTmpCounterState = () => {
  const setState = useSetRecoilState(tmpCounterState);

  const countDown = useCallback(() => {
    setState((currVal) => currVal - 1);
  }, [setState]);

  return { countDown };
};
