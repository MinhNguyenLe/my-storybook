import Form from 'antd/lib/form';
import { ControllerFormItem } from 'component-base/antd/FormBase';
import SelectBase, { SelectBaseProps } from 'component-base/antd/SelectBase';
import React from 'react';
import { NOTIFICATION_TYPES } from 'utils/typescript/constants/notification';

export type NotificationTypeProps = SelectBaseProps & ControllerFormItem;

const NotificationType = ({
  formItemProps,
  ...props
}: NotificationTypeProps) => (
  <Form.Item {...formItemProps}>
    <SelectBase options={NOTIFICATION_TYPES} {...props} />
  </Form.Item>
);

export default NotificationType;
