import { readFile, writeFile } from "fs";
// import * as CallBackTypes from "./types";
import { readCallbackType, writeCallbackType } from "../constants/types";
import { Person } from "../models/person";
import { promisify } from 'util'

const writeFileAsync = promisify(writeFile)
const readFileAsync = promisify(readFile)

export function writeData(filePath: string, data: Person) {
    return writeFileAsync(
        filePath,
        JSON.stringify(data),
        { encoding: 'utf-8' }
    )
}

export function readData(filePath: string) {
    return readFileAsync(filePath, { encoding: 'utf-8' })
}

