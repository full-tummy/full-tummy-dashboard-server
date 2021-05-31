import SQS from '@libs/sqs';
import { SendMessageResult } from 'aws-sdk/clients/sqs';

const write = async (
  SQSUrl: string,
  message: string
): Promise<SendMessageResult> => {
  return await SQS.sendMessage({
    QueueUrl: SQSUrl,
    MessageBody: message,
  }).promise();
};

export default write;
