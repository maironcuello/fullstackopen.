import React from "react";
import "./App.css";

export const Header = ({ name }) => {
  return (
    <div>
      {
        <h2 className="title">
          <span>{name}</span>
        </h2>
      }
    </div>
  );
};
