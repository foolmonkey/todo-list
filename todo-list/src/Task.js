import React from "react";

class Task extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="box new">
        <input className="complete" type="checkbox"></input>
        <input
          type="text"
          onChange={(e) => this.props.handleInput(this.props.id, e)}
          value={this.props.value}
        ></input>

        <button
          id="delete"
          onClick={() => this.props.deleteTask(this.props.id)}
        >
          Delete
        </button>
      </div>
    );
  }
}

export default Task;
