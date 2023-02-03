import { getCustomRepository } from "typeorm";
import { ItemRepository } from "../typeorm/repositories/ItensRepository";

interface IRequest {
  id: number;
}

class DeleteItemService {
  public async execute({ id }: IRequest): Promise<void> {
    const itensRepository = getCustomRepository(ItemRepository);

    const itens = await itensRepository.findOne(id);

    if (!itens) {
      throw new Error("Item não encontrado.");
    }

    await itensRepository.remove(itens);
  }
}

export default DeleteItemService;
