import Result from "@/domain/Result";
import { GetHttpClientParams, HttpClient } from "@/infra/client/HttpClient";
import axios from "axios";
import { injectable } from "inversify";
import "reflect-metadata"

@injectable()
export class AxiosHttpClientAdapter implements HttpClient {
    async get<T>(params: GetHttpClientParams): Promise<Result<T>> {
        try {
            const response = await axios.get(params.url, {
                params: params.queryParams
            })

            return Result.ok<T>(response.data)
        }catch {
            return Result.fail("Error")
        }
    }
    async post<T>(params: unknown): Promise<Result<T>> {
        console.log(params)
        throw new Error("Method not implemented.");
    }
    put<T>(params: unknown): Promise<Result<T>> {
        console.log(params)
        throw new Error("Method not implemented.");
    }
    patch<T>(params: unknown): Promise<Result<T>> {
        console.log(params)
        throw new Error("Method not implemented.");
    }

}