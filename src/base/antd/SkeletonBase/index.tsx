import Skeleton, { SkeletonProps } from 'antd/lib/skeleton';
import React from 'react';

export type SkeletonBaseProps = SkeletonProps;

const SkeletonBase = ({ ...props }: SkeletonBaseProps) => (
  <Skeleton {...props} />
);

export default SkeletonBase;
