const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';
export default function getData(query) {
    const fetchURL = `${BASE_URL}?q=${query}&appid=${process.env.REACT_APP_API_KEY}&units=metric`;
    return fetch(fetchURL)
      .then(response => response.json())
      .then(data => data)
      .catch(error => error)
} 