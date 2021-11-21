import React from 'react';
import { Box } from '@mui/material';
import { Route, Switch, Redirect, useRouteMatch } from 'react-router-dom';
import DashboardView from './dashboard/DashboardView';
import HogemonListView from './hogemon/HogemonListView';

const Home: React.VFC = () => {
  const { path } = useRouteMatch();

  return (
    <Box>
      <Box>Create React App Sample</Box>

      <Switch>
        <Route exact sensitive path={`${path}`}>
          <Redirect to={`${path}/dashboard`} />
        </Route>

        <Route exact sensitive path={`${path}/dashboard`}>
          <DashboardView />
        </Route>

        <Route exact sensitive path={`${path}/hogemon-list`}>
          <HogemonListView />
        </Route>
      </Switch>
    </Box>
  );
};

export default Home;
