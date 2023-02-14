import React from 'react';


const Country = ({ country }) => {

	if (country.message === 'Page Not Found') return null;
	if (country.status === 404) return (<><h2>{country.message}</h2></>)

	return (
		<>
			{
			country[0]?
			country.map((item) => (
				<div key={item.name}>
					<h3>{item.name}</h3>
					<h3>{item.capital}</h3>
					<h3>{item.population}</h3>
					<img width={250} src={item.flag} alt="bandera"/>
				</div>

			))
		:
		[]
		}
		</>
	)
}


export default Country;