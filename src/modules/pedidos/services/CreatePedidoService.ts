import Clientes from "@modules/clientes/typeorm/entities/Clientes";
import AppError from "@shared/errors/AppError";
import { getCustomRepository } from "typeorm";
import Pedido from "../typeorm/entities/Pedido";
import { PedidoRepository } from "../typeorm/repositories/PedidoRepository";

interface IRequest {
  cpf_id: string;
  valor: number;
  entrega: number;
}

class CreatePedidoService {
  public async execute({ valor, entrega, cpf_id }: IRequest): Promise<Pedido> {
    const pedidosRepository = getCustomRepository(PedidoRepository);

    if (cpf_id === undefined) {
      throw new AppError("CPF UNDEFINED");
    }

    const pedido = pedidosRepository.create({
      cpf_id,
      entrega,
      valor,
    });

    await pedidosRepository.save(pedido);
    return pedido;
  }
}

export default CreatePedidoService;
