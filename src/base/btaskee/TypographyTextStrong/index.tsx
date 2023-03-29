import TypographyTextBase, {
  TypographyTextBaseProps,
} from 'component-base/antd/TypographyTextBase';
import React from 'react';

export type TypographyTextStrongProps = Omit<TypographyTextBaseProps, 'strong'>;

const TypographyTextStrong = ({
  children,
  ...props
}: TypographyTextStrongProps) => (
  <TypographyTextBase strong {...props}>
    {children}
  </TypographyTextBase>
);

export default TypographyTextStrong;
