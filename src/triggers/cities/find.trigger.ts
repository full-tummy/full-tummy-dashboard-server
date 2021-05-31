export default {
  handler: `src/handlers/cities/find.handler`,
  events: [
    {
      http: {
        method: "get",
        path: "cities/",
      },
    },
  ],
};
