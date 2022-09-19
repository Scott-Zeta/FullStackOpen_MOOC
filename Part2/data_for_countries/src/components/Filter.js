import React from "react";

const Filter = ({filter, filterChanger}) =>{
    return(
        <div>
            find countries<input value = {filter} onChange={filterChanger}/>
        </div>
    )
}

export default Filter