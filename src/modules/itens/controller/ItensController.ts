import { Response, Request } from "express";
import AddItemSerivce from "../services/AddItemService";
import DeleteItemService from "../services/DeleteItemService";
import ListItemService from "../services/ListItemService";

export default class ItensController {
  public async index(request: Request, response: Response): Promise<Response> {
    const listItens = new ListItemService();

    const itens = await listItens.execute();

    return response.json(itens);
  }
  public async delete(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const deleteItem = new DeleteItemService();
    await deleteItem.execute({ id: Number(id) });
    return response.json([]);
  }
  public async create(request: Request, response: Response): Promise<Response> {
    try {
      const { itens } = request.body;
      const { id_pedido } = request.params;
      const addItem = new AddItemSerivce();

      // const a = JSON.parse(itens);

      // const item = await addItem.execute({
      //   id_pedido,
      //   itens,
      // });
      return response.json(itens);
    } catch (error) {
      console.error(error);
      return response.status(500).json();
    }
  }
}
