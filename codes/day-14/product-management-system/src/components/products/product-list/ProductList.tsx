import React, { ReactElement, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { failureActionCreator, initiateActionCreator, successActionCreator } from '../../../redux/productsSlice'
import { getAllProducts } from '../../../services/productService'
import { AxiosResponse } from "axios";
import { ApiResponse } from "../../../models/api-response.model";
// import FilterProduct from './filter-product/FilterProduct'
// import ProductCard from './product-card/ProductCard'
import { Product } from '../../../models/product.model';
import { AppDispatch, RootState } from '../../../redux/store';

const ProductList = () => {
    const productState = useSelector((states: RootState) => states.product)
    const dispatchFnRef = useDispatch<AppDispatch>()

    const { loading, errorMessage, products } = productState

    const fetchData = () => {
        const initiateAction = initiateActionCreator()
        dispatchFnRef(initiateAction)
        const promise = getAllProducts()
        promise
            .then(
                (resp: AxiosResponse<ApiResponse<Product[]>>) => {
                    const apiResponse = resp.data
                    if (apiResponse.data !== null) {
                        const successAction = successActionCreator(apiResponse.data)
                        dispatchFnRef(successAction)
                    } else {
                        const failureAction = failureActionCreator(apiResponse.message)
                        dispatchFnRef(failureAction)
                    }
                },
                (err) => {
                    const failureAction = failureActionCreator(err.message)
                    dispatchFnRef(failureAction)
                }
            )
    }

    useEffect(
        () => {
            fetchData()
        },
        []
    )

    let design: ReactElement;
    if (loading) {
        design = <span>Loading....</span>
    } else if (errorMessage !== '') {
        design = <span>{errorMessage}</span>
    } else if (products === null || products.length === 0) {
        design = <span>No record found</span>
    } else {
        design = (
            <ul>
                {
                    products.map(
                        (p: Product) => <li>{p.productName}</li>
                    )
                }
            </ul>
        )
    }
    return design
}

export default ProductList