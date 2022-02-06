import React from 'react';
import AppHeader, { AppHeaderProps } from '../organisms/AppHeader';
import DashboardButton, { DashboardButtonProps } from '../atoms/buttons/DashboardButton';
import DataListButton, { DataListButtonProps } from '../atoms/buttons/DataListButton';
import { useLoginUserState } from '../../state/tmpLoginUserState';

export type CRAHeaderProps = Pick<AppHeaderProps, 'onApptitleClick'> &
  Pick<DashboardButtonProps, 'onDashboardButtonClick'> &
  Pick<DataListButtonProps, 'onDataListButtonClick'>;

const CRAHeader: React.VFC<CRAHeaderProps> = (props) => {
  const loginUser = useLoginUserState();
  console.log(loginUser);

  return (
    <AppHeader
      appTitle="CRA System"
      onApptitleClick={props.onApptitleClick}
      userName={loginUser.name}
      leftItems={[
        { id: 0, node: <DashboardButton onDashboardButtonClick={props.onDashboardButtonClick} /> },
        {
          id: 1,
          node: <DataListButton onDataListButtonClick={props.onDataListButtonClick} />,
        },
      ]}
    />
  );
};

export default CRAHeader;
