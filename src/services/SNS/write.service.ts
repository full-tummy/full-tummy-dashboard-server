import sns from '@libs/sns';
import { AWSError, SNS } from 'aws-sdk';
import { PromiseResult } from 'aws-sdk/lib/request';

export default async (
  params: SNS.PublishInput
): Promise<PromiseResult<SNS.PublishResponse, AWSError>> => {
  const response = await sns.publish(params).promise();
  return response;
};
