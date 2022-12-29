import { ShowCountries } from "./ShowCountries";
import { ShowOneCountry } from "./ShowOneCountry";

/**
 *
 * @param {*} props Info about the Countries from the Componen  App
 * @returns  Render the Component FilterCountry
 */
export const FilterCountry = (props) => {
  /**
   * @MAXIMUNM_COUNTRIES Maximum number of countries
   * @MINIMUNM_COUNTRIES Minimum number of countries
   */
  const MAXIMUNM_COUNTRIES = 10;
  const MINIMUNM_COUNTRIES = 1;

  /**
   * @result Array with all countries filtered
   */
  const result = props.countries.filter((country) =>
    country.name.toLowerCase().includes(props.filtercountries.toLowerCase())
  );

  /**
   * Render the Components
   */
   if (result.length > MINIMUNM_COUNTRIES && result.length <= MAXIMUNM_COUNTRIES) {
    return (
      <>
          <h2>{props.title}</h2>
          <input type="text" value={props.filtercountries} onChange={props.handleChange} placeholder="Country"/>
          <br />
          <ShowCountries result={result} />
      </>
    );
  } else if (result.length === MINIMUNM_COUNTRIES) {
    return (
      <>
          <h2>{props.title}</h2>
          <input
            type="text"
            value={props.filtercountries}
            onChange={props.handleChange}
            placeholder="Country"
          />
          <br />
          <ShowOneCountry result={result} />
      </>
    );
  } else {
    return (
      <>
          <h2>{props.title}</h2>
          <input
            type="text"
            value={props.filtercountries}
            onChange={props.handleChange}
            placeholder="Country"
          />
          <br />
          {props.filtercountries === "" ? ""  : "Too many maches, specify another filter"}
      </>
    );
  }
};
