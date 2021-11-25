import React from 'react';
import { Box } from '@mui/material';

export type BaseLabelProps = {
  label: string;
  remSize: number;
  bold?: boolean;
  color?: string;
};

const BaseLabel: React.VFC<BaseLabelProps> = (props) => {
  return (
    <Box
      fontSize={`${props.remSize}rem`}
      fontWeight={props.bold ? 'bold' : 'normal'}
      color={props.color}
    >
      {props.label}
    </Box>
  );
};

export default BaseLabel;
