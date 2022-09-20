import './App.css';
import Filter from './components/Filter';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Content from './components/Content';

function App() {
  const [newFilter, setFilter] = useState("");
  const [countriesList, setCountriesList] = useState([])

  const hook = () => {
    axios.get('https://restcountries.com/v3.1/all').then(response => { setCountriesList(response.data) })
  }

  useEffect(hook, []);

  const onChange = (e) => {
    setFilter(e.target.value)
  }
  return (
    <div>
      <Filter filter={newFilter} filterChanger={onChange} />
      <Content countries={countriesList} filter={newFilter}/>
    </div>
  );
}

export default App;
