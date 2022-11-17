export interface IDataService<T> {
    getData(): Promise<T[]>
}