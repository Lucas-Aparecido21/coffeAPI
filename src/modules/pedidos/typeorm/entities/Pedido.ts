import Clientes from "../../../../modules/clientes/typeorm/entities/Clientes";
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity("pedidos")
class Pedido {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Clientes, (clientes) => clientes.pedidos)
  @JoinColumn({ name: "cpf" })
  clientes: Clientes;

  @Column("decimal")
  valor: number;

  @Column("decimal")
  entrega: number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  update_at: Date;
  itens: any;
}

export default Pedido;
