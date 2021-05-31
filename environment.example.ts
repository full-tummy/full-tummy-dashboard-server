import type { AwsLambdaEnvironment } from "@serverless/typescript";

interface ENV extends AwsLambdaEnvironment {
  MONGO_DB_URL: string;
  HASURA_ENDPOINT_URL: string;
  HASURA_SECRET: string;
  STAGE: string;
}

type AWS_ENVS = {
  dev: ENV;
  stg?: ENV;
  prd?: ENV;
};

const stageEnv: AWS_ENVS = {
  dev: {
    AWS_NODEJS_CONNECTION_REUSE_ENABLED: "",
    OFFLINE_PORT: "",
    STAGE: "",
    HASURA_ENDPOINT_URL: "",
    HASURA_SECRET: "",
    MONGO_DB_URL: "",
  },
};

const environment: ENV = stageEnv["dev"];

export default environment;
