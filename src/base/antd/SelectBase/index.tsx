import Select, { DefaultOptionType, SelectProps } from 'antd/lib/select';
import React from 'react';

export type SelectBaseProps = SelectProps;

export type ISectionOption = DefaultOptionType;

const SelectBase = ({ ...props }: SelectBaseProps) => <Select {...props} />;

export default SelectBase;
