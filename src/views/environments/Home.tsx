import { Box, Button } from '@mui/material';
import { Route, Switch, useHistory, Redirect, useRouteMatch } from 'react-router-dom';
import React, { useCallback } from 'react';

const Home: React.VFC = () => {
  const { path } = useRouteMatch();

  return (
    <Box>
      <Box>Create React App Sample</Box>

      <Switch>
        <Route exact sensitive path={`${path}`}>
          <Redirect to={`${path}/test01`} />
        </Route>

        <Route path={`${path}/test01`}>
          <RoutingSample1 />
        </Route>
        <Route path={`${path}/test02`}>
          <RoutingSample2 />
        </Route>
      </Switch>
    </Box>
  );
};

const RoutingSample1: React.VFC = () => {
  const history = useHistory();
  const handleButtonClick = useCallback(() => {
    history.push(`/cra-app/test02`);
  }, [history]);

  return (
    <Button onClick={handleButtonClick} variant="contained">
      Test!
    </Button>
  );
};

const RoutingSample2: React.VFC = () => {
  const history = useHistory();
  const handleButtonClick = useCallback(() => {
    history.push(`/cra-app/test01`);
  }, [history]);

  return (
    <Button onClick={handleButtonClick} variant="contained">
      1に移動
    </Button>
  );
};

export default Home;
