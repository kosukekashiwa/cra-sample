import React from 'react';
import { Route, Switch, Redirect, useRouteMatch } from 'react-router-dom';
import DashboardView from './dashboard/DashboardView';
import HogemonListView from './hogemon/HogemonListView';
import AppContainer from '../atoms/containers/AppContainer';
import MainContainer from '../atoms/containers/MainContainer';
import AppHeader from '../organisms/AppHeader';

const Home: React.VFC = () => {
  const { path } = useRouteMatch();

  return (
    <AppContainer>
      <AppHeader appTitle="Create React App Sample" />

      <MainContainer>
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
      </MainContainer>
    </AppContainer>
  );
};

export default Home;
