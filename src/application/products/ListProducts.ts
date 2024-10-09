import Result from "@/domain/Result"

export type ProductItemOutput = {
    id: number
    title: string
    description: string
    image: string
}

export type ListProductsOutput = {
    products: ProductItemOutput[];
}

export interface ListProducts {
    getProducts(): Promise<Result<ListProductsOutput>>
}