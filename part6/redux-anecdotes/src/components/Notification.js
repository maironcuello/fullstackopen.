import React from 'react'
import { useSelector } from 'react-redux'

const Notification = () => {

  const notification = useSelector((state) => state.notification)
  const style = {
    border: 'solid',
    padding: 15,
    borderWidth: 1,
  }
  if (!notification.notification || notification.notification === '') return null

  return (
    <>
      <div style={style}>
        {notification.notification}
      </div>
    </>
  )
}

export default Notification
