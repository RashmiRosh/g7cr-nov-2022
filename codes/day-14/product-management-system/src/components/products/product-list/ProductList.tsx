import React from 'react'
import FilterProduct from './filter-product/FilterProduct'
import ProductCard from './product-card/ProductCard'

const ProductList = () => {
    return (
        <div>
            <FilterProduct />
            {
                [].map(
                    p => <ProductCard />
                )
            }
        </div>
    )
}

export default ProductList