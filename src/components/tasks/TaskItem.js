import React, { Component } from "react";
import CodeItem             from "../common/CodeItem";
import Prism                from "prismjs";
class TaskItem extends Component {

  componentDidMount(){
    Prism.highlightAll();
  }

  render() {
    const { task, hint, text, code } = this.props;
    return (
      <div className="taskItemContainer">
      <div className="taskItemGrid">
        <p>
          <span className="bullet tooltip" role="img" aria-label="birb">
            🐦
          </span>
        </p>
        <p>
          <span className="task">{task}</span>
          <span className="hint">{hint}</span>
        </p>
        </div>
        {code && <CodeItem text={text} code={code} />}
      </div>
    );
  }
}

export default TaskItem;
