import React from 'react';
import Button, { ButtonProps } from '@mui/material/Button';

export type BaseTextButtonProps = Pick<ButtonProps, 'onClick'> & {
  label: string;
  fontSize?: 'small' | 'medium' | 'large';
  color?: string;
};

const BaseTextButton: React.VFC<BaseTextButtonProps> = (props) => {
  return (
    <Button
      variant="text"
      onClick={props.onClick}
      sx={{
        fontSize: `${getFontRemSize(props.fontSize)}rem`,
        color: props.color ?? '#333333',
        fontWeight: 'bold',
      }}
    >
      {props.label}
    </Button>
  );
};

const getFontRemSize = (size: BaseTextButtonProps['fontSize']): number => {
  switch (size) {
    case 'small':
      return 0.5;
    case 'medium':
      return 1;
    case 'large':
      return 1.5;
    default:
      return 1;
  }
};

export default BaseTextButton;
