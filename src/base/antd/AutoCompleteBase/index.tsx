import AutoComplete, { AutoCompleteProps } from 'antd/lib/auto-complete';
import React from 'react';

export type AutoCompleteBaseProps = AutoCompleteProps;

const AutoCompleteBase = ({ ...props }: AutoCompleteBaseProps) => (
  <AutoComplete {...props} />
);

export default AutoCompleteBase;
