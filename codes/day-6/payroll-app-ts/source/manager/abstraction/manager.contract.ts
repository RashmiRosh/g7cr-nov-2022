export interface IManager<T> {
    addEmployee(empObj: T): Promise<boolean>;
    fetchEmployees(): Promise<T[]>
}