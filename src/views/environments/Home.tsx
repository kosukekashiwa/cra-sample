import React, { Suspense, useCallback } from 'react';
import { Route, Switch, Redirect, useRouteMatch, useHistory } from 'react-router-dom';
import DashboardView from './dashboard/DashboardView';
import DataListView from './hogeData/DataListView';
import CRAHeader from '../ecosystems/CRAHeader';
import AppContainer from '../atoms/containers/AppContainer';
import MainContainer from '../atoms/containers/MainContainer';

const Home: React.VFC = () => {
  const { path } = useRouteMatch();
  const history = useHistory();

  const handleApptitleClick = useCallback((): void => {
    history.push(`${path}/dashboard`);
  }, [history, path]);
  const handleDashboardButtonClick = useCallback((): void => {
    history.push(`${path}/dashboard`);
  }, [history, path]);
  const handleDataListButtonClick = useCallback((): void => {
    history.push(`${path}/data-list`);
  }, [history, path]);

  return (
    <AppContainer>
      {/* memo: Suspense仮置き */}
      <Suspense fallback={<div>Loading...</div>}>
        <CRAHeader
          onApptitleClick={handleApptitleClick}
          onDashboardButtonClick={handleDashboardButtonClick}
          onDataListButtonClick={handleDataListButtonClick}
        />
      </Suspense>

      <MainContainer>
        <Switch>
          <Route exact sensitive path={`${path}`}>
            <Redirect to={`${path}/dashboard`} />
          </Route>

          <Route exact sensitive path={`${path}/dashboard`}>
            <DashboardView />
          </Route>

          <Route exact sensitive path={`${path}/data-list`}>
            <DataListView />
          </Route>
        </Switch>
      </MainContainer>
    </AppContainer>
  );
};

export default Home;
