import React, {useEffect, useState} from 'react';
import axios from "axios";

export const ShowOneCountry = (props) => {

  const cities = props.result.map((country) => (country.name))

  const [city, setCities] = useState(null);
  const api_key = process.env.REACT_APP_API_KEY

  const params = {
    access_key: api_key,
    query: cities[0]
  }
  
  useEffect(() => {
    axios.get('http://api.weatherstack.com/current', {params})
    .then(res => { setCities(res.data)
    })
    .catch(err => console.error(err))
  }, []);
  

  const language = props.result
   .map((country) => country.languages)
   .map((language, index) => language[0].name);
  
    return (
      <>
          {props.result.map((country, index) => (
              <p key={index}>
                Country :{country.name}
                <br />
                Capital :{country.capital}
                <br />
                Population :{country.population}
                <br />
                Language :{language}
                <br />
                Flag :<br />
                <img src={country.flags.png} alt="flag" />
              </p>
            ))}
        {/* <h2> Capital  {city.location.name}</h2> 
        <h2> temperature  {city.current.temperature}</h2>
        <img src={city.current.weather_icons} alt='icon'/> 
        <h2> Wind {city.current.wind_speed}</h2> */}
      </>
    )
  }
  