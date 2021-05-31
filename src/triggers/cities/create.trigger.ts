export default {
  handler: `src/handlers/cities/create.handler`,
  events: [
    {
      http: {
        method: "post",
        path: "city",
      },
    },
  ],
};
