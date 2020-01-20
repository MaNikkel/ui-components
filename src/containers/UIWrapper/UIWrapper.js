// external imports
import React from "react";

// internal imports
import { Input, TextArea } from "../UI-components";
import classes from "./UIWrapper.module.scss";
/**
 * Component that hold all examples of UI
 */
class UIWrapper extends React.Component {
  state = {
    rules: {
      required: true,
      minLength: 6,
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
      <div>
        <form className={classes.FormWrapper} onSubmit={this.submitHandler}>
          <Input labelText="Text" rules={this.state.rules} />
          <Input labelText="Text 2" rules={this.state.rules} />
          <TextArea labelText="TextArea" rules={this.state.rules} />
        </form>
      </div>
    );
  }
}

export default UIWrapper;
