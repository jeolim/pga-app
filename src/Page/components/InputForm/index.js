import React, { Component, Fragment } from "react";
import { StyledForm } from "./style.index";
import get from "lodash/get";
import once from "lodash/once";

class InputForm extends Component {
  state = { error: undefined };
  constructor(props) {
    super(props);
    this.form;
  }

  static Field = ({ name, label, value, ...props }) => {
    return (
      <Fragment>
        <label htmlFor={name}>{label}</label>
        <input
          type="text"
          name={name}
          value={value}
          id={name}
          {...props.isEditing && { className: "editing" }}
          {...props}
        />
        <br />
      </Fragment>
    );
  };

  setClearInputFn = once(fn => fn());

  getChangeProps = stateName => {
    return {
      ...(this.props.currentEditRow && {
        value: get(this.props.currentEditRow, [stateName], ""),
        onChange: e => {
          this.props.modifyField(
            stateName,
            Number(e.target.value) > 100 ? 100 : e.target.value
          );
        }
      })
    };
  };

  onSubmit(e) {
    e.preventDefault();
    const formData = new FormData(event.target);

    if (
      !formData.get("firstName") ||
      !formData.get("lastName") ||
      !formData.get("score")
    ) {
      return this.setState(
        { error: "One of your fields are not filled." },
        () => {
          setTimeout(() => {
            this.setState({ error: null });
          }, 2000);
        }
      );
    }

    this.props.addRow({
      rowData: {
        firstName: formData.get("firstName"),
        lastName: formData.get("lastName"),
        score: formData.get("score")
      }
    });
    this.form.reset();

    // This sets a reference to the wrapping container to store a clear form function.
    this.setClearInputFn(() => this.props.clearInput(() => this.form.reset()));
  }

  setValue = (e, prop) => {
    this.setState({
      [prop]: e.target.value
    });
  };

  render() {
    return (
      <StyledForm onSubmit={e => this.onSubmit(e)} ref={el => (this.form = el)}>
        <InputForm.Field
          label="First name"
          name="firstName"
          isEditing={!this.props.showButton}
          {...this.getChangeProps("firstName")}
        />
        <InputForm.Field
          label="Last name"
          name="lastName"
          isEditing={!this.props.showButton}
          {...this.getChangeProps("lastName")}
        />
        <InputForm.Field
          type="number"
          label="Score"
          name="score"
          min="0"
          max="100"
          pattern="\d*"
          isEditing={!this.props.showButton}
          {...this.getChangeProps("score")}
        />
        <div className="error">{this.state.error}</div>
        {this.props.showButton && <button>Add</button>}
      </StyledForm>
    );
  }
}

export { InputForm };
