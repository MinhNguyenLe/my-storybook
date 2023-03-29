import Popconfirm, { PopconfirmProps } from 'antd/lib/popconfirm';
import React from 'react';

export type PopconfirmBaseProps = PopconfirmProps;

const PopconfirmBase = ({ ...props }: PopconfirmBaseProps) => (
  <Popconfirm {...props} />
);

export default PopconfirmBase;
