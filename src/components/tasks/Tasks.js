import React          from "react";
import TaskItem       from "./TaskItem";
import { TaskConfig }  from  "./config";

const styles = {
  tasks: {
    "margin-left": "20px",
    "margin-right": "20px",
    "margin-top": "30px"
  }
};

const taskRows = TaskConfig.map(({id, task, hint}) => <TaskItem key={id} task={task} hint={hint} />);

const Tasks = () => (
  <div className="wrapper">
    <div className="contentBox contentBoxWide">
      <h2 className="header">Birb Tasks</h2>
      <div style={styles.tasks}>
        {taskRows}
      </div>
    </div>
  </div>
);

export default Tasks;
