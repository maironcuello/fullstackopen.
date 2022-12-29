import React from "react";
import "./App.css";

export const Content = ({parts}) => {
  
  return (
    <div>
       {parts.map((part,index) => <h3 key={index}>{part.name}</h3> )}
    </div>
  );
};
