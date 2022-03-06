import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import DashboardView from './environments/dashboard/DashboardView';
import DataListView from './environments/hogeData/DataListView';
import AppLayout from './environments/AppLayout';

const App: React.VFC = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Redirect exact strict from="/" to="/cra-app" /> */}
        <Route path={`/`} element={<Navigate to={`cra-app`} />} />
        <Route path="cra-app" element={<AppLayout />}>
          <Route index element={<Navigate to={`dashboard`} />} />
          <Route path={`dashboard`} element={<DashboardView />} />
          <Route path={`data-list`} element={<DataListView />} />
        </Route>
        <Route path="*" element={<div>Not Found</div>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
