import React from 'react';
import Button, { ButtonProps } from '@mui/material/Button';
import { blueGrey } from '@mui/material/colors';

export type HeaderMenuButtonProps = Pick<ButtonProps, 'onClick'> & {
  label: string;
};

const HeaderMenuButton: React.VFC<HeaderMenuButtonProps> = (props) => {
  return (
    <Button
      variant="text"
      onClick={props.onClick}
      sx={{ color: blueGrey[200], fontWeight: 'bold' }}
    >
      {props.label}
    </Button>
  );
};

export default HeaderMenuButton;
