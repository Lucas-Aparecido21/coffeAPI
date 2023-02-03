import { Router } from "express";
import { celebrate, Joi, Segments } from "celebrate";
import PedidosController from "../controller/PedidosController";

const pedidosRouter = Router();
const pedidosController = new PedidosController();

pedidosRouter.get("/", pedidosController.index);

pedidosRouter.get(
  "/:id",
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.number().required(),
    },
  }),
  pedidosController.show
);

pedidosRouter.post(
  "/",
  celebrate({
    [Segments.BODY]: {
      cpf: Joi.string().required(),
      valor: Joi.number().required(),
      entrega: Joi.number().required(),
    },
  }),
  pedidosController.create
);

pedidosRouter.put(
  "/:id",
  celebrate({
    [Segments.BODY]: {
      id: Joi.number().required(),
      cpf: Joi.string().required(),
      valor: Joi.number().required(),
      entrega: Joi.number().required(),
    },
    [Segments.PARAMS]: {
      id: Joi.number().required(),
    },
  }),
  pedidosController.update
);

pedidosRouter.delete(
  "/:id",
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().required(),
    },
  }),
  pedidosController.delete
);

export default pedidosRouter;
