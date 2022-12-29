import React, { useState } from "react";
import { ShowOneCountry } from "./ShowOneCountry";

/**
 *
 * @returns Component for going to show countries information
 */
export const ShowCountries = (props) => {
  const [showImage, setShowImage] = useState([]);

  /**
   * @MAXIMUNM_COUNTRIES Maximum number of countries
   * @MINIMUNM_COUNTRIES Minimum number of countries
   */
  const MAXIMUNM_COUNTRIES = 10;

  const viewCountry = (country) => {
    setShowImage([...showImage, country]);
  };

  return (
    <>
      {props.result.length > MAXIMUNM_COUNTRIES
        ? "Too many maches, specify another filter"
        : props.result.map((country, index) => (
            <div key={index} href="#">
              {country.name}
              {"  "}
              <button onClick={() => viewCountry(country)}>Show</button>
            </div>
          ))}
      <ShowOneCountry result={showImage} />
    </>
  );
};
