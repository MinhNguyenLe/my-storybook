import List, { ListProps } from 'antd/lib/list';
import React from 'react';

export type ListBaseProps<T> = ListProps<T>;

function ListBase<T = any>({ ...props }: ListBaseProps<T>) {
  return <List {...props} />;
}

export default ListBase;
