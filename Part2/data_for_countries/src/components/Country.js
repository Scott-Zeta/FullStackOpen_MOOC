import React from "react"
const Country = ({ country }) => {
    console.log(country.languages)
    const languages = Object.values(country.languages)
    return (
        <div>
            <h1>{country.name.common}</h1>
            <p>capital {country.capital}</p>
            <p>area {country.area}</p>
            <h2>languages:</h2>
            <ul>
                {languages.map((l,i) => <li key={i}>{l}</li>)}
            </ul>
            <img src={country.flags.png} alt="flag"></img>
        </div>
    )
}

export default Country