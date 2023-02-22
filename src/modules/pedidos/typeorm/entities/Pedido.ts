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
  @PrimaryGeneratedColumn("increment")
  id: number;

  @ManyToOne(() => Clientes, (clientes) => clientes.pedidos)
  @JoinColumn({ name: "cpf_id" })
  cliente: Clientes;

  @Column()
  cpf_id: string;

  @Column("decimal")
  valor: number;

  @Column("decimal")
  entrega: number;

  @Column()
  pagamento: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  update_at: Date;
  itens: any;
}

export default Pedido;
