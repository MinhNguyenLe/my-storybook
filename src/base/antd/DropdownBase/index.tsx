import Dropdown, { DropdownProps } from 'antd/lib/dropdown';
import React from 'react';

export type DropdownBaseProps = DropdownProps;

const DropdownBase = ({ children, ...props }: DropdownBaseProps) => (
  <Dropdown {...props}>{children}</Dropdown>
);

export default DropdownBase;
