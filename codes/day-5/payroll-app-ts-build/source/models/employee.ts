export class Employee {
    totalSalary: number;

    constructor(public name: string, public id: number, public basicPay: number, public daPay: number, public hraPay: number) {
        this.totalSalary = 0
    }
    calculateSalary(): void {
        this.totalSalary = this.basicPay + this.daPay + this.hraPay
    }
}