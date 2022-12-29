import React from "react";
import "./App.css";
import { Course } from "./Course";

export const App = () => {
  const courses = [
    {
      id: 1,
      name: "Half Stack application development ",
      parts: [
        {
          name: "Fundamentals of React ",
          exercises: 10,
          id: 1,
        },
        {
          name: "Using props to pass data ",
          exercises: 7,
          id: 2,
        },
        {
          name: "State of a component",
          exercises: 14,
          id: 3,
        },
        {
          name: "Redux",
          exercises: 11,
          id: 4,
        },
      ],
    },
    {
      id: 2,
      name: "Noded.js",
      parts: [
        {
          name: "Routing",
          exercises: 3,
          id: 1,
        },
        {
          name: "Middleware",
          exercises: 7,
          id: 2,
        },
      ],
    },
  ];

  return (
    <div>
      <h1>Web development curriculum</h1>
      {courses.map((course, index) => (<Course key={index} course={course}/>))}
    </div>
  );
};
