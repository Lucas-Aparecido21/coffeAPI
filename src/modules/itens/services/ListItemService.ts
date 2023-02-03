import { getCustomRepository } from "typeorm";
import Item from "../typeorm/entities/Item";
import { ItemRepository } from "../typeorm/repositories/ItensRepository";

class ListItemService {
  public async execute(): Promise<Item[]> {
    const itensRepository = getCustomRepository(ItemRepository);

    const itens = await itensRepository.find();
    return itens;
  }
}

export default ListItemService;
