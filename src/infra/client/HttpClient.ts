import Result from "@/domain/Result"

type HttpClientParams = {
    url: string
    headers?: Record<string, string>
}

export type PostHttpClientParams = HttpClientParams & {
    data: unknown
}

export type GetHttpClientParams = HttpClientParams & {
    queryParams?: unknown
}

export type PutHttpClientParams = HttpClientParams & {
    data?: unknown
}

export type PatchHttpClientParams = HttpClientParams & {
    data?: unknown
}

export interface HttpClient {
    get<T>(params: GetHttpClientParams): Promise<Result<T>>
    post<T>(params: PostHttpClientParams): Promise<Result<T>>
    put<T>(params: PutHttpClientParams): Promise<Result<T>>
    patch<T>(params: PatchHttpClientParams): Promise<Result<T>>
}

export const httpClientDI = "httpClientDI"
