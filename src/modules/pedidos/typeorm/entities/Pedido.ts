import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity("pedidos")
class Pedido {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  cpfCliente: string;

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
