import Form, { FormItemProps, FormProps } from 'antd/lib/form';
import React, { PropsWithChildren } from 'react';

export type FormBaseProps<T> = FormProps<T>;

export type AntdFormItemProps = FormItemProps;

export interface ControllerFormItem<T = any> {
  formItemProps?: FormItemProps<T>;
}

export interface FormItemBaseProps<T = any>
  extends Omit<FormItemProps<T>, 'label' | 'name'> {
  label: Required<FormItemProps<T>>['label'];
  name: Required<FormItemProps<T>>['name'];
}

function FormBase<T = any>({
  children,
  ...props
}: PropsWithChildren<FormBaseProps<T>>) {
  return <Form {...props}>{children}</Form>;
}
export default FormBase;
