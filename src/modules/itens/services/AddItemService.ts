import { getCustomRepository } from "typeorm";
import AppError from "@shared/errors/AppError";
import { ItemRepository } from "../typeorm/repositories/ItensRepository";
import Item from "../typeorm/entities/Item";

interface IRequest {
  id_pedido: string;
  itens: any;
}

class AddItemSerivce {
  public async execute({ id_pedido }: IRequest): Promise<any> {
    // const itensRepository = getCustomRepository(ItemRepository);

    // await new Promise((resolve) => {
    //   id_item.map(async (id_item) => {
    //     const item = itensRepository.create({
    //       id_pedido,
    //       id_item,
    //       quantidade,
    //     });

    //     await itensRepository.save(item);
    //   });

    //   resolve;
    // });
    return;
  }
}

export default AddItemSerivce;
