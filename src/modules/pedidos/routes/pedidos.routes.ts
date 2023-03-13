import { Router } from "express";
import { celebrate, Joi, Segments } from "celebrate";
import PedidosController from "../controller/PedidosController";

const pedidosRouter = Router();
const pedidosController = new PedidosController();
// const arraySchema = Joi.array().items(
//   Joi.object({
//     id: Joi.string().required(),
//     cpf_id: Joi.string().required(),
//     valor: Joi.number().required(),
//     entrega: Joi.number().required(),
//     pagamento: Joi.string().required(),
//   })
// );
pedidosRouter.get("/", pedidosController.index);

pedidosRouter.get(
  "/:cpf_id",
  celebrate({
    [Segments.PARAMS]: {
      cpf_id: Joi.number().required(),
    },
  }),
  pedidosController.show
);

pedidosRouter.post(
  "/:cpf_id",
  celebrate({
    [Segments.BODY]: {
      valor: Joi.number().required(),
      entrega: Joi.number().required(),
      pagamento: Joi.string().required(),
    },
    [Segments.PARAMS]: {
      cpf_id: Joi.string().required(),
    },
  }),
  pedidosController.create
);

pedidosRouter.put(
  "/:id",
  celebrate({
    [Segments.BODY]: {
      valor: Joi.number(),
      entrega: Joi.number(),
      pagamento: Joi.string(),
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
