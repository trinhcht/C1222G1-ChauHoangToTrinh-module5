import axios from "axios";
import React from "react";

export default function Covid(locations) {
    return (
        <table>
            <thead>
            <tr>
                <th>Province</th>
                <th>death</th>
                <th>Treating</th>
                <th>Cases</th>
                <th>recovered</th>
            </tr>
            </thead>
            <tbody>
            {
                locations.map((location) => (
                    <tr key={location.name}>
                        <td>{location.death}</td>
                        <td>{location.treating}</td>
                        <td>{location.cases}</td>
                        <td>{location.recovered}</td>
                    </tr>
                ))
            }
            </tbody>
        </table>
    )
}
export const getStaticProps = async () => {
    // fetch dữ liệu từ file system, API, DB,...
    const res = await axios.get("https://api.apify.com/v2/key-value-stores/EaCBL1JNntjR3EakU/records/LATEST?disableRedirect=true")

    // Giá trị của `props` sẽ được truyền tới component `Home`
    return {
        props: {
            locations: res.data
        }
    }
}

