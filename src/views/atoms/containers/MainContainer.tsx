import React from 'react';
import { Box } from '@mui/material';

type MainContainerProps = {
  children: React.ReactNode;
};

const MainContainer: React.VFC<MainContainerProps> = (props) => {
  return (
    <Box flexGrow={1} sx={{ overflowY: 'auto' }}>
      {props.children}
    </Box>
  );
};

export default MainContainer;
