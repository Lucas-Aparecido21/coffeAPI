import { getCustomRepository } from "typeorm";
import Pedido from "../typeorm/entities/Pedido";
import { PedidoRepository } from "../typeorm/repositories/PedidoRepository";

interface IRequest {
  valor: number;
  entrega: number;
}

class CreatePedidoService {
  public async execute({ valor, entrega }: IRequest): Promise<Pedido> {
    const pedidosRepository = getCustomRepository(PedidoRepository);

    const pedido = await pedidosRepository.create({
      entrega,
      valor,
    });
    await pedidosRepository.save(pedido);
    return pedido;
  }
}

export default CreatePedidoService;
