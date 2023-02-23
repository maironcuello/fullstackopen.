import React from 'react'

const useField = (type, defaultValue = '') => {
    const [value, setValue] = React.useState(defaultValue)

    const onChange = (event) => {
        setValue(event.target.value)
    }

    const reset = () => {
        setValue(defaultValue)
      }

    return {
        attributes: {
          type,
          value,
          onChange,
        },
        reset,
      }
}
export default useField