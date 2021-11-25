import React from 'react';
import AppHeader from '../organisms/AppHeader';
import DashboardButton, { DashboardButtonProps } from '../atoms/buttons/DashboardButton';
import HogemonListButton, { HogemonListButtonProps } from '../atoms/buttons/HogemonListButton';

export type CRAHeaderProps = Pick<DashboardButtonProps, 'onDashboardButtonClick'> &
  Pick<HogemonListButtonProps, 'onHogemonListButtonClick'>;

const CRAHeader: React.VFC<CRAHeaderProps> = (props) => {
  const userName = 'Satoshi';

  return (
    <AppHeader
      appTitle="CRA System"
      userName={userName}
      leftItems={[
        { id: 0, node: <DashboardButton onDashboardButtonClick={props.onDashboardButtonClick} /> },
        {
          id: 1,
          node: <HogemonListButton onHogemonListButtonClick={props.onHogemonListButtonClick} />,
        },
      ]}
    />
  );
};

export default CRAHeader;
