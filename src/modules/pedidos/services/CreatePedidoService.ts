import { getCustomRepository } from "typeorm";
import Pedido from "../typeorm/entities/Pedido";
import { PedidoRepository } from "../typeorm/repositories/PedidoRepository";

interface IRequest {
  id: number;
  cpfCliente: string;
  valor: number;
  entrega: number;
}

class CreatePedidoService {
  public async execute({
    id,
    cpfCliente,
    valor,
    entrega,
  }: IRequest): Promise<Pedido> {
    const pedidosRepository = getCustomRepository(PedidoRepository);
    const pedidoExist = await pedidosRepository.findById(id);

    if (pedidoExist) {
      throw new Error("O Pedido já existe");
    }

    const pedido = await pedidosRepository.create({
      cpfCliente,
      entrega,
      valor,
    });
    await pedidosRepository.save(pedido);
    return pedido;
  }
}

export default CreatePedidoService;
