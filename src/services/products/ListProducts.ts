import Result from "@/domain/Result";

export type ProductResponse = {
    id: number
    title: string
    price: string
    category: string
    description: string
    image: string
}

export interface ListProducts {
    getProducts(): Promise<Result<ProductResponse>>
}