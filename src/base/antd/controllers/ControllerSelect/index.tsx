import Form from 'antd/lib/form';
import Select, { SelectProps } from 'antd/lib/select';
import { ControllerFormItem } from 'component-base/antd/FormBase';
import React from 'react';

export interface ControllerSelectProps
  extends SelectProps,
    ControllerFormItem {}

const ControllerSelect = ({
  formItemProps,
  ...props
}: ControllerSelectProps) => (
  <Form.Item {...formItemProps}>
    <Select {...props} />
  </Form.Item>
);

export default ControllerSelect;
