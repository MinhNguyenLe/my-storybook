import Rate, { RateProps } from 'antd/lib/rate';
import React from 'react';

export type RateBaseProps = RateProps;

const RateBase = ({ ...props }: RateBaseProps) => <Rate {...props} />;

export default RateBase;
