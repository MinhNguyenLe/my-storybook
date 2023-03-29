import Popover, { PopoverProps } from 'antd/lib/popover';
import React from 'react';

export type PopoverBaseProps = PopoverProps;

const PopoverBase = ({ ...props }: PopoverBaseProps) => <Popover {...props} />;

export default PopoverBase;
