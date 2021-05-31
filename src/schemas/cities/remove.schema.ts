const CITY_REMOVE_SCHEMA = {
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

export default CITY_REMOVE_SCHEMA;
