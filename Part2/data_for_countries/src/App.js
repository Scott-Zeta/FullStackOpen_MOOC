import logo from './logo.svg';
import './App.css';
import Filter from './components/Filter';
import { useState, userEffect } from 'react';

function App() {
  const[filterName, setFilter] = useState("");
  
  const onChange = (e) =>{
    setFilter(e.target.value)
  }
  return (
    <div>
      <Filter filter={filterName} filterChanger={onChange}/>
    </div>
  );
}

export default App;
