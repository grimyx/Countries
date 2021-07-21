import axios from 'axios';

export const getCountriesData = () => {
    const request = axios.get("https://restcountries.eu/rest/v2/all")
    return request.then(response => response.data);
}