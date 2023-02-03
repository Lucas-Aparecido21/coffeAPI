import Clientes from "@modules/clientes/typeorm/entities/Clientes";
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

  // @Column()
  // cpfCliente: string;

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
}

export default Pedido;
