import React from 'react';
import PrimaryButton, { PrimaryButtonProps } from './bases/PrimaryButton';

export type HogemonListButtonProps = {
  onHogemonListButtonClick: PrimaryButtonProps['onClick'];
};

const HogemonListButton: React.VFC<HogemonListButtonProps> = (props) => {
  return <PrimaryButton onClick={props.onHogemonListButtonClick} label="Hogemon List" />;
};

export default HogemonListButton;
