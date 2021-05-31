import { formatJSONResponse } from "@libs/apiGateway";
import { middyfy } from "@libs/lambda";

import type { ValidatedEventAPIGatewayProxyEvent } from "@libs/apiGateway";
import api from "@services/api";
import CITY_UPDATE_SHEMA from "@schemas/cities/update.schema";
import graphqlObjectParse from "@utils/graphqlObjectParse";

const update: ValidatedEventAPIGatewayProxyEvent<typeof CITY_UPDATE_SHEMA> =
  async (event) => {
    try {
      const { id } = event.pathParameters;

      const updateParams = graphqlObjectParse(event.body);

      const query = `
        mutation {
          update_cities_by_pk(pk_columns: {id: "${id}"}, _set: ${updateParams}){
            id
            name
            visible
            created_at
            updated_at
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

export const handler = middyfy(update, CITY_UPDATE_SHEMA);
