import React from 'react';
import PrimaryButton, { PrimaryButtonProps } from './bases/PrimaryButton';

export type DashboardButtonProps = {
  onDashboardButtonClick: PrimaryButtonProps['onClick'];
};

const DashboardButton: React.VFC<DashboardButtonProps> = (props) => {
  return <PrimaryButton onClick={props.onDashboardButtonClick} label="Dashboard" />;
};

export default DashboardButton;
