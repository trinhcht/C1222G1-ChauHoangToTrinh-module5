import './App.css';
import React from "react";
import {ListFacility} from "./components/ListFacility";
import {NavLink, Route, Routes, createBrowserRouter, RouterProvider} from "react-router-dom"
import {UpdateFacility} from "./components/UpdateFacility";
import {CreateFacility} from "./components/CreateFacility";

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
]);

function App() {
    return (
        <>
            <RouterProvider
                router={router}
            />

            {/*<NavLink to='/create'></NavLink>*/}

            {/*<Routes>*/}
            {/*  <Route path='/' element={ListFacility}/>*/}
            {/*    <Route path='/update' element={UpdateFacility}/>*/}
            {/*</Routes>*/}
            {/*<Header/>*/}
            {/*<h1>ffff</h1>*/}
            {/*<h1>ffff</h1>*/}

            {/*<Footer/>*/}
        </>
    );
}

export default App;
