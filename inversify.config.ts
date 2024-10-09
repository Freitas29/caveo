import { infraContainer } from "@/infra/container";
import { Container } from "inversify";

const container = new Container()

container.load(infraContainer)

export {
    container
}