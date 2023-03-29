import Tooltip, { TooltipProps } from 'antd/lib/tooltip';
import React from 'react';

export type TooltipBaseProps = TooltipProps;

const TooltipBase = ({ ...props }: TooltipBaseProps) => <Tooltip {...props} />;

export default TooltipBase;
