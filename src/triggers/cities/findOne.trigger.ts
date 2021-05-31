export default {
  handler: `src/handlers/cities/findOne.handler`,
  events: [
    {
      http: {
        method: "get",
        path: "city/{id}",
      },
    },
  ],
};
