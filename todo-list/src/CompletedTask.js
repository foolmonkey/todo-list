import React from "react";

class CompletedTask extends React.Component {
  render() {
    return (
      <div className="box doneoffset">
        <input
          className="complete"
          type="checkbox"
          checked
          onChange={(e) =>
            this.props.uncompleteTask(this.props.id, this.props.value, e)
          }
        ></input>
        <input
          className="strikethrough"
          type="text"
          defaultValue={this.props.value}
        ></input>
      </div>
    );
  }
}

export default CompletedTask;
