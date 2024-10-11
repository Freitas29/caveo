import { ProductsRepository } from "@/domain/repository/ProductsRespository"
import { Product } from "@/domain/entities/Product"
import { ProductRepositoryFake } from "@/domain/repository/ProductRepositoryFake"
import { describe, it, expect } from "vitest"
import { RemoveProductInShoppingCartAdapter } from "./RemoveProductInShoppingCartAdapter"

describe("GetAllProductsUseCase", () => {

    it("Deve cadastrar um produto", async () => {
        const repo: ProductsRepository<Product> = new ProductRepositoryFake()
        await Promise.all([
            repo.addProduct({
                description: "Product",
                id: 1,
                imageUrl: "imagem.jpg",
                price: 10,
                title: "Teste"
            }),
            repo.addProduct({
                description: "Teste",
                id: 2,
                imageUrl: "imagem.jpg",
                price: 10,
                title: "Teste"
            }),
            repo.addProduct({
                description: "AA",
                id: 3,
                imageUrl: "imagem.jpg",
                price: 10,
                title: "Teste"
            })
        ]) 

        const useCase = new RemoveProductInShoppingCartAdapter(repo)
        const response = await useCase.removeProduct(2)

        expect(response.getValue()).toBeTruthy()
        const products = await repo.getAllProducts()
        expect(products.getValue()).toHaveLength(2)
        expect(products.getValue()).not.toStrictEqual({
            description: "Teste",
            id: 2,
            imageUrl: "imagem.jpg",
            price: 10,
            title: "Teste"
        })
    })
})