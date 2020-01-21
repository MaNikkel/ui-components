// external imports
import React from "react";

// internal imports
import { Input, TextArea, Button } from "../UI-components";
import classes from "./UIWrapper.module.scss";
/**
 * Component that hold all examples of UI
 */
class UIWrapper extends React.Component {
  state = {
    rules: {
      required: true,
      minLength: 6,
      maxLength: 8,
      isEmail: true
    }
  };

  /**
   * Runs for submitting the form
   */
  submitHandler = event => {
    event.preventDefault();
  };

  render() {
    return (
      <div className={classes.Wrapper}>
        <h4 align="center">INPUTS</h4>
        <form className={classes.FormWrapper} onSubmit={this.submitHandler}>
          <Input labelText="Text" rules={this.state.rules} />
          <Input labelText="Text 2" rules={this.state.rules} />
          <TextArea labelText="TextArea" rules={this.state.rules} />
        </form>
        <h4 align="center">BUTTONS</h4>
        <div className={classes.ButtonWrapper}>
          <Button onClick={() => alert("Default Button")}>Button</Button>
          <Button buttonType="Success" onClick={() => alert("Success")}>
            Success
          </Button>
          <Button buttonType="Danger" onClick={() => alert("Danger")}>
            Danger
          </Button>
          <Button disabled>Disabled</Button>
        </div>
      </div>
    );
  }
}

export default UIWrapper;
