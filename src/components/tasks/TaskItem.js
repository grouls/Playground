import React from "react";

const styles = {
  hint: {
    color: "lightgreen",
    display: "block",
    "margin-left": "20px",
    "margin-top": "15px",
    "font-size": "14px",
  },
  bullet: {
    "padding-right": "10px",
    "margin-left": "10px"
  },
  task: {
    color: "white"
  },
  taskItemContainer: {
    display: "grid",
    "grid-template-columns": "40px auto",
    padding: "5px",
    background: "#2b333c",
    "border-radius": "20px",
    "margin-bottom": "20px"
  }
};

const TaskItem = ({ task, hint }) => (
  <div style={styles.taskItemContainer}>
    <p>
      <span style={styles.bullet} className="tooltip" role="img" aria-label="birb">
        🐦
      </span>
    </p>
    <p>
      <span style={styles.task}>{task}</span>
      <span style={styles.hint}>{hint}</span>
    </p>
  </div>
);

export default TaskItem;
