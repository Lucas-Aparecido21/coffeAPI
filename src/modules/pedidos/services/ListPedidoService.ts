import { getCustomRepository } from "typeorm";
import Pedido from "../typeorm/entities/Pedido";
import { PedidoRepository } from "../typeorm/repositories/PedidoRepository";

class ListPedidoService {
  public async execute(): Promise<Pedido[]> {
    const pedidosRepository = getCustomRepository(PedidoRepository);

    const pedidos = await pedidosRepository.find();

    return pedidos;
  }
}

export default ListPedidoService;
