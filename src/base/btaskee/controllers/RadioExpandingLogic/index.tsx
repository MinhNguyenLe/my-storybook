import ControllerRadio, {
  ControllerRadioProps,
} from 'component-base/antd/controllers/ControllerRadio';
import { RadioBaseProps } from 'component-base/antd/RadioBase';
import React, { useState } from 'react';

export interface RadioExpandingLogicProps<T>
  extends Omit<ControllerRadioProps<T>, 'onControl'> {
  renderByValue: RadioBaseProps['value'];
  onSetFormValue?: (data: T) => void;
}

function RadioExpandingLogic<T = any>({
  children,
  renderByValue,
  onSetFormValue,
  defaultValue,
  ...props
}: RadioExpandingLogicProps<T>) {
  const [value, setValue] = useState<T>(defaultValue);

  return (
    <>
      <ControllerRadio<T>
        {...props}
        defaultValue={defaultValue}
        onControl={(data) => {
          setValue(data.value);

          onSetFormValue?.(data);
        }}
      />
      {renderByValue && renderByValue.toString() === `${value}`
        ? children
        : null}
    </>
  );
}

export default RadioExpandingLogic;
