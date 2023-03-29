import Menu, { MenuProps } from 'antd/lib/menu';
import React from 'react';

export type MenuBaseProps = MenuProps;

export type MenuItems = MenuProps['items'];

const MenuBase = ({ children, ...props }: MenuBaseProps) => (
  <Menu {...props}>{children}</Menu>
);

export default MenuBase;
