import { config } from "dotenv";

config()

export const PORT_NUMBER = process.env.PORT || 4000
export const BASE_URL = process.env.BASE_URL || '/api/todos'
export const FILE_PATH = process.env.FILE_PATH || './src/data/todos.json'
