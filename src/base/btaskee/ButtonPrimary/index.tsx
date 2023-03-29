import ButtonBase, { ButtonBaseProps } from 'component-base/antd/ButtonBase';
import React from 'react';

export type ButtonPrimaryProps = Omit<ButtonBaseProps, 'type'>;

const ButtonPrimary = ({ children, ...props }: ButtonPrimaryProps) => (
  <ButtonBase type="primary" {...props}>
    {children}
  </ButtonBase>
);

export default ButtonPrimary;
