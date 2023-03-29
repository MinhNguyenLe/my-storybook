import DrawerBase, { DrawerBaseProps } from 'component-base/antd/DrawerBase';
import React from 'react';
import FormBase, { FormBaseProps } from '../FormBase';

export interface DrawerFormBaseProps<T>
  extends DrawerBaseProps,
    Required<Pick<FormBaseProps<T>, 'form'>> {
  formProps: FormBaseProps<T>;
}

function DrawerFormBase<T>({
  children,
  formProps,
  form,
  ...props
}: DrawerFormBaseProps<T>) {
  return (
    <DrawerBase {...props}>
      <FormBase {...formProps} form={form}>
        {children}
      </FormBase>
    </DrawerBase>
  );
}

export default DrawerFormBase;
