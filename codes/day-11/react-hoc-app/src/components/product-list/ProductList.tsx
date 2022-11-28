import React, { useState } from 'react'
import useToggle from '../hooks/useToggle'
//import Toggle from '../toggle/Toggle'

const ProductList = () => {
    const products = [{
        id: 1,
        name: 'dell xps',
        price: 10000
    }, {
        id: 2,
        name: 'Hp Probook',
        price: 8000
    }, {
        id: 3,
        name: 'Lenovo',
        price: 9000
    }]

    // const [viewState, setViewState] = useState<boolean>(false)

    // const viewStateHandler = (status: boolean) => {
    //     setViewState(status)
    // }

    const [viewState, Toggle] = useToggle('viewTable')
    return (
        <div>
            products list:&nbsp;
            <br />
            <br />
            <ul>
                {
                    products.map(
                        (p) => <li key={p.id}>{p.name}</li>
                    )
                }
            </ul>
            <br />
            {
                Toggle
            }
            <br />
            {
                viewState && (
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                products.map(
                                    (p) => (
                                        <tr key={p.id}>
                                            <td>{p.name}</td>
                                            <td>{p.price}</td>
                                        </tr>
                                    )
                                )
                            }
                        </tbody>
                    </table>
                )
            }
        </div>
    )
}

export default ProductList