import App from "./App.jsx";
import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Admin from "./pages/admin";
import Product from "./pages/product.jsx";
const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
    {
        path: "/admin",
        element: <Admin />,
    },
    {
        path: "/product",
        element: <Product />,
    },
]);

export default router;
