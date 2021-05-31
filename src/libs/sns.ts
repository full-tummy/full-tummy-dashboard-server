import { SNS } from 'aws-sdk';

export default new SNS({
  region: process.env.SNS_REGION,
});
