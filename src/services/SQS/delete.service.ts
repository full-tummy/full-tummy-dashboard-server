import SQS from '@libs/sqs';

const deleteMessage = async (
  QueueUrl: string,
  ReceiptHandle: string
): Promise<void> => {
  await SQS.deleteMessage({
    QueueUrl,
    ReceiptHandle,
  }).promise();
};

export default deleteMessage;
