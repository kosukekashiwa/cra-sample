import React from 'react';
import Button, { ButtonProps } from '@mui/material/Button';

export type PrimaryButtonProps = Pick<ButtonProps, 'onClick'> & {
  label: string;
};

const PrimaryButton: React.VFC<PrimaryButtonProps> = (props) => {
  return (
    <Button variant="contained" onClick={props.onClick}>
      {props.label}
    </Button>
  );
};

export default PrimaryButton;
