import Collapse, { CollapseProps } from 'antd/lib/collapse';
import React from 'react';

export type CollapseBaseProps = CollapseProps;

const CollapseBase = ({ ...props }: CollapseBaseProps) => (
  <Collapse {...props} />
);

export default CollapseBase;
