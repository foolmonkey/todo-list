import React from "react";
import Task from "./Task";

class Tasklist extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return this.props.tasks.map((task, i) => (
      <Task
        key={i}
        id={i}
        value={task}
        handleInput={this.props.handleInput}
        deleteTask={this.props.deleteTask}
      ></Task>
    ));
  }
}

export default Tasklist;
