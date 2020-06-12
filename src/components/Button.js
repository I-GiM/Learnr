import React from "react";

const Button = (props) => {

  return (
    <button className="btn-forms" onClick={props.goToBtn} >{props.text}</button>
  );
}
export default Button;