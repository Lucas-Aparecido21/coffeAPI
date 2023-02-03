import { EntityRepository, Repository } from "typeorm";
import Item from "../entities/Item";

@EntityRepository(Item)
export class ItemRepository extends Repository<Item> {
  public async findById(id: number): Promise<Item | undefined> {
    const item = this.findOne({ where: { id } });

    return item;
  }
}
