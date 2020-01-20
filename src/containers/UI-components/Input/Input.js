// external imports
import React from "react";

// internal imports
import classes from "./Input.module.scss";

/**
 * Component of an general input
 */
export class Input extends React.Component {
  state = {
    error: "",
    value: ""
  };

  /**
   * Runs for checking input's validity
   */
  checkValidity = () => {
    const { rules } = this.props;
    // resets the error
    this.setState({ error: "" });
    // * VALIDATION START
    // input is required
    if (rules.required) {
      if (this.state.value.trim() === "") {
        this.setState({ error: "Esse campo é obrigatório" });
        return;
      }
    }
    // input has an minimum length
    if (rules.minLength) {
      if (this.state.value.trim().length < rules.minLength) {
        this.setState({
          error: `Esse campo precisa ter no mínimo ${rules.minLength} caracteres`
        });
        return;
      }
    }
    // input has an maximum length
    if (rules.maxLength) {
      if (this.state.value.trim().length > rules.maxLength) {
        this.setState({
          error: `Esse campo precisa ter no máximo ${rules.maxLength} caracteres`
        });
        return;
      }
    }
    // input is an email
    if (rules.isEmail) {
      if (
        !/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(this.state.value)
      ) {
        this.setState({
          error: "Esse campo precisa ser um email"
        });
        return;
      }
    }

    // * VALIDATION END
    // if validation passes, executes "inputSubmit" function from parent
    this.props.inputSubmit(this.state.value);
  };

  changeTextHandler = event => {
    this.setState({ value: event.target.value });
  };

  render() {
    return (
      <div className={this.state.error ? classes.InputError : classes.Input}>
        <input
          type={this.props.inputType}
          name="input"
          required
          autoComplete="off"
          value={this.state.value}
          onChange={this.changeTextHandler}
          onBlur={this.checkValidity}
        />
        <label htmlFor="input">
          <span>{this.state.error || this.props.labelText}</span>
        </label>
      </div>
    );
  }
}

// props that should be passed but, if not, those are the defaults
Input.defaultProps = {
  inputType: "text",
  labelText: "Label",
  rules: {},
  inputSubmit: value => console.log(`The value of the input is ${value}`)
};
