import Result from "../Result";

export interface ProductsRepository<T> {
    getAllProducts(): Promise<Result<T[]>>
    addProduct(product: T): Promise<Result<T>>
    removeProduct(id: number): Promise<Result<boolean>>
}