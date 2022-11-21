import { readFile, writeFile } from "fs";
// import * as CallBackTypes from "./types";
import { readCallbackType, writeCallbackType } from "./types";

export function writeData(filePath: string, callback: writeCallbackType) {
    writeFile(
        filePath,
        JSON.stringify([{ name: 'anil', id: 1, salary: 1000 }]),
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

