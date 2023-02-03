import Pedido from "../../../../modules/pedidos/typeorm/entities/Pedido";
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";

@Entity("itens")
class Item {
  @PrimaryGeneratedColumn()
  id: number;

  @Column("decimal")
  preco: number;

  @Column("int")
  quantidade: number;

  @ManyToOne(() => Pedido, (pedido) => pedido.itens)
  @JoinColumn({ name: "id" })
  pedido: Pedido;
  clientes: any;
}

export default Item;
