import React from 'react';
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import { blue } from '@mui/material/colors';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AppTitleLabel from '../atoms/labels/AppTitleLabel';
import { FLEXIBLE_MAX_WIDTH, FLEXIBLE_MIN_WIDTH } from '../theme';

const StyledAppbar = styled(AppBar)({
  backgroundColor: blue[900],
});

const StyledToolbar = styled(Toolbar)({
  width: '100vw',
  minWidth: `${FLEXIBLE_MIN_WIDTH}px`,
  maxWidth: `${FLEXIBLE_MAX_WIDTH}px`,
  margin: 'auto',
});

export type AppHeaderProps = {
  appTitle: string;
  userName: string;
  leftItems: { id: number; node: React.ReactNode }[];
};

const AppHeader: React.VFC<AppHeaderProps> = (props) => {
  return (
    <StyledAppbar position="static">
      <StyledToolbar>
        <AppTitleLabel label={props.appTitle} />
        <Box display="flex" gap="8px" ml="8px">
          {props.leftItems.map((item) => (
            <React.Fragment key={item.id}>{item.node}</React.Fragment>
          ))}
        </Box>
        <Box display="flex" alignItems="center" gap="8px" ml="auto">
          <AccountCircleIcon />
          <Box>{props.userName}</Box>
        </Box>
      </StyledToolbar>
    </StyledAppbar>
  );
};

export default AppHeader;
