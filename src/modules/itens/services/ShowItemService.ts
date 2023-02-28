import AppError from "@shared/errors/AppError";
import { getCustomRepository } from "typeorm";
import Item from "../typeorm/entities/Item";
import { ItemRepository } from "../typeorm/repositories/ItensRepository";

interface IRequest {
  id_pedido: number;
}

class ShowItemService {
  public async execute({ id_pedido }: IRequest): Promise<Item[]> {
    const itensRepository = getCustomRepository(ItemRepository);

    const items = await itensRepository.findByIdPedido(id_pedido);

    if (!items) {
      throw new AppError("Item não encontrado.");
    }
    return items;
  }
}
export default ShowItemService;
