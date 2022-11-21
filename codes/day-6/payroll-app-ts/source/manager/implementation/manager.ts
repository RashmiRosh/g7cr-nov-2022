import { readEmployeeData, writeEployeeData } from "../../dao/employee-dao"
import { Employee } from "../../models/employee"
import { IManager } from "../abstraction/manager.contract"

export class Manager implements IManager<Employee> {
    async addEmployee(empObj: Employee): Promise<boolean> {
        try {
            const temp = await readEmployeeData()
            const employees = <Employee[]>JSON.parse(temp.toString())
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
                        await writeEployeeData(employees)
                        return true
                    } else
                        return false
                } catch (error) {
                    throw error
                }
            } else
                throw new Error('repository not defined')
        } catch (error) {
            throw error
        }

    }

    async fetchEmployees(): Promise<Employee[]> {
        try {
            const temp = await readEmployeeData()
            const employees = <Employee[]>JSON.parse(temp.toString())

            if (employees) {
                return employees
            } else
                throw new Error('repository not defined')
        } catch (error) {
            throw error
        }
    }
}