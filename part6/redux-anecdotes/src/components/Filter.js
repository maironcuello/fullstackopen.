import React from 'react'
import { useSelector ,useDispatch } from 'react-redux'
import { newFilter } from '../reducers/filterSlice'

const Filter = () => {
  const filtered = useSelector(state => state.filter.value);
  const dispatch = useDispatch()
  
  const handleChange = (event) => {
    const filter = event.target.value
    // console.log(filter);
    dispatch(newFilter(filter))
  }
  const style = {
    marginBottom: 10,
  }

  return (
    <div style={style}>
      filter <input onChange={handleChange} />
    </div>
  )
}

export default Filter
