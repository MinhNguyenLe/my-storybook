import Descriptions, { DescriptionsProps } from 'antd/lib/descriptions';
import React from 'react';

export type DescriptionsBaseProps = DescriptionsProps;

function DescriptionsBase({ ...props }: DescriptionsBaseProps) {
  return <Descriptions {...props} />;
}

export default DescriptionsBase;
