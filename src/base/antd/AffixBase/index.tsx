import Affix, { AffixProps } from 'antd/lib/affix';
import React from 'react';

export type AffixBaseProps = AffixProps;

const AffixBase = ({ ...props }: AffixBaseProps) => <Affix {...props} />;

export default AffixBase;
