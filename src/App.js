import {useState, useEffect } from 'react';
import axios from 'axios';
import Countries from './components/Countries';
import SearchInput from './components/SearchInput';

const App = () => {
  const [countries, setCountries ] = useState([]);
  const [searchString, setSearchString] = useState("");

  useEffect(() => {
    axios.get("https://restcountries.eu/rest/v2/all")
      .then((response) => {
        setCountries(response.data)
      })
  },[]);

  const searchHandle = (event) => {
    setSearchString(event.target.value);

  }

  // create state for input and on change fn
  // add 
  return (
    <div>
    
    </div>
  )
}

export default App;