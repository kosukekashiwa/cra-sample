import React from 'react';
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import ViewTitleLabel from '../../atoms/labels/ViewTitleLabel';

const HogemonListView: React.VFC = () => {
  return (
    <Box>
      <ViewTitleLabel label="Hoge Data List" />
      <Stack spacing={1}>
        <Skeleton variant="text" />
        <Skeleton variant="circular" width={40} height={40} />
        <Skeleton variant="rectangular" width={210} height={118} />
        <Skeleton variant="rectangular" width={210} height={2000} />
      </Stack>
    </Box>
  );
};

export default HogemonListView;
