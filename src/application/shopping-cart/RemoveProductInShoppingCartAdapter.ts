import { ProductsRepositoryZuntand } from "../repository/ProductRepositoryZustand";
import Result from "@/domain/Result";
import { RemoveProductInShoppingCart } from "@/domain/useCases/shopping-cart/RemoveProductInShoppingCart";

export class RemoveProductInShoppingCartAdapter implements RemoveProductInShoppingCart {
    constructor(
        private readonly shoppingCartRepo: ProductsRepositoryZuntand
    ) { }
    
    async removeProduct(id: number): Promise<Result<boolean>> {
        const response = await this.shoppingCartRepo.removeProduct(id)

        if(response.isFailure) return Result.fail(response.error)

        return Result.ok(true)
    }
}