import { useState, useEffect } from 'react';
import axios from 'axios';
import Countries from './components/Countries';

const App = () => {
  const [countries, setCountries] = useState([]);
  const [searchString, setSearchString] = useState("");

  useEffect(() => {
    axios.get("https://restcountries.eu/rest/v2/all")
      .then((response) => {
        setCountries(response.data)
      })
  }, []);

  const searchHandle = (event) => {
    setSearchString(event.target.value);

  }

  return (
    <div>
      <div class="country-input">
        <label for="countryInput">Find countries:</label>
        <input id="countryInput" value={searchString} onChange={searchHandle} />
      </div>
      <div>
        <Countries countries={countries.filter(c => c.name.toLowerCase().includes(searchString))} />
      </div>
    </div>
  )
}

export default App;