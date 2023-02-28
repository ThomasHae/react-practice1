//import React from "react";

const MyButton = (props) => {
  const text = props.children;
  return <button onClick={props.handleClick}>{text}</button>;
};

export default MyButton;
