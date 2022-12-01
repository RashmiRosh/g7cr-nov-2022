export interface ProductsStateType {
    loading: boolean,
    errorMessage: string,
    products: [] | null
}

export const initialProductsState: ProductsStateType = {
    loading: true,
    errorMessage: '',
    products: []
} 