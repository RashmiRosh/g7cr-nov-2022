import { readFileSync, writeFileSync } from "fs";
import { Employee } from "../models/employee";
import { config } from "dotenv";

config()
const filePath: string | undefined = process.env.FILE_PATH

export async function readEmployeeData() {
    return readFileSync(filePath ? filePath : './employees.json')
}
export async function writeEployeeData(data: Employee[]) {
    writeFileSync(filePath ? filePath : './employees.json', JSON.stringify(data))
}