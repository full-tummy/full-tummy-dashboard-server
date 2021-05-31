const CITY_CREATE_SCHEMA = {
  type: "object",
  properties: {
    body: {
      type: "object",
      properties: {
        name: { type: "string" },
      },
      required: ["name"],
    },
  },
} as const;

export default CITY_CREATE_SCHEMA;
