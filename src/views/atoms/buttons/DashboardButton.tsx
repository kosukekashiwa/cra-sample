import React from 'react';
import HeaderMenuButton, { HeaderMenuButtonProps } from './bases/HeaderMenuButton';

export type DashboardButtonProps = {
  onDashboardButtonClick: HeaderMenuButtonProps['onClick'];
};

const DashboardButton: React.VFC<DashboardButtonProps> = (props) => {
  return <HeaderMenuButton onClick={props.onDashboardButtonClick} label="Dashboard" />;
};

export default DashboardButton;
