import { getCustomRepository } from "typeorm";
import Pedido from "../typeorm/entities/Pedido";
import { PedidoRepository } from "../typeorm/repositories/PedidoRepository";

interface IRequest {
  id: number;
}

class ShowPedidoService {
  public async execute({ id }: IRequest): Promise<Pedido> {
    const pedidoRepository = getCustomRepository(PedidoRepository);

    const pedidos = await pedidoRepository.findOne(id);

    if (!pedidos) {
      throw new Error("Pedido não localizado.");
    }
    return pedidos;
  }
}

export default ShowPedidoService;
