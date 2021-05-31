import { SQS } from 'aws-sdk';

export default new SQS({
  region: process.env.SQS_REGION,
  apiVersion: '2012-11-05',
});
