import { getCustomRepository } from "typeorm";
import Pedido from "../typeorm/entities/Pedido";
import { PedidoRepository } from "../typeorm/repositories/PedidoRepository";

interface IRequest {
  id: number;

  valor: number;
  entrega: number;
}

class UpdatePedidoService {
  public async execute({ id, valor, entrega }: IRequest): Promise<Pedido> {
    const pedidosRepository = await getCustomRepository(PedidoRepository);

    const pedidos = await pedidosRepository.findOne(id);

    if (!pedidos) {
      throw new Error("Pedido não localizado");
    }

    pedidos.entrega = entrega;
    pedidos.valor = valor;

    await pedidosRepository.save(pedidos);
    return pedidos;
  }
}

export default UpdatePedidoService;
