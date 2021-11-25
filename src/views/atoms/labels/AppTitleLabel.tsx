import React from 'react';
import BaseLabel, { BaseLabelProps } from './bases/BaseLabel';

export type AppTitleLabelProps = Pick<BaseLabelProps, 'label'>;

const AppTitleLabel: React.VFC<AppTitleLabelProps> = (props) => {
  return <BaseLabel label={props.label} remSize={1.5} bold color="white" />;
};

export default AppTitleLabel;
