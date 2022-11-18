import { Employee } from "./employee"

export class Hr extends Employee {
    constructor(name: string, id: number, basic: number, da: number, hra: number, public gratuityPay: number) {
        super(name, id, basic, da, hra)
    }
    calculateSalary(): void {
        super.calculateSalary()
        this.totalSalary += this.gratuityPay
    }
}