import { Product } from "../models/product.model"

export interface ProductsStateType {
    loading: boolean,
    errorMessage: string,
    products: Product[] | null
}

export const initialProductsState: ProductsStateType = {
    loading: true,
    errorMessage: '',
    products: []
} 