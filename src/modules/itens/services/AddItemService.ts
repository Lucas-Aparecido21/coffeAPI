import { getCustomRepository } from "typeorm";
import AppError from "@shared/errors/AppError";
import { ItemRepository } from "../typeorm/repositories/ItensRepository";
import Item from "../typeorm/entities/Item";

interface IRequest {
  id_pedido: number;
  quantidade: number;
  preco: number;
  descricao: string;
}

class AddItemSerivce {
  public async execute({
    id_pedido,
    quantidade,
    preco,
    descricao,
  }: IRequest): Promise<Item> {
    const itensRepository = getCustomRepository(ItemRepository);

    const item = await itensRepository.create({
      id_pedido,
      quantidade,
      preco,
      descricao,
    });

    await itensRepository.save(item);
    return item;
  }
}

export default AddItemSerivce;
