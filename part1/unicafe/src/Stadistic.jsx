import React from "react";

export const Stadistic = (props) => {
  return (
    <div id="stadistic">
        {props.name} {props.info()}
    </div>
  );
};
