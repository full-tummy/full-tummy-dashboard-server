import { formatJSONResponse } from "@libs/apiGateway";
import { middyfy } from "@libs/lambda";

import type { ValidatedEventAPIGatewayProxyEvent } from "@libs/apiGateway";
import api from "@services/api";
import CITY_REMOVE_SCHEMA from "@schemas/cities/remove.schema";
import graphqlObjectParse from "@utils/graphqlObjectParse";

const remove: ValidatedEventAPIGatewayProxyEvent<typeof CITY_REMOVE_SCHEMA> =
  async (event) => {
    try {
      const { id } = event.pathParameters;

      const updateParams = graphqlObjectParse({
        deleted_at: new Date().toISOString(),
      });

      const query = `
        mutation {
          update_cities_by_pk(pk_columns: {id: "${id}"}, _set: ${updateParams}){
            id
          }
        }
      `;

      const { data } = await api.post("/", {
        query,
      });

      return formatJSONResponse(data);
    } catch (error) {
      return formatJSONResponse({ response: { error } }, 500);
    }
  };

export const handler = middyfy(remove, CITY_REMOVE_SCHEMA);
