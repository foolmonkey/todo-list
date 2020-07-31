import React from "react";

class Task extends React.Component {
  render() {
    return (
      <div className="box new">
        <input className="complete" type="checkbox"></input>
        <input
          type="text"
          onChange={(e) => this.props.handleInput(this.props.id, e)}
          onKeyDown={(e) =>
            this.props.handleKeyDown(this.props.id, this.props.value, e)
          }
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
