import React from 'react'
import Person from './Person';

const Content = ({ persons, filter }) => {
    // console.log(persons.length)
    if (filter === '') {
        return (
            <ul>
                {persons.map((p, i) => <Person key={i} person={p} />)}
            </ul>
        )
    } else {
        console.log("filter running", filter)
        return (
            <ul>
                {persons.filter(p => p.name.toLowerCase().includes(filter.toLowerCase())).map((p, i) => <Person key={i} person={p} />)}
            </ul>
        )
    }
}
export default Content