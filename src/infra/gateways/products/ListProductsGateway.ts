import { IListProductsGateway, ProductResponse } from "@/domain/gateways/products/ListProductsGateway";
import Result from "@/domain/Result";
import { type HttpClient, httpClientDI } from "@/infra/client/HttpClient";
import { inject, injectable } from "inversify";
import "reflect-metadata"


@injectable()
export class ListProductsGateway implements IListProductsGateway {
    constructor(
        @inject(httpClientDI) private readonly client: HttpClient
    ) {

    }
    
    async getProducts(): Promise<Result<ProductResponse[]>> {
        const data = await this.client.get<ProductResponse[]>({
            url: "https://fakestoreapi.com/products?limit=5",
        })

        if(data.isFailure) return Result.fail(data.error)

        return Result.ok(data.getValue())
    }
}