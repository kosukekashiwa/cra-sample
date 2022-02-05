import React from 'react';
import Button, { ButtonProps } from '@mui/material/Button';

export type BaseTextButtonProps = Pick<ButtonProps, 'onClick'> & {
  label: string;
  fontRemSize?: number;
  color?: string;
};

const BaseTextButton: React.VFC<BaseTextButtonProps> = (props) => {
  return (
    <Button
      variant="text"
      onClick={props.onClick}
      sx={{
        fontSize: `${props.fontRemSize ?? 1}rem`,
        color: props.color ?? '#333333',
        fontWeight: 'bold',
      }}
    >
      {props.label}
    </Button>
  );
};

export default BaseTextButton;
