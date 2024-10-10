import { ContainerModule } from "inversify";
import { ListProductsUseCase } from "../products/ListProductsUseCase";
import { ListProducts, listProductsUseCaseDI } from "@/domain/useCases/products/ListProducts";

export const applicationContainer = new ContainerModule((bind) => {
    bind<ListProducts>(listProductsUseCaseDI).to(ListProductsUseCase)
})