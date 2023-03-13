import AppError from "@shared/errors/AppError";
import { getCustomRepository } from "typeorm";
import Pedido from "../typeorm/entities/Pedido";
import { PedidoRepository } from "../typeorm/repositories/PedidoRepository";

interface IRequest {
  cpf_id: string;
}

class ShowPedidoByClienteService {
  public async execute({ cpf_id }: IRequest): Promise<Pedido[]> {
    const pedidosRepository = getCustomRepository(PedidoRepository);

    const pedidos = await pedidosRepository.findByClient(cpf_id);
    if (!pedidos) {
      throw new AppError("Pedido não encontrado.");
    }

    if (pedidos === undefined || null) {
      throw new AppError("Não existem pedidos para este cliente");
    }

    if (pedidos.length === 0) {
      throw new AppError("Não existem pedidos para este cliente");
    }
    return pedidos;
  }
}

export default ShowPedidoByClienteService;
