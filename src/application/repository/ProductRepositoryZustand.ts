import { ShoppingCartState } from "@/app/shopping-cart/useShoppingCart";
import { Product } from "@/domain/entities/Product";
import { ProductsRepository } from "@/domain/repository/ProductsRespository";
import Result from "@/domain/Result";

export class ProductsRepositoryZuntand implements ProductsRepository<Product> {
    constructor(private readonly zustand: ShoppingCartState) {
    }

    async getAllProducts(): Promise<Result<Product[]>> {
        const response: Product[] = this.zustand.products.map(product => ({
            description: "",
            id: product.id,
            imageUrl: product.image,
            price: 0,
            title: product.title,
        }))
        return Result.ok(response)
    }
    
    async addProduct(product: Product): Promise<Result<Product>> {
        this.zustand.addProduct({
            id: product.id,
            image: product.imageUrl,
            title: product.title
        })
        return Result.ok(product)
    }
    
    async removeProduct(id: number): Promise<Result<boolean>> {
        this.zustand.removeProduct(id)
        return Result.ok(true)
    }

}