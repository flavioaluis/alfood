export interface IPaginacao<T> {
    count: number
    next: string
    previous: string
    results: T[]
}

export interface IParametrosBusca {
    ordering?: string
    search?: string
  }