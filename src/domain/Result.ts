export default class Result<T> {
    public isSuccess: boolean;
    public isFailure: boolean;
    public error: string;
    private _value?: T;
    
    private constructor(isSucces: boolean, error?: string | null, value?: T) {
      if (isSucces && error)
        throw new Error('Invalid operation: Cannot sucess with an error');
    
      if (!isSucces && !error)
        throw new Error(
          'Invalid operation: A failing needs to contain an error message',
        );
    
      this.isSuccess = isSucces;
      this.isFailure = !isSucces;
      this.error = error as string;
      this._value = value;
    }
    
    public getValue(): T {
      if (!this.isSuccess)
        throw new Error('Cannot retrieve the value from an error');
    
      return this._value as T;
    }
    
    public static ok<U>(value?: U): Result<U> {
      return new Result<U>(true, null, value);
    }
    
    public static fail<U>(error: string | undefined): Result<U> {
      return new Result<U>(false, error);
    }
    
    public static combine<T>(
      list: Result<T>[],
      error?: string,
    ): Result<T[]> {
      const hasSomefailure = list.some((item) => item.isFailure);
    
      if (hasSomefailure) return Result.fail(error || "Ocorreu um erro inesperado");
    
      const result = list.map(item => item.getValue())

      return Result.ok(result);
    }
}