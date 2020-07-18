import React, { Component } from "react";

class Form extends Component {
  state = { value: "" };

  handleChange = (e) => {
    const { value } = e.target;
    this.setState(() => {
      return { value };
    });
  };

  render() {
    return (
      <div className="container-outer">
        <h1>I Am The Outer Container!!</h1>
        <form>
          <input
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
          />
        </form>
      </div>
    );
  }
}

export default Form;
