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
            type: "string",
            isPrimary: true,
          },

          {
            name: "nome",
            type: "varchar",
          },

          {
            name: "telefone",
            type: "string",
          },
          {
            name: "cep",
            type: "string",
            isNullable: true,
          },
          {
            name: "rua",
            type: "string",
            isNullable: true,
          },
          {
            name: "cidade",
            type: "string",
            isNullable: true,
          },
          {
            name: "bairro",
            type: "string",
            isNullable: true,
          },
          {
            name: "uf",
            type: "string",
            isNullable: true,
          },
          {
            name: "numero",
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
