import Tag, { TagProps } from 'antd/lib/tag';
import React from 'react';

export type TagBaseProps = TagProps;

const TagBase = ({ ...props }: TagBaseProps) => <Tag {...props} />;

export default TagBase;
