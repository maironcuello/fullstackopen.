import React from "react";

export const Notification = ({ messege }) => {
  if (messege === null) {
    return null;
  }

  const messageStyle = {
    color: 'red',
    background: 'lightgrey',
    fontSize: '20',
    borderStyle: 'solid',
    borderRadius: '5',
    padding: '10',
    marginBottom: '1'
  }


  return <div className="messageStyle">
    {messege}
  </div>;
};
