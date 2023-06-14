import axios from "axios";
export const findAllContract=async ()=>{
    try {
        const result = await axios.get('http://localhost:8080/contractList')
        return result.data
    } catch (error) {
        console.log(error);
    }
}

export const save = async (contract) => {
    try {
        await axios.post('http://localhost:8080/contractList', {...contract})
    } catch (error) {
        console.log(error);
    }
}

