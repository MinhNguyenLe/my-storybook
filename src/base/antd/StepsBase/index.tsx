import Steps, { StepsProps } from 'antd/lib/steps';
import React from 'react';

export type StepsBaseProps = StepsProps;

const StepsBase = ({ ...props }: StepsBaseProps) => <Steps {...props} />;

export default StepsBase;
