import { container } from "../../../inversify.config"
import { IListProductsGateway, listProductsGatewayDI } from "@/domain/gateways/products/ListProductsGateway"

export default async function Page() {
    const gateway = container.get<IListProductsGateway>(listProductsGatewayDI)
    
    const data = await gateway.getProducts()

    return <h1>{data.getValue().map(item => (
        <div key={item.id}>{item.title}</div>
    ))}</h1>
}