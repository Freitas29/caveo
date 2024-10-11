import { ProductsRepository } from "@/domain/repository/ProductsRespository"
import { AddProductInShoppingCartAdapter } from "./AddProductInShoppingCartAdapter"
import { Product } from "@/domain/entities/Product"
import { ProductRepositoryFake } from "@/domain/repository/ProductRepositoryFake"
import { describe, it, expect } from "vitest"

describe("AddProductUseCase", () => {

    it("Deve cadastrar um produto", async () => {
        const repo: ProductsRepository<Product> = new ProductRepositoryFake()
        const useCase = new AddProductInShoppingCartAdapter(repo)

        expect((await repo.getAllProducts()).getValue()).toHaveLength(0)
        
        useCase.addProduct({
             id: 1,
             title: "Teste",
             imageUrl: "imagem.jpg",
        })

        const result = await repo.getAllProducts()

        expect(result.getValue()).toHaveLength(1)
        expect(result.getValue()[0].id).toBe(1)
        expect(result.getValue()[0].title).toBe("Teste")
        expect(result.getValue()[0].imageUrl).toBe("imagem.jpg")
    })

    it("Não deve cadastrar o produto duas vezes", async () => {
        const repo: ProductsRepository<Product> = new ProductRepositoryFake()
        const useCase = new AddProductInShoppingCartAdapter(repo)

        await useCase.addProduct({
            id: 1,
            title: "Teste",
            imageUrl: "imagem.jpg",
        })

        await useCase.addProduct({
            id: 1,
            title: "Teste",
            imageUrl: "imagem.jpg",
        })

        expect((await repo.getAllProducts()).getValue()).toHaveLength(1)
    })
})