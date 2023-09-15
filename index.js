const fastify = require("fastify")({ logger: true });
const path = require("path");
console.log(__dirname);

fastify.register(require("@fastify/static"), {
  root: __dirname,
});

fastify.listen({ port: 3000 }, (err) => {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
});
