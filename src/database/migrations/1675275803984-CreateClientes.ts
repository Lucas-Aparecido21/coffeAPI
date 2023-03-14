import { string } from "joi";
import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateClientes1675275803984 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "clientes",
        columns: [
          {
            name: "cpf",
            type: "varchar",
            isPrimary: true,
            isUnique: true,
          },

          {
            name: "nome",
            type: "varchar",
          },

          {
            name: "telefone",
            type: "varchar",
          },
          {
            name: "cep",
            type: "varchar",
          },
          {
            name: "rua",
            type: "string",
          },
          {
            name: "cidade",
            type: "string",
          },
          {
            name: "bairro",
            type: "string",
          },
          {
            name: "uf",
            type: "string",
          },
          {
            name: "numero",
            type: "varchar",
          },
          {
            name: "complemento",
            type: "string",
            isNullable: true,
          },
          {
            name: "created_at",
            type: "timestamp",
            default: "now()",
          },

          {
            name: "update_at",
            type: "timestamp",
            default: "now()",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("clientes");
  }
}
