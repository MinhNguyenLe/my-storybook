import Tabs, { TabPaneProps, TabsProps } from 'antd/lib/tabs';
import React from 'react';

export type TabsBaseProps = TabsProps;

export interface ITab extends Omit<TabPaneProps, 'tab'> {
  key: string;
  label: React.ReactNode;
  children?: React.ReactNode;
}

const TabsBase = ({ children, ...props }: TabsBaseProps) => (
  <Tabs {...props}>{children}</Tabs>
);

export default TabsBase;
