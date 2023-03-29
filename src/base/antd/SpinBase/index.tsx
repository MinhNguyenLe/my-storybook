import Spin, { SpinProps } from 'antd/lib/spin';
import React from 'react';

export type SpinBaseProps = SpinProps;

const SpinBase = ({ ...props }: SpinBaseProps) => <Spin {...props} />;

export default SpinBase;
