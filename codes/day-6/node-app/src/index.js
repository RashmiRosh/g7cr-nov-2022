const { writeData, readData } = require('./data-operations')
const { config } = require('dotenv')

config()
const filePath = process.env.FILE_PATH

writeData(
    filePath,
    function (err) {
        if (err)
            console.log(err.message)
        else
            console.log('data writing is over')
    })

readData(
    filePath,
    function (err, data) {
        if (err)
            console.log(err.message)

        if (data)
            console.log(JSON.parse(data))
    }
)