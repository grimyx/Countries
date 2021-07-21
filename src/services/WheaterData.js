import axios from 'axios';

export const getCurrentWheater = (city) => {
    const request = axios.get(`http://api.weatherstack.com/current?access_key=9ba982ef7424062240d3a68064a18bc5&query=${city}`);
    return request.then((res) => res.data.current);
}