import React from "react";

class CompletedTask extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.value,
    };
  }

  render() {
    const checkbox = (
      <input
        className="complete"
        type="checkbox"
        checked
        onChange={(e) =>
          this.props.uncompleteTask(this.props.id, this.state.value, e)
        }
      ></input>
    );

    const inputfield = (
      <input
        className="strikethrough"
        type="text"
        defaultValue={this.props.value}
        onChange={(e) => {
          this.setState({ value: e.target.value });
        }}
      ></input>
    );

    return (
      <div className="box doneoffset">
        {checkbox}
        {inputfield}
      </div>
    );
  }
}

export default CompletedTask;
