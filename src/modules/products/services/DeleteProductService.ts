import { getCustomRepository } from "typeorm";
import Product from "../typeorm/entities/Product";

import { ProductRepository } from "../typeorm/repositories/ProductsRepository";

interface IRequest {
  id: string;
}

class DeleteProductService {
  public async execute({ id }: IRequest): Promise<void> {
    const productsRepository = getCustomRepository(ProductRepository);

    const products = await productsRepository.findOne(id);

    if (!products) {
      throw new Error("Product not found");
    }

    await productsRepository.remove(products);
  }
}

export default DeleteProductService;
