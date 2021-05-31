export default {
  handler: `src/handlers/cities/update.handler`,
  events: [
    {
      http: {
        method: "put",
        path: "city/{id}",
      },
    },
  ],
};
