import ImageBase, { ImageBaseProps } from 'component-base/antd/ImageBase';
import React from 'react';
import { IMAGE_FALLBACK } from 'utils/typescript/constants';

export type ImageFallbackProps = ImageBaseProps;

const ImageFallback = ({ ...props }: ImageFallbackProps) => (
  <ImageBase fallback={IMAGE_FALLBACK} {...props} />
);

export default ImageFallback;
