import React from 'react'
import Person from './Person';

const Content = ({persons}) =>{
// console.log(persons.length)

return(
    <ul>
        {persons.map((p,i) => <Person key={i} person={p}/>)}
    </ul>
)
}
export default Content