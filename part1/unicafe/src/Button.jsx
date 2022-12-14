import React from "react";

export const Button = (props) => {
  const { name } = props;
  return <button  onClick={()=> props.onclick() }>{name}</button>;
};
