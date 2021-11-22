import React from 'react';
import { AppBar, Box, Toolbar } from '@mui/material';

type AppHeaderProps = {
  appTitle: string;
};

const AppHeader: React.VFC<AppHeaderProps> = (props) => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Box>{props.appTitle}</Box>
      </Toolbar>
    </AppBar>
  );
};

export default AppHeader;
