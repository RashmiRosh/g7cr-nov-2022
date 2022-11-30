import React, { ReactElement, useEffect, useState } from 'react'

interface Product {
    productId: number;
    productName: string;
    productCode: string;
    releaseDate: string;
    description: string;
    price: number;
    starRating: number;
    imageUrl: string;
}
interface ApiResponse<T> {
    message: string;
    statusCode: number;
    data: T | null
}
type ProductListStateType = {
    loading: boolean,
    errorMessage: string,
    products: Product[] | null | undefined
}
const ProductList = () => {
    // const [productsState, setProductsState] = useState<Product[] | null>([])
    // const [loadingState, setLoadingState] = useState<boolean>(true)
    // const [errorState, setErrorState] = useState<string>('')
    const [plState, setPlState] = useState<ProductListStateType>()

    const fetchData = () => {
        fetch('http://localhost:4000/api/products')
            .then(
                (resp: Response) => {
                    resp
                        .json()
                        .then(
                            (data: any) => {
                                const apiResponse = data as ApiResponse<Product[]>
                                const products = apiResponse.data
                                // setProductsState(products)
                                // setLoadingState(false)
                                // setErrorState('')
                                setPlState({
                                    loading: false,
                                    products: products,
                                    errorMessage: ''
                                })
                            },
                            (e: any) => {
                                // setProductsState(null)
                                // setLoadingState(false)
                                // setErrorState(e.message)
                                setPlState({
                                    loading: false,
                                    products: null,
                                    errorMessage: e.message
                                })
                            }
                        )
                },
                (err: any) => {
                    // setProductsState(null)
                    // setLoadingState(false)
                    // setErrorState(err.message)
                    setPlState({
                        loading: false,
                        products: null,
                        errorMessage: err.message
                    })
                }
            )
    }

    useEffect(
        () => {
            fetchData()
        },
        []
    )
    console.log('PL rendered')
    let design: ReactElement;
    // if (loadingState) {
    if (plState?.loading) {
        design = <span>Loading...</span>
        // } else if (errorState !== '') {
    } else if (plState?.errorMessage !== '') {
        design = <span>{plState?.errorMessage}</span>
        // } else if (!productsState || productsState === null || productsState.length === 0) {
    } else if (!plState.products || plState.products.length === 0) {
        design = <span>No record fetched</span>
    } else
        design = (
            <>
                <div>ProductList</div>
                <br />
                <ul>
                    {
                        plState.products?.map(
                            p => <li key={p.productId}>{p.productName}</li>
                        )
                    }
                </ul>
            </>
        )
    return design
}

export default ProductList