import Card, { CardProps } from 'antd/lib/card';
import React from 'react';

export type CardBaseProps = CardProps;

const CardBase = ({ ...props }: CardBaseProps) => <Card {...props} />;

export default CardBase;
