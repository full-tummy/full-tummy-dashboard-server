export default {
  handler: `src/handlers/cities/remove.handler`,
  events: [
    {
      http: {
        method: "delete",
        path: "city/{id}",
      },
    },
  ],
};
