import Result from "../Result";

export interface Repository<T> {
    insert(item: T): Promise<Result<boolean>>
    getAll(): Promise<Result<T[]>>
    delete(id: number): Promise<Result<boolean>>
} 