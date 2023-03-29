import Form from 'antd/lib/form';
import { FormItemBaseProps } from 'component-base/antd/FormBase';
import RadioBase, {
  RadioBaseProps,
  RadioItemProps,
} from 'component-base/antd/RadioBase';
import { Meteor } from 'meteor/meteor';
import React from 'react';

export type FormControlCallback<T> = (data: T & { value: any }) => void;

export interface ItemsWithData<T> extends RadioItemProps {
  data: T;
}

export interface ControllerRadioProps<T> extends Omit<RadioBaseProps, 'items'> {
  itemsWithData: Required<ItemsWithData<T & { value: any }>[]>;
  onControl: FormControlCallback<T>;
  formItemProps: FormItemBaseProps;
}

function ControllerRadio<T>({
  itemsWithData,
  onControl,
  formItemProps,
  ...props
}: ControllerRadioProps<T>) {
  return (
    <Form.Item {...formItemProps}>
      <RadioBase
        {...props}
        items={itemsWithData.map(({ data, ...item }) => ({ ...item }))}
        onRadioControl={(value) => {
          const target = itemsWithData.find((item) => value === item.value);
          if (!target) {
            throw new Meteor.Error('ControllerRadio: incorrect value changed');
          }
          if (!target.data) {
            throw new Meteor.Error(
              'ControllerRadio: please pass data in items'
            );
          }
          onControl(target.data);
        }}
      />
    </Form.Item>
  );
}

export default ControllerRadio;
