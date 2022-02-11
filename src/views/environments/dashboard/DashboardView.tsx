import React from 'react';
import Box from '@mui/material/Box';
import ViewTitleLabel from '../../atoms/labels/ViewTitleLabel';
import {
  useCountDownTmpCounterState,
  useCountUpTmpCounterState,
  useTmpCounterState,
} from '../../../state/tmpCounterState';
import { Button } from '@mui/material';
import BaseButton from '../../atoms/buttons/bases/BaseButton';

const DashboardView: React.VFC = () => {
  const tempCount = useTmpCounterState();
  const countUp = useCountUpTmpCounterState();
  const countDown = useCountDownTmpCounterState();

  return (
    <Box>
      <ViewTitleLabel label="Dashboard" />
      <Box>{tempCount}</Box>
      <Button variant={'outlined'} onClick={countUp}>
        count+1
      </Button>
      <Button variant={'outlined'} onClick={countDown}>
        count-1
      </Button>
      <BaseButton label={'hoge'} />
      <BaseButton label={'hoge'} color={'secondary'} />
    </Box>
  );
};

export default DashboardView;
