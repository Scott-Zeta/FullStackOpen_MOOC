import React from "react";
import Country from "./Country";

const Content = ({ countries, filter }) => {
  console.log(countries);
  if (filter === "") {
    return (
      <p>
        awaiting input
      </p>
    )
  }
  countries = countries.filter(c => c.name.common.toLowerCase().includes(filter.toLowerCase()))
  if (countries.length > 10) {
    return (
      <p>
        Too many matches, specify another filter
      </p>
    )
  } else if ((countries.length < 10 && countries.length > 2) || countries.length === 0) {
    //fucking hell, there are ten million brackets in here
    return (
      <div>
        {countries.map((c, i) => {
          return (
            <div key={i}>{c.name.common} <button>show</button></div>
          )
        })
        }
      </div>)
  } else {
    return (
      <Country country={countries[0]} />
    )
  }
}

export default Content