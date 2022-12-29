import React from "react";
import { Header } from "./Header";
import { Content } from "./Content";
import { Total } from "./Total";
import "./App.css";

export const Course = ({course}) => {
    return (
      <div className="container">
        <Header name={course.name}/>
        {" "}
        <Content parts={course.parts}/>
        {" "}
        <Total parts={course.parts}/>
    </div>
  );
  


};
