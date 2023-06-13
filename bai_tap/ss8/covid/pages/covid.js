import axios from "axios";

export default function findAll({overview}) {
    return (
        <>
            <h1><b> Vietnam's COVID-19 Information</b></h1>
            <table className={"table caption-top"}>
                <thead>
                <tr>
                    <th>Date</th>
                    <th>Deaths</th>
                    <th>Streating</th>
                    <th>Cases</th>
                    <th>Recovered</th>

                </tr>
                </thead>
                <tbody>
                {
                    overview.map((overview) => (
                        <tr>
                            <td>{overview.date}</td>
                            <td>{overview.death}</td>
                            <td>{overview.treating}</td>
                            <td>{overview.treating}</td>
                            <td>{overview.recovered}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}
export const getStaticProps = async () => {
    const reponse = await axios.get('https://api.apify.com/v2/key-value-stores/EaCBL1JNntjR3EakU/records/LATEST?disableRedirect=true')
    return {
        props: {
            overview: reponse.data
        }
    }
}