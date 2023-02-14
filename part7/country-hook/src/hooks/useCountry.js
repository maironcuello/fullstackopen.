import React from 'react';

const useCountry = (name) => {
    const [country, setCountry] = React.useState([])
    React.useEffect(() => {
        fetch(`https://restcountries.com/v2/name/${name}?fullText=true`)
        .then(response => response.json())
        .then(data => setCountry(data))
    },[name])
  
    return country
}

export default useCountry;