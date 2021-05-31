import { formatJSONResponse } from "@libs/apiGateway";
import { middyfy } from "@libs/lambda";

import type { ValidatedEventAPIGatewayProxyEvent } from "@libs/apiGateway";
import api from "@services/api";
import CITY_FIND_ONE_SCHEMA from "@schemas/cities/findOne.schema";

const findOne: ValidatedEventAPIGatewayProxyEvent<typeof CITY_FIND_ONE_SCHEMA> =
  async (event) => {
    try {
      const { id } = event.pathParameters;

      const { data } = await api.post("/", {
        query: `
          query {
            cities_by_pk(id: "${id}") {
              name,
              id,
              visible,
              created_at,
              updated_at
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

export const handler = middyfy(findOne, CITY_FIND_ONE_SCHEMA);
