import { Manager } from "./manager/implementation/manager"
import { Developer } from "./models/developer";
import { Hr } from "./models/hr";
import { employees } from "./data/repository";
import { Employee } from "./models/employee";
//import * as toastr from "toastr";

const successFn = function (status: boolean): void {
    console.log(status ? 'added' : 'could not add')
    console.log(employees)
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

async function filterData() {
    try {
        const manager = new Manager()
        const filteredArray = await manager.filterEmployees(12000)
        if (filteredArray !== undefined && filteredArray.length > 0) {
            console.log(filteredArray)
        }
    } catch (error) {
        failureFn(error)
    }
}

const createEmployee = () => {
    const id = Number((<HTMLInputElement>document.getElementById('txtId')).value)
    const name = (<HTMLInputElement>document.getElementById('txtName')).value
    const basicPay = Number((<HTMLInputElement>document.getElementById('txtBasicPay')).value)
    const daPay = Number((<HTMLInputElement>document.getElementById('txtDaPay')).value)
    const hraPay = Number((<HTMLInputElement>document.getElementById('txtHraPay')).value)
    const extraPay = Number((<HTMLInputElement>document.getElementById('txtExtraPay')).value)

    let employee: Employee | undefined;
    if ((<HTMLInputElement>document.getElementById('radioDeveloper')).checked) {
        employee = new Developer(name, id, basicPay, daPay, hraPay, extraPay)
    }
    if ((<HTMLInputElement>document.getElementById('radioHr')).checked) {
        employee = new Hr(name, id, basicPay, daPay, hraPay, extraPay)
    }
    return employee
}

const radioDeveloper = (<HTMLInputElement>document.getElementById('radioDeveloper'))
const radioHr = (<HTMLInputElement>document.getElementById('radioHr'))

radioDeveloper.addEventListener('change', () => {
    if (radioDeveloper.checked) {
        const labelExtra = (<HTMLLabelElement>document.getElementById('lblExtraPay'))
        labelExtra.innerHTML = 'Incentive Pay &nbsp;';

        (<HTMLInputElement>document.getElementById('txtExtraPay')).placeholder = 'Enter Incentive'
    }
})
radioHr.addEventListener('change', () => {
    if (radioHr.checked) {
        const labelExtra = (<HTMLLabelElement>document.getElementById('lblExtraPay'))
        labelExtra.innerHTML = 'Gratuity Pay&nbsp;';
        (<HTMLInputElement>document.getElementById('txtExtraPay')).placeholder = 'Enter Gratuity'
    }
})

const createTd = (value: any) => {
    const td = document.createElement('td')
    td.innerText = value
    return td
}
const generateTable = (employeeObj: Employee) => {
    const newRow = document.createElement('tr')
    newRow.classList.add('table-dark')

    //first column 
    let typeTd: HTMLTableCellElement = document.createElement('th')
    typeTd.setAttribute('scope', 'row')

    //sixth column
    let extraTd: HTMLTableCellElement = createTd('')
    if (employeeObj instanceof (Developer)) {
        typeTd.innerText = 'Developer'
        extraTd.innerText = (<Developer>employeeObj).incentivePay.toString()
    }
    if (employeeObj instanceof (Hr)) {
        typeTd.innerText = 'Hr'
        extraTd.innerText = (<Hr>employeeObj).gratuityPay.toString()
    }
    //second column
    const nameTd = createTd(employeeObj.name)
    //third column
    const basicTd = createTd(employeeObj.basicPay.toString())
    //fourth column
    const daTd = createTd(employeeObj.daPay.toString())
    //fifth column
    const hraTd = createTd(employeeObj.hraPay.toString())
    //seventh column
    const salaryTd = createTd(employeeObj.totalSalary.toString())
    newRow.append(typeTd, nameTd, basicTd, daTd, hraTd, extraTd, salaryTd);
    (<HTMLTableSectionElement>document.getElementById('tbodyEmployee')).appendChild(newRow)
}

const frm = document.getElementById('frmEmployee')
frm?.addEventListener('submit', (e) => {
    e.preventDefault()
    const employeeObj = createEmployee()
    if (!employeeObj)
        throw new Error('could not create instance')

    employeeObj.calculateSalary()
    add(employeeObj)
        .then(
            () => {
                // toastr.success('Have fun storming the castle!', 'Miracle Max Says')
                generateTable(employeeObj)
            }
        )
})



filterData()