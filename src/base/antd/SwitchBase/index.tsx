import Switch, { SwitchProps } from 'antd/lib/switch';
import React from 'react';

export type SwitchBaseProps = SwitchProps;

const SwitchBase = ({ ...props }: SwitchBaseProps) => <Switch {...props} />;

export default SwitchBase;
