import React from "react";
import "./App.css";

export const Total = ({parts}) => {
  return (
    <div>
      <p className="total">
       Total: {parts.reduce((total, hora) => (total += hora.exercises), 0)} Exercises
      </p>
    </div>
  );
};
