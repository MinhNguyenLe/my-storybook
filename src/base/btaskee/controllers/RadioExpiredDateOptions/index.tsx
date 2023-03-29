import React from 'react';
import RadioBasicExpandingLogic, {
  RadioBasicExpandingLogicProps,
} from '../RadioBasicExpandingLogic';

export type RadioExpiredDateOptionsProps = Omit<
  RadioBasicExpandingLogicProps,
  'items' | 'renderByValue'
>;

const RadioExpiredDateOptions = ({
  ...props
}: RadioExpiredDateOptionsProps) => (
  <RadioBasicExpandingLogic
    items={[
      { value: false, children: 'Number of day due date' },
      {
        value: true,
        children: 'Expired date',
      },
    ]}
    {...props}
  />
);

export default RadioExpiredDateOptions;
