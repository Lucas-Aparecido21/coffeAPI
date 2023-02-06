import Clientes from "@modules/clientes/typeorm/entities/Clientes";
import AppError from "@shared/errors/AppError";
import { getCustomRepository } from "typeorm";
import Pedido from "../typeorm/entities/Pedido";
import { PedidoRepository } from "../typeorm/repositories/PedidoRepository";

interface IRequest {
  cpf: string;
  valor: number;
  entrega: number;
}

class CreatePedidoService {
  public async execute({ cpf, valor, entrega }: IRequest): Promise<Pedido> {
    const pedidosRepository = getCustomRepository(PedidoRepository);

    const pedido = await pedidosRepository.create({
      entrega,
      valor,
    });

    if (cpf === undefined) {
      throw new AppError("CPF UNDEFINED");
    }

    await pedidosRepository.save(pedido);
    return pedido;
  }
}

export default CreatePedidoService;
