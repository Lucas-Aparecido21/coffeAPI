import {
  Column,
  CreateDateColumn,
  Entity,
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
}

export default Clientes;
