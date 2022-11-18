import { Employee } from "../../models/employee";

export interface IManager {
    addEmployee(empObj: Employee): Promise<boolean>;
    filterEmployees(salary: number): Promise<Employee[]>
}