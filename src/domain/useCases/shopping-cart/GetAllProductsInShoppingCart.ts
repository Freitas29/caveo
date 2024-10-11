export type ProductOutputInShoppingCartOutput = {
    id: number
    title: string
    imageUrl: string
}

export type GetAllProductsOutput = {
    products: ProductOutputInShoppingCartOutput[]
}

export interface GetAllProductsInShoppingCart {
    getAllProducts(): Promise<GetAllProductsOutput>
}