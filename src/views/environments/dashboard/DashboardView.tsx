import React from 'react';
import Box from '@mui/material/Box';
import ViewTitleLabel from '../../atoms/labels/ViewTitleLabel';
import {
  useCountDownTmpCounterState,
  useCountUpTmpCounterState,
  useTmpCounterState,
} from '../../../state/tmpCounterState';
import { Button } from '@mui/material';

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
    </Box>
  );
};

export default DashboardView;
