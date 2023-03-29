import InputNumber, { InputNumberProps } from 'antd/lib/input-number';
import React from 'react';

export type InputNumberBaseProps = InputNumberProps;

const InputNumberBase = ({ ...props }: InputNumberBaseProps) => (
  <InputNumber {...props} />
);

export default InputNumberBase;
