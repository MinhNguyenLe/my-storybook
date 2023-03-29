import Col from 'antd/lib/col';
import Form from 'antd/lib/form';
import Input from 'antd/lib/input';
import Row from 'antd/lib/row';
import Typography from 'antd/lib/typography';
import { AntdFormItemProps } from 'component-base/antd/FormBase';
import React from 'react';

export interface LanguageSingleFieldProps {
  label: string;
  prefix: string;
  itemProps: {
    vi: AntdFormItemProps;
    en: AntdFormItemProps;
    th: AntdFormItemProps;
    ko: AntdFormItemProps;
  };
}

const LanguageSingleField = ({
  label,
  prefix,
  itemProps,
}: LanguageSingleFieldProps) => {
  const { vi, en, th, ko } = itemProps;

  return (
    <Row gutter={[16, 0]}>
      <Col xs={24} style={{ marginBottom: 8 }}>
        <Typography.Text>{label}</Typography.Text>
      </Col>
      <Col xs={24}>
        <Form.Item name={[prefix, 'vi']} {...vi}>
          <Input addonBefore="🇻🇳 Vi" />
        </Form.Item>
      </Col>
      <Col xs={24}>
        <Form.Item name={[prefix, 'en']} {...en}>
          <Input addonBefore="🏴󠁧󠁢󠁥󠁮󠁧󠁿 En" />
        </Form.Item>
      </Col>
      <Col xs={24}>
        <Form.Item name={[prefix, 'th']} {...th}>
          <Input addonBefore="🇹🇭 Th" />
        </Form.Item>
      </Col>
      <Col xs={24}>
        <Form.Item name={[prefix, 'ko']} {...ko}>
          <Input addonBefore="🇰🇷 Ko" />
        </Form.Item>
      </Col>
    </Row>
  );
};

export default LanguageSingleField;
