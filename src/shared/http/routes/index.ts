import clientesRouter from "@modules/clientes/routes/clientes.routes";
import productsRouter from "@modules/products/routes/products.routes";
import { Router } from "express";

const routes = Router();

routes.use("/products", productsRouter);
routes.use("/clientes", clientesRouter);

routes.get("/", (request, response) => {
  return response.json({ message: "Hello Dev!" });
});

export default routes;
