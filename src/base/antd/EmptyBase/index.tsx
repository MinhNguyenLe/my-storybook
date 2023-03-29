import Empty, { EmptyProps } from 'antd/lib/empty';
import React from 'react';

export type EmptyBaseProps = EmptyProps;

const EmptyBase = ({ ...props }: EmptyBaseProps) => <Empty {...props} />;

export default EmptyBase;
