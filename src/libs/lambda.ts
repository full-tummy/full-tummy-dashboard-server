import middy from '@middy/core';
import middyJsonBodyParser from '@middy/http-json-body-parser';
import { Context } from 'aws-lambda';
import { ValidatedEventAPIGatewayProxyEvent } from './apiGateway';
import validator from '@middy/validator';
import httpErrorHandler from '@middy/http-error-handler';
import { formatJSONResponse } from '@libs/apiGateway';
import SchemaInterface from '../interfaces/schemas.interface';

interface RequestError extends Error {
  details?: { message: string }[];
}

export const middyfy = (
  handler: ValidatedEventAPIGatewayProxyEvent<any>,
  schema?: SchemaInterface
): middy.Middy<any, any, Context> => {
  const middyHandler = middy(handler);

  middyHandler.use(middyJsonBodyParser());
  if (schema) {
    middyHandler.use(validator({ inputSchema: schema }));
  }
  middyHandler.use(httpErrorHandler());
  middyHandler.onError(async (request): Promise<any> => {
    const requestError: RequestError = request.error;

    request.response = formatJSONResponse(
      { response: requestError?.details[0]?.message },
      request.response.statusCode
    );
  });

  return middyHandler;
};
