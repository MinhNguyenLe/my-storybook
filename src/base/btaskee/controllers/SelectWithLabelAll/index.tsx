import { FormInstance } from 'antd/lib/form';
import ControllerSelect, {
  ControllerSelectProps,
} from 'component-base/antd/controllers/ControllerSelect';
import { ISectionOption } from 'component-base/antd/SelectBase';
import React from 'react';

export interface SelectWithLabelAllProps extends ControllerSelectProps {
  labelAll?: ISectionOption;
  options: ISectionOption[];
  nameValue?: string[];
  setFormValue?: FormInstance<any>['setFieldValue'];
  isTurnOff?: boolean;
}

const SelectWithLabelAll = ({
  labelAll = {
    value: 'all',
    label: 'All',
  },
  options,
  isTurnOff,
  mode,
  nameValue,
  setFormValue,
  formItemProps,
  ...props
}: SelectWithLabelAllProps) => {
  const allOptionExists =
    isTurnOff || options.some((option) => option.value === 'all');

  if (mode && mode === 'multiple') {
    if (nameValue && nameValue.includes('all')) {
      setFormValue?.(formItemProps.name, ['all']);
    }
  }

  return (
    <ControllerSelect
      mode={mode}
      options={allOptionExists ? options : [labelAll, ...options]}
      formItemProps={formItemProps}
      {...props}
    />
  );
};

export default SelectWithLabelAll;
