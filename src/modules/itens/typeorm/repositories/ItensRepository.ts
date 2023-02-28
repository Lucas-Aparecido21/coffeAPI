import { EntityRepository, Repository } from "typeorm";
import Item from "../entities/Item";

@EntityRepository(Item)
export class ItemRepository extends Repository<Item> {
  public async findById(id: number): Promise<Item | undefined> {
    const item = this.findOne({ where: { id } });

    return item;
  }

  public async findByIdPedido(id_pedido: number): Promise<Item[] | undefined> {
    const item = this.find({ where: { id_pedido } });

    return item;
  }
}
