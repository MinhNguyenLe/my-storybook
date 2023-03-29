import Form from 'antd/lib/form';
import Upload, { UploadProps } from 'antd/lib/upload';
import { FormItemBaseProps } from 'component-base/antd/FormBase';
import React from 'react';

export interface ControllerUploadProps extends UploadProps {
  formItemProps: FormItemBaseProps;
}

function ControllerUpload({
  children,
  formItemProps,
  ...props
}: ControllerUploadProps) {
  return (
    <Form.Item {...formItemProps}>
      <Upload {...props}>{children}</Upload>
    </Form.Item>
  );
}

export default ControllerUpload;
