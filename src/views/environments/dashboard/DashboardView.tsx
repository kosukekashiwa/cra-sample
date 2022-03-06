import React, { Suspense } from 'react';
import Box from '@mui/material/Box';
import ViewTitleLabel from '../../atoms/labels/ViewTitleLabel';
import {
  useCountDownCounterState,
  useCountUpCounterState,
  useCounterState,
} from '../../../state/counterState';
import { Card, CardContent, Stack } from '@mui/material';
import BaseButton from '../../atoms/buttons/bases/BaseButton';
import { Sample, useSampleListState, useSampleState } from '../../../state/sampleState';

const DashboardView: React.VFC = () => {
  return (
    <Box>
      <ViewTitleLabel label="Dashboard" />
      <Stack spacing={1}>
        <CounterContent />

        <Suspense fallback={<div>loading...</div>}>
          <SampleContent />
        </Suspense>
      </Stack>
    </Box>
  );
};

// atomお試し用
const CounterContent: React.VFC = () => {
  const tempCount = useCounterState();
  const countUp = useCountUpCounterState();
  const countDown = useCountDownCounterState();

  return (
    <Card>
      <CardContent>
        <Box>RecoilによるCounterの確認</Box>
        <Box>{tempCount}</Box>
        <Stack direction="row" spacing={1}>
          <BaseButton label="count+1" onClick={countUp} />
          <BaseButton label="count-1" onClick={countDown} />
        </Stack>
      </CardContent>
    </Card>
  );
};

// selectorFamilyお試し用
const SampleContent: React.VFC = () => {
  const sampleList = useSampleListState();
  const sample = useSampleState(1);

  return (
    <Card>
      <CardContent>
        <Stack spacing={1}>
          <Box>
            <Box>Sample全件取得</Box>
            <Box>
              {sampleList.map((item: Sample) => (
                <Box key={item.id}>{item.name}</Box>
              ))}
            </Box>
          </Box>

          <Box>
            <Box>Sample単一取得(id=1)</Box>
            <Box>{sample.name}</Box>
          </Box>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default DashboardView;
