import ControllerRadioBasic, {
  ControllerRadioBasicProps,
} from 'component-base/antd/controllers/ControllerRadioBasic';
import { useTranslator } from 'hooks/useTranslator';
import React from 'react';

export type RadioPromotionApplyForProps = Pick<
  ControllerRadioBasicProps,
  'formItemProps'
>;

const RadioPromotionApplyFor = ({
  formItemProps,
}: RadioPromotionApplyForProps) => {
  const t = useTranslator();

  return (
    <ControllerRadioBasic
      formItemProps={formItemProps}
      items={[
        { value: 'isAllUsers', children: t('common.BREWARDS.IS_ALL_USERS') },
        {
          value: 'isSharePublic',
          children: t('common.BREWARDS.IS_SHARE_PUBLIC'),
        },
      ]}
    />
  );
};

export default RadioPromotionApplyFor;
