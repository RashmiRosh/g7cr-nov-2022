export interface IDao<T> {
    writeData(arr: T[]): Promise<void>;
    readData(): Promise<T[]>;
}