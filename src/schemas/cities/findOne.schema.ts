const CITY_FIND_ONE_SCHEMA = {
  type: "object",
  properties: {
    pathParameters: {
      type: "object",
      properties: {
        id: { type: "string" },
      },
      required: ["id"],
    },
  },
} as const;

export default CITY_FIND_ONE_SCHEMA;
