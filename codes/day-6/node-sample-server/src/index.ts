import { createServer } from "http";
import { ParsedUrlQuery } from "querystring";
import { parse, UrlWithParsedQuery, } from 'url'

const server = createServer(
    (req, res) => {
        if (req.url) {
            const urlSting: string = req.url

            const urlObj: UrlWithParsedQuery = parse(urlSting, true)

            const queryString: ParsedUrlQuery = urlObj.query
            console.log(queryString.value1)
            console.log(queryString.value2)
        }

        res.end('hello')
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