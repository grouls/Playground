import React from "react";

const TaskItem = ({ task, hint }) => (
  <div className="taskItemContainer">
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
);

export default TaskItem;
