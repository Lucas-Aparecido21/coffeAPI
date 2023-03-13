import { EntityRepository, Repository } from "typeorm";
import Pedido from "../entities/Pedido";

@EntityRepository(Pedido)
export class PedidoRepository extends Repository<Pedido> {
  public async findById(id: number): Promise<Pedido | undefined> {
    const product = this.findOne({ where: { id } });
    return product;
  }
  public async findByClient(cpf_id: string): Promise<Pedido[] | undefined> {
    const pedido = this.find({ where: { cpf_id } });

    return pedido;
  }
}
