import Drawer, { DrawerProps } from 'antd/lib/drawer';
import React from 'react';

export type DrawerBaseProps = DrawerProps;

const DrawerBase = ({ children, ...props }: DrawerBaseProps) => (
  <Drawer {...props}>{children}</Drawer>
);

export default DrawerBase;
