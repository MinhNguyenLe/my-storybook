import Pagination, { PaginationProps } from 'antd/lib/pagination';
import React from 'react';

export type PaginationBaseProps = PaginationProps;

const PaginationBase = ({ ...props }: PaginationBaseProps) => (
  <Pagination {...props} />
);

export default PaginationBase;
