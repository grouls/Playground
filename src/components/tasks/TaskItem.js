import React from "react";

const styles = {
  hint: {
    color: "goldenrod",
    display: "block",
    "margin-left": "40px",
    "margin-top": "15px",
    "font-size": "13.5px",
    opacity: "0.8"
  },
  bullet: {
    "padding-right": "10px"
  }
};

const TaskItem = ({ task, hint }) => (
  <p>
    <span style={styles.bullet} className="tooltip" role="img" aria-label="birb">
      🐦
    </span>
    {task}
    <span style={styles.hint}>{hint}</span>
  </p>
);

export default TaskItem;
