import React from "react";

class Task extends React.Component {
  render() {
    const checkbox = (
      <input
        className="complete"
        type="checkbox"
        onClick={(e) =>
          this.props.completeTask(this.props.id, this.props.value, e)
        }
      ></input>
    );

    const inputfield = (
      <input
        type="text"
        onChange={(e) => this.props.handleInput(this.props.id, e)}
        onKeyDown={(e) =>
          this.props.handleKeyDown(this.props.id, this.props.value, e)
        }
        value={this.props.value}
      ></input>
    );

    const deleteButton = (
      <button id="delete" onClick={() => this.props.deleteTask(this.props.id)}>
        Delete
      </button>
    );

    return (
      <div className="box new">
        {checkbox}
        {inputfield}
        {deleteButton}
      </div>
    );
  }
}

export default Task;
