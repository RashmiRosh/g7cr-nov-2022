import React, { ReactElement, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import FilterProduct from './filter-product/FilterProduct'
import ProductCard from './product-card/ProductCard'

const ProductList = () => {
    const productState = useSelector((states: any) => states.product)
    const dispatch = useDispatch()
    const { loading, errorMessage, products } = productState
    useEffect(
        () => {

        },
        []
    )

    let design: ReactElement;
    if (loading) {
        design = <span>Loading....</span>
    } else if (errorMessage !== '') {
        design = <span>{errorMessage}</span>
    } else if (products !== null || products.length === 0) {
        design = <span>No record found</span>
    } else {
        design = (
            <ul>
                {
                    products.map(
                        (p: any) => <li>{p.productName}</li>
                    )
                }
            </ul>
        )
    }
    return design
}

export default ProductList