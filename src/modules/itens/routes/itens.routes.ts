import { Router } from "express";
import { celebrate, Joi, Segments } from "celebrate";
import ItensController from "../controller/ItensController";

const itensRouter = Router();
const itensController = new ItensController();

itensRouter.get("/", itensController.index);

itensRouter.post(
  "/:id_pedido",
  celebrate({
    [Segments.BODY]: {
      preco: Joi.number().required(),
      quantidade: Joi.number().required(),
      descricao: Joi.string().required(),
    },
  }),
  itensController.create
);

itensRouter.delete(
  "/:id",
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.number().required(),
    },
  }),
  itensController.delete
);

export default itensRouter;
