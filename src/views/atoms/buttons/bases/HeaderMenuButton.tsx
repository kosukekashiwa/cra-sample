import React from 'react';
import { blueGrey } from '@mui/material/colors';
import BaseTextButton, { BaseTextButtonProps } from './BaseTextButton';

export type HeaderMenuButtonProps = Pick<BaseTextButtonProps, 'label' | 'onClick'>;

const HeaderMenuButton: React.VFC<HeaderMenuButtonProps> = (props) => {
  return <BaseTextButton label={props.label} onClick={props.onClick} color={blueGrey[200]} />;
};

export default HeaderMenuButton;
