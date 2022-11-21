import { readData, writeData } from "./data-operations";
import { config } from "dotenv";

config()
const filePath = process.env.FILE_PATH

if (filePath) {
    writeData(
        filePath,
        function (err) {
            if (err)
                console.log(err.message)
            else
                console.log('data writing is over')
        })
}

if (filePath) {
    readData(
        filePath,
        function (err, data) {
            if (err)
                console.log(err.message)

            if (data)
                console.log(JSON.parse(data))
        }
    )
}