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