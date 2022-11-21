const fs = require('fs')

function writeData(filePath, callback) {
    fs.writeFile(
        filePath,
        JSON.stringify([{ name: 'anil', id: 1, salary: 1000 }]),
        { encoding: 'utf-8' },
        callback
    )
}

function readData(filePath, callback) {
    fs.readFile(
        filePath,
        callback
    )
}

module.exports = {
    writeData, readData
}
