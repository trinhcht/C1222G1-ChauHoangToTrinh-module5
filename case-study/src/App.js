import './App.css';
import React from "react";
import {ListFacility} from "./components/ListFacility";
import {NavLink, Route, Routes, createBrowserRouter, RouterProvider} from "react-router-dom"
import {UpdateFacility} from "./components/UpdateFacility";
import {CreateFacility} from "./components/CreateFacility";
import {ListCustomer} from "./components/ListCustomer";
import {ListContract} from "./components/ListContract";
import {UpdateCustomer} from "./components/UpdateCustomer";
import {CreateCustomer} from "./components/CreateCustomer";

const router = createBrowserRouter([
    {
        path: "/",
        element: <ListFacility />,

    },
    {
        path: "/update/:id",
        element: <UpdateFacility />,

    },
    {
        path: "/create",
        element: <CreateFacility />,

    },
    {
        path: "/customer",
        element: <ListCustomer />,
    },
    {
        path: "/customer/update/:id",
        element: <UpdateCustomer />,
    },
    {
        path: "/customer/create",
        element: <CreateCustomer />,

    },
    {
        path: "/contract",
        element: <ListContract />,
    },
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
