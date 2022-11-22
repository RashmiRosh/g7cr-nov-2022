//import x, { subtract } from "./index";

import express, { json } from "express";
import routerMiddleware from "./routes";

const app = express()


const jsonParserMiddleware = json()
app.use(jsonParserMiddleware)
app.use(routerMiddleware)

// app.get('/api/todos/:id/:name/:salary',
//     (req, res) => {
//         console.log(req.params)
//         res.send(`request received for ${req.params.id},${req.params.name},${req.params.salary}`)
//     })
app.listen(
    4000,
    () => console.log('express server is running')
)