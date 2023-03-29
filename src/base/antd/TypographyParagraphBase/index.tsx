import Typography from 'antd/lib/typography';
import { ParagraphProps } from 'antd/lib/typography/Paragraph';
import React from 'react';

export type TypographyParagraphBaseProps = ParagraphProps;

const TypographyParagraphBase = ({
  children,
  ...props
}: TypographyParagraphBaseProps) => (
  <Typography.Paragraph {...props}>{children}</Typography.Paragraph>
);

export default TypographyParagraphBase;
