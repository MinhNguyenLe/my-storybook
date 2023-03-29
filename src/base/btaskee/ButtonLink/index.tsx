import ButtonBase, { ButtonBaseProps } from 'component-base/antd/ButtonBase';
import React from 'react';

export type ButtonLinkProps = Omit<ButtonBaseProps, 'type'>;

const ButtonLink = ({ children, ...props }: ButtonLinkProps) => (
  <ButtonBase type="link" {...props}>
    {children}
  </ButtonBase>
);

export default ButtonLink;
