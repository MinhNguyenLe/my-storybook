import TabsBase, { TabsBaseProps } from 'component-base/antd/TabsBase';
import React from 'react';

export type TabsCardProps = Omit<TabsBaseProps, 'type'>;

const TabsCard = ({ children, ...props }: TabsCardProps) => (
  <TabsBase type="card" {...props}>
    {children}
  </TabsBase>
);

export default TabsCard;
