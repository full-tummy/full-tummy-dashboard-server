import { formatJSONResponse } from "@libs/apiGateway";
import { middyfy } from "@libs/lambda";

import type { ValidatedEventAPIGatewayProxyEvent } from "@libs/apiGateway";
import api from "@services/api";
import CITY_CREATE_SCHEMA from "@schemas/cities/create.schema";
import graphqlObjectParse from "@utils/graphqlObjectParse";

const create: ValidatedEventAPIGatewayProxyEvent<typeof CITY_CREATE_SCHEMA> =
  async (event) => {
    try {
      const createParams = graphqlObjectParse(event.body);

      const { data } = await api.post("/", {
        query: `
        mutation {
          insert_cities_one(object:${createParams}) {
            id
            name
            created_at
          }
        }
      `,
      });

      return formatJSONResponse(data);
    } catch (error) {
      console.log("error: ", error);
      return formatJSONResponse({ response: { error } }, 500);
    }
  };

export const handler = middyfy(create, CITY_CREATE_SCHEMA);
