import Checkbox, { CheckboxProps } from 'antd/lib/checkbox';
import React from 'react';

export type CheckboxBaseProps = CheckboxProps;

const CheckboxBase = ({ ...props }: CheckboxBaseProps) => (
  <Checkbox {...props} />
);

export default CheckboxBase;
