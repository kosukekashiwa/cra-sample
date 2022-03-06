import React, { useCallback } from 'react';
import { useNavigate, Outlet } from 'react-router-dom';
import CRAHeader from '../ecosystems/CRAHeader';
import AppContainer from '../atoms/containers/AppContainer';
import MainContainer from '../atoms/containers/MainContainer';

const AppLayout: React.VFC = () => {
  // memo: useNavigateはなんとなく<App/>のみで扱いたい
  const navigate = useNavigate();

  const handleApptitleClick = useCallback((): void => {
    navigate('dashboard');
  }, [history]);
  const handleDashboardButtonClick = useCallback((): void => {
    navigate('dashboard');
  }, [history]);
  const handleDataListButtonClick = useCallback((): void => {
    navigate('data-list');
  }, [history]);

  return (
    <AppContainer>
      <CRAHeader
        onApptitleClick={handleApptitleClick}
        onDashboardButtonClick={handleDashboardButtonClick}
        onDataListButtonClick={handleDataListButtonClick}
      />

      <MainContainer>
        <Outlet />
      </MainContainer>
    </AppContainer>
  );
};

export default AppLayout;
