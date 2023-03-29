import ControllerUpload, {
  ControllerUploadProps,
} from 'component-base/antd/controllers/ControllerUpload';
import { TOriginFileObj } from 'component-base/antd/UploadBase';
import React, { memo } from 'react';
import { TLegacyImage } from 'types/notification';

export interface ConvertUrlIntoFileListParams {
  url: TLegacyImage;
  name: string;
  id: string;
}

export const convertUrlIntoFileList = ({
  url,
  name,
  id,
}: ConvertUrlIntoFileListParams) => {
  if (typeof url !== 'string' || !url) return [];

  return [
    {
      uid: `image_en_${id}`,
      name,
      url,
    },
  ];
};

// File antd is [...FileList]
function isNotFileAntd(file: TLegacyImage) {
  return typeof file === 'string' || !file || !file.length;
}

function getUrl(file: TLegacyImage) {
  if (!Array.isArray(file) || !file.length) return null;

  // Case: single file (this is UploadSingleMedia component)
  const fileUploading = file[0];

  // uploaded in past -> return url
  if (fileUploading.url) return fileUploading.url;

  // check originFile
  if (!fileUploading?.originFileObj) {
    return null;
  }

  return fileUploading.originFileObj;
}

// TODO need refactor type of action Slingshot
export const uploadPicture = (file: TLegacyImage) => {
  if (isNotFileAntd(file)) return '';

  const originFileObj = getUrl(file);
  if (originFileObj === null) return '';

  if (typeof originFileObj === 'string') return originFileObj;

  return slingShotUpload({
    cloudName: 'notificationImages',
    originFile: originFileObj,
  }) as Promise<string>;
};

const slingShotUpload = ({
  cloudName,
  originFile,
}: {
  cloudName: string;
  originFile: TOriginFileObj;
}) =>
  new Promise((resolve, reject) => {
    // @ts-ignore
    // eslint-disable-next-line no-undef
    const uploader = new Slingshot.Upload(cloudName);

    uploader.send(originFile, (err: any, url: string) => {
      if (err) {
        reject(err);
      }
      resolve(url);
    });
  });

export const uploadMultiples = (files: TLegacyImage[]) =>
  Promise.all(files.map((file) => uploadPicture(file)));

export type UploadSingleMediaProps = Omit<
  ControllerUploadProps,
  'listType' | 'accept' | 'maxCount' | 'action'
>;
function UploadSingleMedia({ children, ...props }: UploadSingleMediaProps) {
  return (
    <ControllerUpload
      listType="picture-card"
      accept="image/*"
      maxCount={1}
      action="/api"
      className="notification-uploader"
      {...props}
    >
      {children}
    </ControllerUpload>
  );
}

export default memo(UploadSingleMedia);
