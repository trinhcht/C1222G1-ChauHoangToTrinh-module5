import './App.css';
import {List} from './components/List';
import {BrowserRouter, Route} from 'react-router-dom'
import {Create} from './components/Create';
import { ToastContainer } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";
import {Update} from './components/Update';
import React from "react";
import {Routes} from "react-router";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element = {<List />} />
                <Route path='/create' element = {<Create />} />
                <Route path='/edit/:id'
                       element={<Update />}
                />
            </Routes>
            <ToastContainer />
        </BrowserRouter>
    );
}

export default App;
