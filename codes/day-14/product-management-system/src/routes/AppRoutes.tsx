import React, { FC } from 'react'
import Home from '../components/common/home/Home'
import MainLayout from '../components/common/main-layout/MainLayout'
import { Navigate, useRoutes, RouteObject } from "react-router-dom";
import PageNotFound from '../components/common/page-not-found/PageNotFound';
import ProductsLayout from '../components/products/products-layout/ProductsLayout';
import ProductList from '../components/products/product-list/ProductList';
import AddProduct from '../components/products/add-product/AddProduct';
import ProductDetail from '../components/products/product-detail/ProductDetail';
import EditProduct from '../components/products/edit-product/EditProduct';

const AppRoutes: FC = (): JSX.Element => {
    // <Route path='/' element={<MainLayout />}>
    //     <Route path='home' element={<Home />} />
    // </Route>
    const mainRoutes: RouteObject = {
        path: '/',
        element: <MainLayout />,
        children: [
            { path: '404', element: <PageNotFound /> },
            { path: 'home', element: <Home /> },
            { path: '', element: <Navigate to={'/home'} /> },
            { path: '*', element: <Navigate to={'/404'} /> }
        ]
    }
    const productRoutes: RouteObject = {
        path: 'products',
        element: <ProductsLayout />,
        children: [
            { path: '', element: <ProductList /> },
            { path: 'add', element: <AddProduct /> },
            { path: 'view/:id', element: <ProductDetail /> },
            { path: 'edit/:id', element: <EditProduct /> }
        ]
    }
    const router = useRoutes([mainRoutes, productRoutes])
    return <>{router}</>
}

export default AppRoutes