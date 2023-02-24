import Pedido from "../../../../modules/pedidos/typeorm/entities/Pedido";
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity("itens")
class Item {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column()
  id_pedido: string;

  @Column()
  id_item: string;

  @Column()
  quantidade: string;

  @ManyToOne(() => Pedido, (pedido) => pedido.itens)
  @JoinColumn({ name: "id_pedido" })
  pedido: Pedido;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  update_at: Date;
  clientes: any;
}

export default Item;
