export interface IBusinessComponent<T> {
    add(data: T): Promise<T>;
    update(data: T, id: number): Promise<T>;
    remove(id: number): Promise<T>;
    get(id: number): Promise<T>;
    getAll(): Promise<T[]>;
}