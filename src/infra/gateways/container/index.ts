import { ContainerModule } from "inversify";
import { ListProductsGateway } from "@/infra/gateways/products/ListProductsGateway";
import { IListProductsGateway, listProductsGatewayDI } from "@/domain/gateways/products/ListProductsGateway";

export const gatewaysContainer = new ContainerModule((bind)=> {
    bind<IListProductsGateway>(listProductsGatewayDI).to(ListProductsGateway)
})