import { readFile, writeFile } from "fs";
// import * as CallBackTypes from "./types";
import { readCallbackType, writeCallbackType } from "../constants/types";
import { Person } from "../models/person";

export function writeData(filePath: string, data: Person, callback: writeCallbackType) {
    writeFile(
        filePath,
        JSON.stringify(data),
        { encoding: 'utf-8' },
        callback
    )
}

export function readData(filePath: string, callback: readCallbackType) {
    readFile(
        filePath,
        callback
    )
}

