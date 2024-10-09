import { HttpClient, httpClientDI } from "@/infra/client/HttpClient";
import { ContainerModule } from "inversify";
import { AxiosHttpClientAdapter } from "../AxiosHttpClientAdapter";
import { container } from "../../../inversify.config";
import { gatewaysContainer } from "../gateways/container";

export const infraContainer = new ContainerModule((bind) => {
    container.load(gatewaysContainer)
    bind<HttpClient>(httpClientDI).to(AxiosHttpClientAdapter)
})