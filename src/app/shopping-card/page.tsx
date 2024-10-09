"use client";
import { queryOptions,  useSuspenseQuery } from "@tanstack/react-query"
import { container } from "../../../inversify.config"
import { IListProductsGateway, listProductsGatewayDI } from "@/domain/gateways/products/ListProductsGateway"

export default function Page() {
    const gateway = container.get<IListProductsGateway>(listProductsGatewayDI)
    const productsOptions = queryOptions({
        queryKey: ['products'],
        queryFn: async () => {
            const response = gateway.getProducts()

            return response
        },
    })

    const products = useSuspenseQuery(productsOptions)

    return <label>list: {products.data.map(item => (item.title))}</label>
}