import React from "react";

class Add extends React.Component {
  render() {
    return (
      <div className="box" id="bar">
        <button id="create" onClick={this.props.addTask}>
          Add a task
        </button>
      </div>
    );
  }
}

export default Add;
