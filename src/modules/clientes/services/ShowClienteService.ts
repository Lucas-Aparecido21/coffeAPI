import { getCustomRepository } from "typeorm";
import Clientes from "../typeorm/entities/Clientes";
import { ClienteRepository } from "../typeorm/repositories/ClienteRepository";

interface IRequest {
  cpf: string;
}

class ShowClienteService {
  public async execute({ cpf }: IRequest): Promise<Clientes> {
    const clientesRepository = getCustomRepository(ClienteRepository);

    const clientes = await clientesRepository.findOne(cpf);

    if (!clientes) {
      throw new Error("Cliente não encontrado");
    }
    return clientes;
  }
}
export default ShowClienteService;
