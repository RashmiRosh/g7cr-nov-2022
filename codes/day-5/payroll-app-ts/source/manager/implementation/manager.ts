import { employees } from "../../data/repository"
import { Employee } from "../../models/employee"
import { IManager } from "../abstraction/manager.contract"

export class Manager implements IManager {
    async addEmployee(empObj: Employee): Promise<boolean> {
        if (employees) {
            try {
                let index = -1
                if (employees.length > 0) {
                    index = employees.findIndex(
                        function (emp) {
                            return emp.id === empObj.id
                        }
                    )
                }

                if (index === -1 || employees.length === 0) {
                    employees.push(empObj)
                    return true
                } else
                    return false
            } catch (error) {
                throw error
            }
        } else
            throw new Error('repository not defined')
    }

    async filterEmployees(salary: number): Promise<Employee[]> {
        if (employees) {
            try {
                let result: Employee[] = []
                if (employees.length > 0) {
                    result = employees.filter(function (emp) {
                        return emp.totalSalary > salary
                    })
                }
                return result
            } catch (error) {
                throw error
            }
        } else
            throw new Error('repository not defined')
    }
}