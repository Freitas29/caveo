import { applicationContainer } from "@/application/container";
import { infraContainer } from "@/infra/container";
import { Container } from "inversify";

const container = new Container()

container.load(infraContainer)
container.load(applicationContainer)

export {
    container
}