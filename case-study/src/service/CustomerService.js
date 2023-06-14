import axios from "axios";
export const findAllCustomer=async ()=>{
    try {
        const result = await axios.get('http://localhost:8080/customerList')
        return result.data
    } catch (error) {
        console.log(error);
    }
}

export const save = async (customer) => {
    try {
        await axios.post('http://localhost:8080/customerList', {...customer})
    } catch (error) {
        console.log(error);
    }
}

export const getCustomerType = async() =>{
    try {
        return (await axios.get('http://localhost:8080/customerType')).data
    } catch (error) {
        console.log(error)
    }
}

export const update = async(customer)=>{
    console.log("customerupdate", customer)
    try {
        const res = await axios.put(`http://localhost:8080/customerList/${customer.id}`,{ ...customer })
        console.log("res", res);
    } catch (error) {
        console.log("errUpdate", error)
    }
}

export const remove = async(id) =>{
    try {
        const res = await axios.delete(`http://localhost:8080/customerList/${id}`)
        return res;
    } catch (error) {
        console.log(error)
    }
}