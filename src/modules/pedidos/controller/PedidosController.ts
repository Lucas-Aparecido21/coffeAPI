import { Request, Response } from "express";
import CreatePedidoService from "../services/CreatePedidoService";
import DeletePedidoService from "../services/DeletePedidoService";
import ListPedidoService from "../services/ListPedidoService";
import ShowPedidoByClienteService from "../services/ShowPedidoByClienteService";
import ShowPedidoService from "../services/ShowPedidoService";
import UpdatePedidoService from "../services/UpdatePedidoService";

export default class PedidosController {
  public async index(request: Request, response: Response): Promise<Response> {
    const listPedidos = new ListPedidoService();

    const pedidos = await listPedidos.execute();

    return response.json(pedidos);
  }

  // public async show(request: Request, response: Response): Promise<Response> {
  //   const { id } = request.params;

  //   const showPedido = new ShowPedidoService();
  //   const pedido = await showPedido.execute({ id: Number(id) });

  //   return response.json(pedido);
  // }

  public async show(request: Request, response: Response): Promise<Response> {
    {
      const { cpf_id } = request.params;

      const showPedido = new ShowPedidoByClienteService();

      const pedido = await showPedido.execute({
        cpf_id,
      });
      return response.json(pedido);
    }
  }

  public async create(request: Request, response: Response): Promise<Response> {
    try {
      const { valor, entrega, pagamento } = request.body;
      const { cpf_id } = request.params;
      const createPedido = new CreatePedidoService();

      const pedido = await createPedido.execute({
        cpf_id,
        valor,
        entrega,
        pagamento,
      });

      return response.json(pedido);
    } catch (error) {
      console.error(error);
      return response.status(500).json();
    }
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const { valor, entrega } = request.body;
    const { id } = request.params;

    const updatePedido = new UpdatePedidoService();
    const pedido = await updatePedido.execute({
      id: Number(id),

      valor,
      entrega,
    });

    return response.json(pedido);
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const deletePedido = new DeletePedidoService();
    await deletePedido.execute({ id: Number(id) });

    return response.json([]);
  }
}
