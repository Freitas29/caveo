import { IListProductsGateway, ProductResponse } from "@/domain/gateways/products/ListProductsGateway";
import { type HttpClient, httpClientDI } from "@/infra/client/HttpClient";
import { inject, injectable } from "inversify";
import "reflect-metadata"


@injectable()
export class ListProductsGateway implements IListProductsGateway {
    constructor(
        @inject(httpClientDI) private readonly client: HttpClient
    ) {

    }
    
    async getProducts(): Promise<ProductResponse[]> {
        const data = await this.client.get<ProductResponse[]>({
            url: "https://fakestoreapi.com/products",
        })

        if(data.isFailure) throw new Error(data.error)

        return data.getValue()
    }
}