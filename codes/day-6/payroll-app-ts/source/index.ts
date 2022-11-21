import { Manager } from "./manager/implementation/manager"
import { Developer } from "./models/developer";
import { Hr } from "./models/hr";
import { Employee } from "./models/employee";

const successFn = function (status: boolean): void {
    console.log(status ? 'added' : 'could not add')
}
const failureFn = function (e: any): void {
    console.log(e.message)
}

async function add(emp: Employee) {
    try {
        const manager = new Manager()
        const status = await manager.addEmployee(emp)
        successFn(status)
    } catch (error) {
        failureFn(error)
    }
}

async function fetchData() {
    try {
        const manager = new Manager()
        const employees = await manager.fetchEmployees()
        if (employees !== undefined && employees.length > 0) {
            console.log(employees)
        }
    } catch (error) {
        failureFn(error)
    }
}

(
    async () => {
        const anilDeveloper = new Developer('anil', 1, 1000, 2000, 3000, 4000)
        anilDeveloper.calculateSalary()
        await add(anilDeveloper)

        const sunilHr = new Hr('sunil', 2, 2000, 3000, 4000, 5000)
        sunilHr.calculateSalary()
        await add(sunilHr)

        const joydipDeveloper = new Developer('joydip', 3, 3000, 4000, 5000, 6000)
        joydipDeveloper.calculateSalary()
        await add(joydipDeveloper)

        const vinodHr = new Hr('vinod', 4, 4000, 5000, 6000, 7000)
        vinodHr.calculateSalary()
        await add(vinodHr)

        await fetchData()
    }
)()

