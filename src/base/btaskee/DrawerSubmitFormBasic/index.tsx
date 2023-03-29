import DrawerFormBase, {
  DrawerFormBaseProps,
} from 'component-base/antd/DrawerFormBase';
import { TOptionsConfirm, useConfirmation } from 'hooks/useConfirmation';
import React from 'react';
import ButtonMarginRight from '../ButtonMarginRight';
import ButtonPrimary from '../ButtonPrimary';

export interface DrawerSubmitFormBasicProps<T = any>
  extends Omit<DrawerFormBaseProps<T>, 'width' | 'footer'> {
  onSave?: () => void;
  onCancel?: () => void;
  myWidth?: '30vw' | '35vw' | '40vw' | '50vw' | '75vw';
  saveText?: string;
  cancelText?: string;
  submitLoading?: boolean;
  turnOnSubmitLoading?: () => void;
  optionsConfirm?: TOptionsConfirm;
  // TODO migrate loading useQuery
  loadingTanstack?: boolean;
  isNewLoading?: boolean;
}

function DrawerSubmitFormBasic<T>({
  children,
  onSave,
  onCancel,
  myWidth = '35vw',
  saveText = 'Submit',
  cancelText = 'Cancel',
  formProps,
  submitLoading,
  turnOnSubmitLoading,
  optionsConfirm,
  loadingTanstack = false,
  isNewLoading = false,
  ...props
}: DrawerSubmitFormBasicProps<T>) {
  const confirmation = useConfirmation();

  const { onFinish, ...rest } = formProps;

  const DefaultFooter = () => (
    <div
      style={{
        textAlign: 'right',
      }}
    >
      <ButtonMarginRight onClick={onCancel}>{cancelText}</ButtonMarginRight>
      <ButtonPrimary
        onClick={onSave}
        loading={loadingTanstack ? isNewLoading : submitLoading}
      >
        {saveText}
      </ButtonPrimary>
    </div>
  );

  return (
    <DrawerFormBase<T>
      forceRender
      destroyOnClose
      width={myWidth}
      footer={<DefaultFooter />}
      formProps={{
        onFinish: (values: any) => {
          if (onFinish) {
            confirmation(optionsConfirm).then(() => {
              if (loadingTanstack) {
                onFinish(values);
              } else {
                turnOnSubmitLoading?.();

                onFinish(values);
              }
            });
          }
        },
        ...rest,
      }}
      {...props}
    >
      {children}
    </DrawerFormBase>
  );
}

export default DrawerSubmitFormBasic;
