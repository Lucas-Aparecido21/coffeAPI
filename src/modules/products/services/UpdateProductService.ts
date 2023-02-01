import AppError from "@shared/errors/AppError";
import { getCustomRepository } from "typeorm";
import Product from "../typeorm/entities/Product";

import { ProductRepository } from "../typeorm/repositories/ProductsRepository";

interface IRequest {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

class UpdateProductService {
  public async execute({
    id,
    name,
    price,
    quantity,
  }: IRequest): Promise<Product> {
    const productsRepository = getCustomRepository(ProductRepository);

    const products = await productsRepository.findOne(id);

    if (!products) {
      throw new Error("Product not found");
    }

    const productExists = await productsRepository.findByName(name);

    if (productExists && name !== products.name) {
      throw new AppError("There is already onde product with that name");
    }

    products.name = name;
    products.price = price;
    products.quantity = quantity;

    await productsRepository.save(products);
    return products;
  }
}

export default UpdateProductService;
