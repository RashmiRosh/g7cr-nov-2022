import express, { json } from "express";
import cors from "cors";
import { config } from "dotenv";

config()
const PORT = process.env.PORT || 4000
const BASE_URL = process.env.BASE_URL || '/api/products'

const app = express()
app.use(cors({ origin: '*', methods: '*', allowedHeaders: '*' }))
app.use(json())

app.listen(
    PORT,
    () => console.log(`ecommerce server is running at http://localhost:${PORT}/${BASE_URL}`)
)