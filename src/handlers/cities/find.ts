import { formatJSONResponse } from "@libs/apiGateway";
import { middyfy } from "@libs/lambda";

import type { ValidatedEventAPIGatewayProxyEvent } from "@libs/apiGateway";
import api from "@services/api";

const find: ValidatedEventAPIGatewayProxyEvent<any> = async () => {
  try {
    const { data } = await api.post("/", {
      query: `
        query {
          cities (where: {visible: {_eq: true}, deleted_at: {_is_null: true}}){
            id,
            name,
            created_at,
            updated_at,
            visible,
            deleted_at
          }
        }
      `,
    });

    return formatJSONResponse(data);
  } catch (error) {
    console.log(error);
    return formatJSONResponse({ response: { error } }, 500);
  }
};

export const handler = middyfy(find);
