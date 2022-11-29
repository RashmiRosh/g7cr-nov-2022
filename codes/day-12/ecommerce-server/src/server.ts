import express, { json } from "express";
import cors from "cors";
import { config } from "dotenv";
import { AppRoutes } from "./routes/approutes";

config()
const PORT = process.env.PORT || 4000
const BASE_URL = process.env.BASE_URL || '/api/products'

const app = express()
app.use(cors({ origin: '*', methods: '*', allowedHeaders: '*' }))
app.use(json())

const appRoutes = new AppRoutes()
app.use(appRoutes.registerRoutes())

app.listen(
    PORT,
    () => console.log(`ecommerce server is running at http://localhost:${PORT}/${BASE_URL}`)
)