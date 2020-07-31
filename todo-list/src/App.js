import React from "react";
import Tasklist from "./Tasklist";
import Add from "./Add";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: ["Edit this task!"],
      completed: [],
    };

    this.deleteTask = this.deleteTask.bind(this);
    this.addTask = this.addTask.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  // deletes the task with the specified key
  deleteTask(key) {
    let items = this.state.tasks;
    items.splice(key, 1);

    this.setState({ tasks: items });
  }

  // add an empty task to the end of the list
  addTask() {
    let items = this.state.tasks;
    items.push("");

    this.setState({ tasks: items });
  }

  // controlled input field for task
  handleInput(key, event) {
    let items = this.state.tasks;
    items[key] = event.target.value;
    this.setState({ tasks: items });
  }

  // handles special keyDown events
  handleKeyDown(key, value, event) {
    // create new task on 'enter' key
    if (event.key === "Enter") {
      let items = this.state.tasks;
      items.splice(key + 1, 0, "");

      this.setState({ tasks: items });

      // when field is empty, delete task on 'backspace' key
    } else if (event.key === "Backspace" && value === "") {
      this.deleteTask(key);
    }
  }

  render() {
    return (
      <div className="App">
        <Add addTask={this.addTask}></Add>
        <Tasklist
          tasks={this.state.tasks}
          deleteTask={this.deleteTask}
          handleInput={this.handleInput}
          handleKeyDown={this.handleKeyDown}
        ></Tasklist>
      </div>
    );
  }
}

export default App;
