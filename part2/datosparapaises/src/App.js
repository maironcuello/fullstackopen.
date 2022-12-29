import React, { useState, useEffect } from "react";
import axios from "axios";

import "./App.css";
import { FilterCountry } from "./components/FilterCountry";

export const App = () => {
  const [countries, setCountries] = useState([]);
  const [filtercountries, setFiltercountries] = useState('');
  useEffect(() => {
    axios.get("https://restcountries.com/v2/all").then((response) => {
      setCountries(response.data);
    });
  }, []);

  /**
   * @param {*} event Captures the text of the input
   */
  const handleChange = (event) => setFiltercountries(event.target.value);

  return (
    <div className="container">
      <div className="components">
        <FilterCountry
          title="Find Countries"
          handleChange={handleChange}
          countries={countries}
          filtercountries={filtercountries}
          setFiltercountries={setFiltercountries}
        />
      </div>
    </div>
  );
};

export default App;
