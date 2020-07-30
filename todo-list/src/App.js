import React from "react";
import Tasklist from "./Tasklist";
import Add from "./Add";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: ["test", "test2", "test3", "test4"],
    };

    this.deleteTask = this.deleteTask.bind(this);
    this.addTask = this.addTask.bind(this);
  }

  deleteTask(key) {
    let items = this.state.tasks;
    items.splice(key, 1);

    this.setState({ tasks: items });
  }

  addTask() {
    let items = this.state.tasks;
    items.push("");

    this.setState({ tasks: items });
  }

  handleInput(key, value) {
    let items = this.state.tasks;
    items[key] = value;

    this.setState({ tasks: items });
  }

  render() {
    return (
      <div className="App">
        <Add addTask={this.addTask}></Add>
        <Tasklist
          tasks={this.state.tasks}
          deleteTask={this.deleteTask}
          handleInput={this.handleInput}
        ></Tasklist>
      </div>
    );
  }
}

export default App;
