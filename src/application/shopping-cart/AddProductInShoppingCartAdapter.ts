import { AddProductInput, AddProductInShoppingCart, AddProductOutput } from "@/domain/useCases/shopping-cart/AddProductInShoppingCart";
import Result from "@/domain/Result";
import { Product } from "@/domain/entities/Product";
import { ProductsRepository } from "@/domain/repository/ProductsRespository";

export class AddProductInShoppingCartAdapter implements AddProductInShoppingCart {
    constructor(
        private readonly shoppingCartRepo: ProductsRepository<Product>
    ) { }
    
    async addProduct(product: AddProductInput): Promise<Result<AddProductOutput>> {
        const hasAlreadyAddedProduct = (await this.shoppingCartRepo.getAllProducts()).getValue().some(repoProduct => repoProduct.id === product.id)
        if(hasAlreadyAddedProduct) {
            return Result.fail("Product already added")
        }

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