import React from 'react';
import Button, { ButtonProps } from '@mui/material/Button';

export type BaseButtonProps = Pick<ButtonProps, 'onClick' | 'color'> & {
  label: string;
};

const BaseButton: React.VFC<BaseButtonProps> = (props) => {
  return (
    <Button variant="contained" color={props.color} onClick={props.onClick}>
      {props.label}
    </Button>
  );
};

export default BaseButton;
