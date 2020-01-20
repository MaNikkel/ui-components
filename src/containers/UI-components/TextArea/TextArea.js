// external imports
import React from "react";

// internal imports
import classes from "./TextArea.module.scss";

/**
 * Component of an general text area
 */
export class TextArea extends React.Component {
  state = {
    error: "",
    value: ""
  };

  /**
   * Runs for checking text area's validity
   */
  checkValidity = () => {
    const { rules } = this.props;
    // resets the error
    this.setState({ error: "" });
    // * VALIDATION START
    // text area is required
    if (rules.required) {
      if (this.state.value.trim() === "") {
        this.setState({ error: "Esse campo é obrigatório" });
        return;
      }
    }
    // text area has an minimum length
    if (rules.minLength) {
      if (this.state.value.trim().length < rules.minLength) {
        this.setState({
          error: `Esse campo precisa ter no mínimo ${rules.minLength} caracteres`
        });
        return;
      }
    }
    // text area has an maximum length
    if (rules.maxLength) {
      if (this.state.value.trim().length > rules.maxLength) {
        this.setState({
          error: `Esse campo precisa ter no máximo ${rules.maxLength} caracteres`
        });
        return;
      }
    }
    // text area is an email
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
    // if validation passes, executes "areaSubmit" function from parent
    this.props.areaSubmit(this.state.value);
  };

  changeTextHandler = event => {
    this.setState({ value: event.target.value });
  };

  render() {
    return (
      <div className={this.state.error ? classes.AreaError : classes.Area}>
        <textarea
          name="txarea"
          required
          autoComplete="off"
          value={this.state.value}
          onChange={this.changeTextHandler}
          onBlur={this.checkValidity}
        />
        <label htmlFor="txarea">
          <span>{this.state.error || this.props.labelText}</span>
        </label>
      </div>
    );
  }
}

// props that should be passed but, if not, those are the defaults
TextArea.defaultProps = {
  labelText: "Label",
  rules: {},
  areaSubmit: value => console.log(`The value of the text area is ${value}`)
};
