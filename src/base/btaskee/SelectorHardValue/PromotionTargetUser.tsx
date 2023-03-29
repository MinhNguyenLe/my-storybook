import Form from 'antd/lib/form';
import { ControllerFormItem } from 'component-base/antd/FormBase';
import SelectBase, { SelectBaseProps } from 'component-base/antd/SelectBase';
import React from 'react';
import { PROMOTION_TARGET_USER_OPTIONS } from 'utils/typescript/constants/promotion';

export type PromotionTargetUserProps = SelectBaseProps & ControllerFormItem;

const PromotionTargetUser = ({
  formItemProps,
  ...props
}: PromotionTargetUserProps) => (
  <Form.Item {...formItemProps}>
    <SelectBase
      options={PROMOTION_TARGET_USER_OPTIONS.map((target) => ({
        value: target,
        label: target,
      }))}
      {...props}
    />
  </Form.Item>
);

export default PromotionTargetUser;
