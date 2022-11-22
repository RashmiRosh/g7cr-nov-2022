import { ApiResponse } from "../models/api-response.mode";

export function generateResponse<T>(message: string, statusCode: number, data?: null | T | T[]) {
    const resp: ApiResponse<T> = {
        message: message,
        data: data ? data : null,
        statusCode: statusCode
    }
    return resp
}