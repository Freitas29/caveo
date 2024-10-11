import { ProductsRepository } from "@/domain/repository/ProductsRespository"
import { Product } from "@/domain/entities/Product"
import { ProductRepositoryFake } from "@/domain/repository/ProductRepositoryFake"
import { describe, it, expect } from "vitest"
import { GetAllProductsInShoppingCartAdapter } from "./GetAllProductsInShoppingCartAdapter"

describe("GetAllProductsUseCase", () => {

    it("Deve cadastrar um produto", async () => {
        const repo: ProductsRepository<Product> = new ProductRepositoryFake()
        repo.addProduct({
            description: "Product",
            id: 1,
            imageUrl: "imagem.jpg",
            price: 10,
            title: "Teste"
        })

        repo.addProduct({
            description: "Teste",
            id: 2,
            imageUrl: "imagem.jpg",
            price: 10,
            title: "Teste"
        })

        repo.addProduct({
            description: "AA",
            id: 3,
            imageUrl: "imagem.jpg",
            price: 10,
            title: "Teste"
        })
        const useCase = new GetAllProductsInShoppingCartAdapter(repo)
        
        const response = await useCase.getAllProducts()

        expect(response.products).toHaveLength(3)
        expect(response.products[0].title).toBe("Teste")
        expect(response.products[0].imageUrl).toBe("imagem.jpg")
        expect(response.products[0].id).toBe(1)
    })
})