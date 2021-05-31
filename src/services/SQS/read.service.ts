import SQS from '@libs/sqs';
import { ReceiveMessageResult } from 'aws-sdk/clients/sqs';

const read = async (SQSUrl: string): Promise<ReceiveMessageResult> => {
  const message = await SQS.receiveMessage({
    QueueUrl: SQSUrl,
    MaxNumberOfMessages: 1,
  }).promise();

  return message;
};

export default read;
