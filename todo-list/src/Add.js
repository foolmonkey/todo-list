import React from "react";

class Add extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="box" id="bar">
        <button id="create" onClick={this.props.addTask}>
          Add a task
        </button>
        <button>Options</button>
      </div>
    );
  }
}

export default Add;
