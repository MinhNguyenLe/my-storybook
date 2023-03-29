import Avatar, { AvatarProps } from 'antd/lib/avatar';
import React from 'react';

export type AvatarBaseProps = AvatarProps;

const AvatarBase = ({ ...props }: AvatarBaseProps) => <Avatar {...props} />;

export default AvatarBase;
