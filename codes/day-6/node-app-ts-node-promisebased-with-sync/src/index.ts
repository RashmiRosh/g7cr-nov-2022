import { readData, writeData } from "./manager/manager";
import { config } from "dotenv";

config()
const filePath = process.env.FILE_PATH

const add = (a: number, b: number) => a + b
async function write() {
    if (filePath) {
        try {
            await writeData(filePath, { name: 'anil', id: 1, salary: 1000 })
        } catch (error: any) {
            console.log(error.message)
        }
    }
}
write()
async function read() {
    try {
        if (filePath) {
            const data = await readData(filePath)
            console.log(JSON.parse(data))
        }
    } catch (error: any) {
        console.log(error.message)
    }
}
read()

console.log(add(12, 3))