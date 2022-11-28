import React, { useState } from 'react'
import useToggle from '../../hooks/useToggle'
import ToggleSwitch from '../toggle-switch/ToggleSwitch'

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
    const [toggleState, ToggleElement] = useToggle('ViewProductDetails')

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
            {/* <ToggleSwitch label='ViewDetails' handler={viewStateHandler} /> */}
            {
                ToggleElement
            }
            <br />
            {
                toggleState && (
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