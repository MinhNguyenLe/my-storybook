import Radio, { RadioGroupProps, RadioProps } from 'antd/lib/radio';
import React from 'react';

export type RadioControlCallback = (value: RadioProps['value']) => void;

export interface RadioBaseProps extends RadioGroupProps {
  items: RadioItemProps[];
  onRadioControl?: RadioControlCallback;
}

export type RadioItemProps = RadioProps;

const RadioBase = ({
  items,
  onRadioControl,
  onChange,
  ...props
}: RadioBaseProps) => (
  <Radio.Group
    {...props}
    onChange={(e) => {
      onChange?.(e);

      onRadioControl?.(e.target.value);
    }}
  >
    {items.map((item) => (
      <Radio {...item} />
    ))}
  </Radio.Group>
);

export default RadioBase;
