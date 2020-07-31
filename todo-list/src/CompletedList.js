import React from "react";
import CompletedTask from "./CompletedTask";

// display tasks from props
class CompletedList extends React.Component {
  render() {
    return this.props.tasks.map((task, i) => (
      <CompletedTask
        key={i}
        id={i}
        value={task}
        uncompleteTask={this.props.uncompleteTask}
      ></CompletedTask>
    ));
  }
}

export default CompletedList;
