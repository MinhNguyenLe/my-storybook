import { Form } from "antd";
import { ControllerFormItem } from "../../antd/FormBase";
import SelectBase, { SelectBaseProps } from "../../antd/SelectBase";

 const NOTIFICATION_MAIN_LANGUAGE = [
  {
    label: 'Tiếng Việt',
    value: 'vi',
  },
  {
    label: 'English',
    value: 'en',
  },
  {
    label: 'Thailand',
    value: 'th',
  },
  {
    label: 'Indonesia',
    value: 'in',
  },
];

export type MainLanguageProps = SelectBaseProps & ControllerFormItem;

const MainLanguage = ({ formItemProps, ...props }: MainLanguageProps) => (
  <Form.Item {...formItemProps}>
    <SelectBase options={NOTIFICATION_MAIN_LANGUAGE} {...props} />
  </Form.Item>
);

export default MainLanguage;
