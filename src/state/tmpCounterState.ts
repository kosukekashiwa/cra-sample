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
  const temp = useTmpCounterState();

  const countUp = useCallback(() => {
    setState(temp + 1);
  }, [setState, temp]);

  return { countUp };
};

export const useCountDownTmpCounterState = () => {
  const setState = useSetRecoilState(tmpCounterState);
  const temp = useTmpCounterState();

  const countDown = useCallback(() => {
    setState(temp - 1);
  }, [setState, temp]);

  return { countDown };
};
