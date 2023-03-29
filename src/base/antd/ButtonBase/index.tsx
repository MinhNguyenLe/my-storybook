import Button, { ButtonProps } from 'antd/lib/button/button';
import React from 'react';

export type ButtonBaseProps = ButtonProps;

const ButtonBase = ({ children, ...props }: ButtonBaseProps) => (
  <Button {...props}>{children}</Button>
);

export default ButtonBase;
