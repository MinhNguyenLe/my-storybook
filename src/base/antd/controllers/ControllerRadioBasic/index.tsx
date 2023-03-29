import Form from 'antd/lib/form';
import { ControllerFormItem } from 'component-base/antd/FormBase';
import RadioBase, { RadioBaseProps } from 'component-base/antd/RadioBase';
import React from 'react';

export interface ControllerRadioBasicProps
  extends RadioBaseProps,
    ControllerFormItem {}

const ControllerRadioBasic = ({
  formItemProps,
  ...props
}: ControllerRadioBasicProps) => (
  <Form.Item {...formItemProps}>
    <RadioBase {...props} />
  </Form.Item>
);

export default ControllerRadioBasic;
