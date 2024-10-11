import Result from "@/domain/Result"


export interface RemoveProductInShoppingCart {
    removeProduct(id: number): Promise<Result<boolean>>
}