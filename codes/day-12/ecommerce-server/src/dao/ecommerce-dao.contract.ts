export interface EcommerDaoContarct<T> {
    write(data: T[]): Promise<void>;
    read(): Promise<T[]>
}