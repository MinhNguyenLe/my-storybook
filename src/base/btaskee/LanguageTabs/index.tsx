import TabsBase, { ITab } from 'component-base/antd/TabsBase';
import React from 'react';
import { TLanguage } from 'types-root/lang';

export interface LanguageTabsProps {
  ComponentChild: (props: ChildLanguageTabsProps) => Required<ITab['children']>;
  prefix?: ChildLanguageTabsProps['prefix'];
}

export interface ChildLanguageTabsProps {
  tabKey: TLanguage;
  prefix?: Array<string | number>;
}

const LanguageTabs = ({
  ComponentChild,
  prefix,
  ...props
}: LanguageTabsProps) => {
  // TODO refactor to match with default value for TextLang
  const items: Array<{ label: string; value: TLanguage }> = [
    {
      value: 'vi',
      label: '🇻🇳 Tiếng Việt',
    },
    {
      value: 'en',
      label: '🏴󠁧󠁢󠁥󠁮󠁧󠁿 English',
    },
    {
      value: 'ko',
      label: '🇰🇷 Korean',
    },
    {
      value: 'th',
      label: '🇹🇭 Thailand',
    },
    {
      value: 'id',
      label: '🇮🇩 Indo',
    },
  ];

  return (
    <TabsBase
      type="card"
      tabPosition="left"
      items={items.map((language) => ({
        key: language.value,
        label: language.label,
        forceRender: true,
        children: ComponentChild({ tabKey: language.value, prefix }),
      }))}
      {...props}
    />
  );
};

export default LanguageTabs;
