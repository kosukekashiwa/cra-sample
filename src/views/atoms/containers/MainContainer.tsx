import React from 'react';
import Box from '@mui/material/Box';

type MainContainerProps = {
  children: React.ReactNode;
};

const MainContainer: React.VFC<MainContainerProps> = (props) => {
  return (
    <Box flexGrow={1} width="1200px" margin="auto" px="32px" py="16px" sx={{ overflowY: 'auto' }}>
      {props.children}
    </Box>
  );
};

export default MainContainer;
