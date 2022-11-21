import { readFile, readFileSync, writeFile, writeFileSync } from "fs";
// import * as CallBackTypes from "./types";
import { readCallbackType, writeCallbackType } from "../constants/types";
import { Person } from "../models/person";


export async function writeData(filePath: string, data: Person) {
    writeFileSync(filePath, JSON.stringify(data), { encoding: 'utf-8' })
}

export async function readData(filePath: string) {
    return readFileSync(filePath, { encoding: 'utf-8' })
}

