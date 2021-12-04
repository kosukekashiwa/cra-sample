import React from 'react';
import Box from '@mui/material/Box';
import { SCREEN_WIDTH } from '../../theme';

type MainContainerProps = {
  children: React.ReactNode;
};

const MainContainer: React.VFC<MainContainerProps> = (props) => {
  return (
    <Box flexGrow={1} sx={{ overflowY: 'auto' }}>
      <Box width={`${SCREEN_WIDTH}px`} margin="auto" px="32px" py="16px">
        {props.children}
      </Box>
    </Box>
  );
};

export default MainContainer;
