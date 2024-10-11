import Result from "@/domain/Result"

export type AddProductOutput = {
    id: number
    title: string
    imageUrl: string
}

export type AddProductInput = {
    id: number
    title: string
    imageUrl: string
}

export interface AddProductInShoppingCart {
    addProduct(product: AddProductInput): Promise<Result<AddProductOutput>>
}