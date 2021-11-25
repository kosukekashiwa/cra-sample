import React from 'react';
import BaseLabel, { BaseLabelProps } from './bases/BaseLabel';

export type ViewTitleLabelProps = Pick<BaseLabelProps, 'label'>;

const ViewTitleLabel: React.VFC<ViewTitleLabelProps> = (props) => {
  return <BaseLabel label={props.label} remSize={2} bold />;
};

export default ViewTitleLabel;
