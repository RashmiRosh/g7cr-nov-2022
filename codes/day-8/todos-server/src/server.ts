import express from "express";
import { PORT_NUMBER, BASE_URL } from "./config/envdata";
import routerMiddleware from "./routes/router-configuration";

const app = express()
app.use(routerMiddleware)

app.listen(
    PORT_NUMBER,
    () => console.log(`Todos server is running at http://localhost:${PORT_NUMBER}${BASE_URL}`)
)