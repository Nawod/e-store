/**
 * @class AppRoutes
 * @description purpose of this route to manage application page routing
 * @author Nawod Madhuwantha
 */

import { Routes, Route } from "react-router-dom";
import Home from "../../pages/Home";
import Products from "../../pages/Products";
import Login from "../../pages/Login";
import Cart from "../../pages/Cart";
import SingleProduct from "../../pages/SingleProduct";

const AppRoutes = () => {
    return (
        <Routes>
            <Route
                path="/"
                element={<Home />}
            />
            <Route
                path="/products"
                element={<Products />}
            />
            <Route
                path="/products/:id"
                element={<SingleProduct />}
            />
            <Route
                path="/login"
                element={<Login />}
            />
            <Route
                path="/cart"
                element={<Cart />}
            />
        </Routes>
    );
};

export default AppRoutes;
