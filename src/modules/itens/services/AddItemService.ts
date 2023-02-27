import { getCustomRepository } from "typeorm";
import AppError from "@shared/errors/AppError";
import { ItemRepository } from "../typeorm/repositories/ItensRepository";
import Item from "../typeorm/entities/Item";

interface IRequest {
  id_pedido: string;
  itens: [];
}

class AddItemSerivce {
  public async execute({ itens }: IRequest): Promise<any> {
    const itensRepository = getCustomRepository(ItemRepository);

    await new Promise((resolve) => {
      itens.map(async ({ item, quantidade }) => {
        const newItem = itensRepository.create({
          item,
          quantidade,
        });

        await itensRepository.save(newItem);
      });

      resolve;
    });
    return;
  }
}

export default AddItemSerivce;
