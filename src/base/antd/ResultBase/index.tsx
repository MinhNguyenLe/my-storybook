import Result, { ResultProps } from 'antd/lib/result';
import React from 'react';

export type ResultBaseProps = ResultProps;

const ResultBase = ({ ...props }: ResultBaseProps) => <Result {...props} />;

export default ResultBase;
