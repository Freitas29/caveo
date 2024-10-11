import { Product } from "../entities/Product"
import Result from "../Result"
import { ProductsRepository } from "./ProductsRespository"

export class ProductRepositoryFake implements ProductsRepository<Product> {
    private products: Product[] = []

    async getAllProducts(): Promise<Result<Product[]>> {
        return Result.ok(this.products)
    }
    async addProduct(product: Product): Promise<Result<Product>> {
        this.products.push(product)

        return Result.ok(product)
    }
    async removeProduct(id: number): Promise<Result<boolean>> {
        this.products = this.products.filter(product => product.id !== id)
        return Result.ok(true)
    }
}