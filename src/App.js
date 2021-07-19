import {useState, useEffect } from 'react';
import axios from 'axios';
import SearchInput from './components/SearchInput';
import CreateLists from './components/CreateLists';
import Field from './components/Field';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

const App = () => {
  const [countries, setCountries ] = useState([]);
  const [searchString, setSearchString] = useState("");
  const [showInput, setShowInput] = useState(true);

  useEffect(() => {
    axios.get("https://restcountries.eu/rest/v2/all")
      .then((response) => {
        setCountries(response.data)
      })
  },[]);

  const searchHandle = (event) => {
    setSearchString(event.target.value);

  }

  const onFieldClickHandler =  (c) => {
    setSearchString(c.name);
    setShowInput(false);
  }

  const findCountries = (data, inputValue) => {
    return data.filter(d => d.name.toLowerCase().includes(inputValue.toLowerCase())); 
  }

  // create state for input and on change fn
  // search input olways stays on the page
  // when user starts to enter country name, start to filter posible results
  // give results to Create list
  // if list of selected countries have only one element, that means that searched country is found
  // then 
  return (
    <div>
      {showInput && <SearchInput placeholderText="Enter country name" value={searchString} onChange={searchHandle}/> }
      <CreateLists data={findCountries(countries, searchString)} transformFn={country => <Field text={country.name} image={country.flag} onClick={() => onFieldClickHandler(country)}/>} maxSize={10} hideInputFn={setShowInput}/>
    </div>
  )
}

export default App;