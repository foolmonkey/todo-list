import React from "react";
import Task from "./Task";

// display tasks from props
class Tasklist extends React.Component {
  render() {
    return this.props.tasks.map((task, i) => (
      <Task
        key={i}
        id={i}
        value={task}
        handleInput={this.props.handleInput}
        deleteTask={this.props.deleteTask}
        handleKeyDown={this.props.handleKeyDown}
        completeTask={this.props.completeTask}
      ></Task>
    ));
  }
}

export default Tasklist;
