import AppError from "@shared/errors/AppError";
import { getCustomRepository } from "typeorm";
import Clientes from "../typeorm/entities/Clientes";
import { ClienteRepository } from "../typeorm/repositories/ClienteRepository";

interface IRequest {
  cpf: string;
  nome: string;
  telefone: string;
  bairro: string;
  cep: string;
  cidade: string;
  numero: string;
  rua: string;
  uf: string;
  complemento?: string;
}

class ShowClienteService {
  public async execute({
    cpf,
    nome,
    telefone,
    bairro,
    cep,
    cidade,
    numero,
    rua,
    uf,
  }: IRequest): Promise<Clientes> {
    const clientesRepository = getCustomRepository(ClienteRepository);

    const clientes = await clientesRepository.findOne(cpf);

    if (!clientes) {
      const cliente = await clientesRepository.create({
        cpf,
        nome,
        telefone,
        bairro,
        cep,
        cidade,
        numero,
        rua,
        uf,
      });

      await clientesRepository.save(cliente);
      return cliente;
    }

    return clientes;
  }
}
export default ShowClienteService;
