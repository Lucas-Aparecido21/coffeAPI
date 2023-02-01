import { EntityRepository, Repository } from "typeorm";
import Produtc from "../entities/Product";

@EntityRepository(Produtc)
export class ProductRepository extends Repository<Produtc> {
  public async findByName(name: string): Promise<Produtc | undefined> {
    const product = this.findOne({ where: { name } });
    return product;
  }
}
