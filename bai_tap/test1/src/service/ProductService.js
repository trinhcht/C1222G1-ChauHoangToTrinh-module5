import axios from 'axios'

import {HTMLAttributes as product} from "react";

export const findAll = async ()=>{
    try {
        return (await axios.get(`http://localhost:8080/productList?_sort=price&_order=desc`)).data
    } catch (error) {
        console.log(error)
    }
}

export const save = async (product)=>{
    try {
    await axios.post(`http://localhost:8080/productList`, {...product})
    } catch (error) {
        console.log(error)
    }
}
export  const update = async (product) =>{
    try {
       await axios.put(`http://localhost:8080/productList/${product.id}`, {...product})
    } catch (error) {
        console.log("errUpdate", error)
    }
}

export const getProductType = async ()=>{
    try {
        return (await axios.get(`http://localhost:8080/productType`)).data

    } catch (error) {
        console.log(error)
    }
}

export const findByName = async (name,type) => {
    try {
        return await axios.get(`http://localhost:8080/productList?name_like=${name}&productType=${type}&_sort=category&_order=asc`)
        } catch (error) {
        console.log(error)
    }
}

export const remove = async(id) =>{
    try {
        const res = await axios.delete(`http://localhost:8080/productList/${id}`)
        return res;
    } catch (error) {
        console.log(error)
    }
}
