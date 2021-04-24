import * as Koa from "koa";
import * as Router from "koa-router";
import * as cors from "@koa/cors";

const products = require('./data/products.json')
const names = require('./data/names.json')

const getRouter = (): Router => {
  const router = new Router();

  router.get("/products", ctxt => {
    ctxt.body = products;
  });

  router.get("/names", ctxt => {
      ctxt.body = names;
  });

  return router;
};

function main() {
  const app = new Koa();
  app.use(cors({ origin: "*", credentials: true }));
  const router = getRouter();
  app.use(router.routes());
  app.use(router.allowedMethods());
  const PORT = 7421;
  app.listen(PORT);
  console.log("server started on port", PORT);
}

if (require.main === module) {
  main();
};