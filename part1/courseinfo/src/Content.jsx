import React from "react";

function Content(props) {
  return (
    <div>
      <p>
        {props.parte1} {props.exercises1}
      </p>
      <p>
        {props.parte2} {props.exercises2}
      </p>
      <p>
        {props.parte3} {props.exercises3}
      </p>
    </div>
  );
}

export default Content;
