import React, { useCallback } from 'react';
import { Route, Switch, Redirect, useRouteMatch, useHistory } from 'react-router-dom';
import DashboardView from './dashboard/DashboardView';
import HogemonListView from './hogemon/HogemonListView';
import CRAHeader from '../ecosystems/CRAHeader';
import AppContainer from '../atoms/containers/AppContainer';
import MainContainer from '../atoms/containers/MainContainer';

const Home: React.VFC = () => {
  const { path } = useRouteMatch();
  const history = useHistory();

  const handleDashboardButtonClick = useCallback((): void => {
    history.push(`${path}/dashboard`);
  }, [history, path]);
  const handleHogemonListButtonClick = useCallback((): void => {
    history.push(`${path}/hogemon-list`);
  }, [history, path]);

  return (
    <AppContainer>
      <CRAHeader
        onDashboardButtonClick={handleDashboardButtonClick}
        onHogemonListButtonClick={handleHogemonListButtonClick}
      />

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
