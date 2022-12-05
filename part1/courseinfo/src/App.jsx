import React from "react";
import Content from "./Content";
import Header from "./Header";
import Total from "./Total";

const App = () => {
  const course = "Half Stack application development ";
  const parte1 = "Fundamentals of React ";
  const exercises1 = 10;
  const parte2 = "Using props to pass data ";
  const exercises2 = 7;
  const parte3 = "State of a component ";
  const exercises3 = 14;

  return (
    <div>
      <Header course={course} />
      <Content
        parte1={parte1} exercises1={exercises1}
        parte2={parte2} exercises2={exercises2}
        parte3={parte3} exercises3={exercises3}

      />
      <Total
        exercises1={exercises1}
        exercises2={exercises2}
        exercises3={exercises3}
      />
    </div>
  );
};

export default App;
