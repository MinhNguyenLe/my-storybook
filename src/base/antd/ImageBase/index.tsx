import Image, { ImageProps } from 'antd/lib/image';
import React from 'react';

export type ImageBaseProps = ImageProps;

const ImageBase = ({ ...props }: ImageProps) => <Image {...props} />;

export default ImageBase;
