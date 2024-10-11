import { ProductsRepositoryZuntand } from "../repository/ProductRepositoryZustand";
import { AddProductInput, AddProductInShoppingCart, AddProductOutput } from "@/domain/useCases/shopping-cart/AddProductInShoppingCart";
import Result from "@/domain/Result";

export class AddProductInShoppingCartAdapter implements AddProductInShoppingCart {
    constructor(
        private readonly shoppingCartRepo: ProductsRepositoryZuntand
    ) { }
    
    async addProduct(product: AddProductInput): Promise<Result<AddProductOutput>> {
        const response = await this.shoppingCartRepo.addProduct({
            description: "",
            id: product.id,
            imageUrl: product.imageUrl,
            price: 0,
            title: product.title
        })

        if(response.isFailure) return Result.fail(response.error)

        return Result.ok({
            id: response.getValue().id,
            title: response.getValue().title,
            imageUrl: response.getValue().imageUrl
        })
    }
}