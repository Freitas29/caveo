import { type IListProductsGateway, listProductsGatewayDI } from "@/domain/gateways/products/ListProductsGateway";
import Result from "@/domain/Result";
import { ListProducts, ListProductsOutput } from "@/domain/useCases/products/ListProducts";
import { inject, injectable } from "inversify";
import "reflect-metadata"

@injectable()
export class ListProductsUseCase implements ListProducts {
    constructor(
        @inject(listProductsGatewayDI) private readonly gateway: IListProductsGateway
    ) {

    }

    async getProducts(): Promise<Result<ListProductsOutput>> {
        const response = await this.gateway.getProducts()

        if(response.isFailure) return Result.fail(response.error)

        return Result.ok({
            products: response.getValue().map((product) => ({
                id: product.id,
                title: product.title,
                description: product.description,
                image: product.image
            }))
        })
    }
}