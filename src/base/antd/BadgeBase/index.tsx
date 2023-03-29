import Badge, { BadgeProps } from 'antd/lib/badge';
import React from 'react';

export type BadgeBaseProps = BadgeProps;

const BadgeBase = ({ ...props }: BadgeBaseProps) => <Badge {...props} />;

export default BadgeBase;
