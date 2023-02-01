import { getCustomRepository } from "typeorm";
import Clientes from "../typeorm/entities/Clientes";
import { ClienteRepository } from "../typeorm/repositories/ClienteRepository";

interface IRequest {
  cpf: string;
  nome: string;
  telefone: string;
}

class CreateClienteService {
  public async execute({ cpf, nome, telefone }: IRequest): Promise<Clientes> {
    const clientesRepository = getCustomRepository(ClienteRepository);
    const clienteExist = await clientesRepository.findByID(cpf);

    if (clienteExist) {
      throw new Error("O cliente com este CPF já existe.");
    }

    const cliente = await clientesRepository.create({
      cpf,
      nome,
      telefone,
    });

    await clientesRepository.save(cliente);
    return cliente;
  }
}

export default CreateClienteService;
