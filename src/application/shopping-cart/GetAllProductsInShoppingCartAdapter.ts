import { GetAllProductsInShoppingCart, GetAllProductsOutput } from "@/domain/useCases/shopping-cart/GetAllProductsInShoppingCart";
import { ProductsRepository } from "@/domain/repository/ProductsRespository";
import { Product } from "@/domain/entities/Product";

export class GetAllProductsInShoppingCartAdapter implements GetAllProductsInShoppingCart {
    constructor(
        private readonly shoppingCartRepo: ProductsRepository<Product>
    ) { }
    
    async getAllProducts(): Promise<GetAllProductsOutput> {
        const response = await this.shoppingCartRepo.getAllProducts()

        if(response.isFailure) return { products: [] }

        return {
            products: response.getValue().map((product) => ({
                id: product.id,
                title: product.title,
                description: product.description,
                imageUrl: product.imageUrl,
                price: product.price
            }))
        }
    }
}