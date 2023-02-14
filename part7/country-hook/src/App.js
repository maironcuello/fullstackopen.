import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Country } from './components'
import { useField, useCountry } from "./hooks";

const App = () => {
  const nameInput = useField('text')
  const [name, setName] = useState('')
  const country = useCountry(name);
  
  // console.log(country)
  const handlefetch = (e) => {
    e.preventDefault()
    setName(nameInput.value)
  }

  return (
    <div>
      <form onSubmit={handlefetch}>
        <input {...nameInput} />
        <button type='submit' >find</button>
      </form>

      <Country country={country} />
    </div>
  )
}

export default App