import { useCallback } from 'react';
import { atom, useRecoilValue, useSetRecoilState } from 'recoil';

const counterState = atom<number>({
  key: 'tmpCounterState',
  default: 0,
});

export const useCounterState = (): number => {
  return useRecoilValue(counterState);
};

export const useCountUpCounterState = (): (() => void) => {
  const setState = useSetRecoilState(counterState);

  const countUp = useCallback(() => {
    setState((currVal) => currVal + 1);
  }, [setState]);

  return countUp;
};

export const useCountDownCounterState = (): (() => void) => {
  const setState = useSetRecoilState(counterState);

  const countDown = useCallback(() => {
    setState((currVal) => currVal - 1);
  }, [setState]);

  return countDown;
};
