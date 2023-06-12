import * as fs from 'fs';
// const fs = require('fs');
export const updateFacility = (id, object) =>{
    try {
        // reading a JSON file synchronously
        const data = fs.readFileSync("../data/FacilityData.js");
        console.log(JSON.parse(data));
    } catch (error) {
        // logging the error
        console.error(error);

        throw error;
    }
}