import { getCustomRepository } from "typeorm";
import AppError from "@shared/errors/AppError";
import { ItemRepository } from "../typeorm/repositories/ItensRepository";
import Item from "../typeorm/entities/Item";

interface IRequest {
  id: number;
  quantidade: number;
  preco: number;
}

class AddItemSerivce {
  public async execute({ id, quantidade, preco }: IRequest): Promise<Item> {
    const itensRepository = getCustomRepository(ItemRepository);

    const item = await itensRepository.create({
      id,
      quantidade,
      preco,
    });

    await itensRepository.save(item);
    return item;
  }
}

export default AddItemSerivce;
