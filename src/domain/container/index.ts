import { ContainerModule } from "inversify";
import { container } from "../../../inversify.config";
import { gatewaysContainer } from "../../infra/gateways/container";

export const domainContainer = new ContainerModule(() => {
    container.load(gatewaysContainer)
})