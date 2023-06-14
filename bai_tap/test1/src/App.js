import './App.css';
import React from "react";
import {ProductList} from "./component/ProductList";
import {RouterProvider} from "react-router";
import {createBrowserRouter} from "react-router-dom";
import {Create} from "./component/Create";

const router = createBrowserRouter([
    {
        path: "/",
        element: <ProductList/>,
    },
    // {
    //     path: "/update/:id",
    //     element: <Update/>,
    // },
    {
        path: "/create",
        element: <Create/>,
    }
]);

function App() {
    return (
        <>
            <RouterProvider
                router={router}
            />

        </>
    );
}

export default App;
