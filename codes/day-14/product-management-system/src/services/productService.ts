import axiosInstance from "../config/axios.config"
import { ApiResponse } from "../models/api-response.model"
import { Product } from "../models/product.model"

export const getAllProducts = () => {
    return axiosInstance.get<ApiResponse<Product[]>>('')
}
export const getProductById = (id: number) => {
    return axiosInstance.get<ApiResponse<Product>>(`/${id}`)
}
export const addProduct = (product: Product) => {
    return axiosInstance.post<ApiResponse<Product>>('', product)
}
export const updateProduct = (product: Product, id: number) => {
    return axiosInstance.put<ApiResponse<Product>>(`/${id}`, product)
}
export const deleteProduct = (id: number) => {
    return axiosInstance.delete<ApiResponse<Product>>(`/${id}`)
}