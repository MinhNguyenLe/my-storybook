import Typography from 'antd/lib/typography';
import { TextProps } from 'antd/lib/typography/Text';
import React from 'react';

export type TypographyTextBaseProps = TextProps;

const TypographyTextBase = ({
  children,
  ...props
}: TypographyTextBaseProps) => (
  <Typography.Text {...props}>{children}</Typography.Text>
);

export default TypographyTextBase;
