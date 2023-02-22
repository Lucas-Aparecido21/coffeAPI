import { Request, Response } from "express";
import CreateClienteService from "../services/CreateClienteService";
import DeleteClienteService from "../services/DeleteClienteService";
import ListClienteService from "../services/ListClienteService";
import ShowClienteService from "../services/ShowClienteService";
import UpdateClienteService from "../services/UpdateClienteService";

export default class ClientesController {
  public async index(request: Request, response: Response): Promise<Response> {
    const listClientes = new ListClienteService();

    const clientes = await listClientes.execute();

    return response.json(clientes);
  }

  public async show(request: Request, response: Response): Promise<Response> {
    {
      const { cpf, bairro, cep, cidade, nome, numero, rua, telefone, uf } =
        request.params;
      const showCliente = new ShowClienteService();

      const cliente = await showCliente.execute({
        cpf,
        bairro,
        cep,
        cidade,
        nome,
        numero,
        rua,
        telefone,
        uf,
      });

      const createCliente = new CreateClienteService();

      const clientes = await createCliente.execute({
        cpf,
        nome,
        telefone,
        cep,
        bairro,
        cidade,
        numero,
        rua,
        uf,
      });
      if (cliente) {
        return response.json(cliente);
      } else {
        return response.json(clientes);
      }
    }
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const {
      cpf,
      nome,
      telefone,
      cep,
      bairro,
      cidade,
      numero,
      rua,
      uf,
      complemento,
    } = request.body;
    const createCliente = new CreateClienteService();

    const cliente = await createCliente.execute({
      cpf,
      nome,
      telefone,
      cep,
      bairro,
      cidade,
      numero,
      rua,
      uf,
      complemento,
    });
    return response.json(cliente);
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const { nome, telefone, bairro, cidade, cep, numero, rua, uf } =
      request.body;
    const { cpf } = request.params;

    const updateCliente = new UpdateClienteService();
    const cliente = await updateCliente.execute({
      cpf,
      nome,
      telefone,
      cep,
      bairro,
      cidade,
      numero,
      rua,
      uf,
    });

    return response.json(cliente);
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    const { cpf } = request.params;
    const deleteCliente = new DeleteClienteService();
    await deleteCliente.execute({ cpf });
    return response.json([]);
  }
}
