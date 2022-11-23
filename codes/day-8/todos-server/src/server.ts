import express, { json } from "express";
import cors from "cors";
import { PORT_NUMBER, BASE_URL } from "./config/envdata";
import routerMiddleware from "./routes/router-configuration";

const app = express()
const jsonMiddleware = json()
const corsMiddleware = cors({
    allowedHeaders: '*',
    origin: '*',
    methods: '*'
})

app.use(corsMiddleware)
app.use(jsonMiddleware)
app.use(routerMiddleware)

app.listen(
    PORT_NUMBER,
    () => console.log(`Todos server is running at http://localhost:${PORT_NUMBER}${BASE_URL}`)
)