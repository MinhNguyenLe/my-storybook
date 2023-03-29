import Upload, { UploadFile, UploadProps } from 'antd/lib/upload';
import React from 'react';

export type UploadBaseProps = UploadProps;

export type TFileAntd = UploadFile;
export type TOriginFileObj = Required<UploadFile['originFileObj']>;
export type TFileListAntd = UploadFile[];

const UploadBase = ({ children, ...props }: UploadBaseProps) => (
  <Upload {...props}>{children}</Upload>
);

export default UploadBase;
