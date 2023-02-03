import Pedido from "@modules/pedidos/typeorm/entities/Pedido";
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity("clientes")
class Clientes {
  @PrimaryColumn()
  cpf: string;

  @Column()
  nome: string;

  @Column()
  telefone: string;

  @Column()
  cep: string;

  @Column()
  rua: string;

  @Column()
  cidade: string;

  @Column()
  bairro: string;

  @Column()
  uf: string;

  @Column()
  numero: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  update_at: Date;

  @OneToMany(() => Pedido, (pedidos) => pedidos.clientes)
  pedidos: Pedido[];
}

export default Clientes;
