const CITY_UPDATE_SCHEMA = {
  type: "object",
  properties: {
    pathParameters: {
      type: "object",
      properties: {
        id: { type: "string" },
      },
      required: ["id"],
    },
    body: {
      type: "object",
      properties: {
        name: { type: "string" },
        visible: { type: "string" },
      },
    },
  },
} as const;

export default CITY_UPDATE_SCHEMA;
