import { getCustomRepository } from "typeorm";
import { PedidoRepository } from "../typeorm/repositories/PedidoRepository";

interface IRequest {
  id: number;
}

class DeletePedidoService {
  public async execute({ id }: IRequest): Promise<void> {
    const pedidoRepository = getCustomRepository(PedidoRepository);

    const pedidos = await pedidoRepository.findOne(id);

    if (!pedidos) {
      throw new Error("Pedido não localizado.");
    }

    await pedidoRepository.remove(pedidos);
  }
}

export default DeletePedidoService;
