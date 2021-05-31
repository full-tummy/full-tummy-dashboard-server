import functions from "@triggers/index";
import type { AWS } from "@serverless/typescript";
import environment from "./environment";

const serverlessConfiguration: AWS = {
  service: "full-tummy-api",
  frameworkVersion: "2",
  custom: {
    webpack: {
      webpackConfig: "./webpack.config.js",
      includeModules: true,
    },
    "serverless-offline": {
      httpPort: environment.OFFLINE_PORT || "3000",
    },
  },
  plugins: ["serverless-webpack", "serverless-offline"],
  provider: {
    name: "aws",
    stage: environment.STAGE,
    runtime: "nodejs14.x",
    region: "us-east-2",
    memorySize: 128,
    apiGateway: {
      minimumCompressionSize: 1024,
      shouldStartNameWithService: true,
    },
    environment,
    lambdaHashingVersion: "20201221",
    iam: {
      role: {
        managedPolicies: ["arn:aws:iam::aws:policy/AmazonSQSFullAccess"],
      },
    },
  },
  functions,
};

module.exports = serverlessConfiguration;
