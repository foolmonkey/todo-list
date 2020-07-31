import React from "react";
import Tasklist from "./Tasklist";
import CompletedList from "./CompletedList";
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
    this.completeTask = this.completeTask.bind(this);
    this.uncompleteTask = this.uncompleteTask.bind(this);
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

  completeTask(key, value, event) {
    event.preventDefault();

    let items = this.state.completed;
    items.push(value);

    this.setState({ completed: items });

    // remove from tasks
    this.deleteTask(key);
  }

  uncompleteTask(key, value) {
    let items = this.state.tasks;
    items.push(value);

    this.setState({ tasks: items });

    // remove from completed tasks
    let removed = this.state.completed;
    removed.splice(key, 1);

    this.setState({ completed: removed });
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
          completeTask={this.completeTask}
        ></Tasklist>

        {this.state.completed.length > 0 && (
          <div id="completed">
            <h2>Completed Tasks</h2>
            <CompletedList
              tasks={this.state.completed}
              uncompleteTask={this.uncompleteTask}
            ></CompletedList>
          </div>
        )}
      </div>
    );
  }
}

export default App;
