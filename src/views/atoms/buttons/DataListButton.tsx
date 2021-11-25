import React from 'react';
import HeaderMenuButton, { HeaderMenuButtonProps } from './bases/HeaderMenuButton';

export type DataListButtonProps = {
  onDataListButtonClick: HeaderMenuButtonProps['onClick'];
};

const DataListButton: React.VFC<DataListButtonProps> = (props) => {
  return <HeaderMenuButton onClick={props.onDataListButtonClick} label="Data List" />;
};

export default DataListButton;
