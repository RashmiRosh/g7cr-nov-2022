export interface IManager<T> {
    fetchRecords(): Promise<T[]>;
    fetchRecord(id: number): Promise<T | null>;
    addRecord(obj: T): Promise<T>;
    removeRecord(id: number): Promise<T>;
    updateRecord(obj: T, id: number): Promise<T>;
}