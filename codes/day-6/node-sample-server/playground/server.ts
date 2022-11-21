import { readFileSync, writeFileSync } from "fs";
import { createServer } from "http";
import { resolve } from "path";

const server = createServer(
    (req, res) => {
        // const jsData = { name: 'anil', id: 1, salary: 1000 }
        //res.setHeader('Content-Type', 'text/json')
        //res.end(JSON.stringify(jsData))
        const filePath = resolve(__dirname, 'pages', 'index.html')
        console.log(filePath)
        const htmlData = readFileSync(filePath)
        console.log(htmlData.toString())
        res.setHeader('Content-Type', 'text/html')
        res.end(htmlData.toString())
    }
)

server
    .listen(
        3000,
        () => {
            console.log('server is running')
        }
    )

console.log('hello')