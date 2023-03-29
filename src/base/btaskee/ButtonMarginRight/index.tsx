import ButtonBase, { ButtonBaseProps } from 'component-base/antd/ButtonBase';
import React from 'react';

export type ButtonMarginRightProps = ButtonBaseProps;

const ButtonMarginRight = ({ children, ...props }: ButtonMarginRightProps) => (
  <ButtonBase style={{ marginRight: 8 }} {...props}>
    {children}
  </ButtonBase>
);

export default ButtonMarginRight;
