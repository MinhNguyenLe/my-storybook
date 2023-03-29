import ControllerRadioBasic, {
  ControllerRadioBasicProps,
} from 'component-base/antd/controllers/ControllerRadioBasic';
import { RadioBaseProps } from 'component-base/antd/RadioBase';
import React, { useState } from 'react';

export interface RadioBasicExpandingLogicProps
  extends Omit<ControllerRadioBasicProps, 'onControl'> {
  renderByValues: RenderByValue[];
}

export interface RenderByValue {
  value: RadioBaseProps['value'];
  children: Required<RadioBaseProps['children']>;
}

function RadioBasicExpandingLogic({
  renderByValues,
  defaultValue,
  ...props
}: RadioBasicExpandingLogicProps) {
  const [value, setValue] = useState(defaultValue);

  const renderByValue = () => {
    const target = renderByValues.find((item) => item.value === value);

    if (!target) {
      return null;
    }

    return target.children;
  };

  return (
    <>
      <ControllerRadioBasic
        {...props}
        defaultValue={defaultValue}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
      {renderByValue()}
    </>
  );
}

export default RadioBasicExpandingLogic;
