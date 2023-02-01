import { getCustomRepository } from "typeorm";
import Clientes from "../typeorm/entities/Clientes";
import { ClienteRepository } from "../typeorm/repositories/ClienteRepository";

interface IRequest {
  cpf: string;
  nome: string;
  telefone: string;
}

class UpdateClienteService {
  public async execute({ cpf, nome, telefone }: IRequest): Promise<Clientes> {
    const clientesRepository = getCustomRepository(ClienteRepository);

    const clientes = await clientesRepository.findOne(cpf);

    if (!clientes) {
      throw new Error("Cliente não encontrado.");
    }

    const clienteExists = await clientesRepository.findByID(cpf);

    if (clienteExists && cpf !== clientes.cpf) {
      throw new Error("Já existe um cliente com este CPF.");
    }

    clientes.cpf = cpf;
    clientes.nome = nome;
    clientes.telefone = telefone;

    await clientesRepository.save(clientes);
    return clientes;
  }
}

export default UpdateClienteService;
