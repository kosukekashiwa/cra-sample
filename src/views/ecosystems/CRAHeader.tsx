import React from 'react';
import AppHeader from '../organisms/AppHeader';
import DashboardButton, { DashboardButtonProps } from '../atoms/buttons/DashboardButton';
import DataListButton, { DataListButtonProps } from '../atoms/buttons/DataListButton';

export type CRAHeaderProps = Pick<DashboardButtonProps, 'onDashboardButtonClick'> &
  Pick<DataListButtonProps, 'onDataListButtonClick'>;

const CRAHeader: React.VFC<CRAHeaderProps> = (props) => {
  const userName = 'User Name';

  return (
    <AppHeader
      appTitle="CRA System"
      userName={userName}
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
