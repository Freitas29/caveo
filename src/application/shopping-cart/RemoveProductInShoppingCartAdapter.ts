import { Product } from "@/domain/entities/Product";
import Result from "@/domain/Result";
import { RemoveProductInShoppingCart } from "@/domain/useCases/shopping-cart/RemoveProductInShoppingCart";
import { ProductsRepository } from "@/domain/repository/ProductsRespository";

export class RemoveProductInShoppingCartAdapter implements RemoveProductInShoppingCart {
    constructor(
        private readonly shoppingCartRepo: ProductsRepository<Product>
    ) { }
    
    async removeProduct(id: number): Promise<Result<boolean>> {
        const response = await this.shoppingCartRepo.removeProduct(id)

        if(response.isFailure) return Result.fail(response.error)

        return Result.ok(true)
    }
}