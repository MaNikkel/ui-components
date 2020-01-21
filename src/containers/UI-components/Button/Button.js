// external imports
import React from "react";
// internal imports
import classes from "./Button.module.scss";

/**
 * Component of an general button
 */
export const Button = props => {
  return (
    <button
      className={[classes.Button, classes[props.buttonType]].join(" ")}
      disabled={props.disabled}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

// props that should be passed but, if not, those are the defaults
Button.defaultProps = {
  disabled: false,
  buttonType: "",
  onClick: () => alert("Button Pressed!")
};
