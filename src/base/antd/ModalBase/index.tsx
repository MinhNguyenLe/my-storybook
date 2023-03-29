import React from 'react';

import Modal, { ModalProps } from 'antd/lib/modal';

export type ModalBaseProps = ModalProps;

const ModalBase = ({ children, ...props }: ModalBaseProps) => (
  <Modal {...props}>{children}</Modal>
);

export default ModalBase;
