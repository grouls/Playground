import React          from "react";
import TaskItem       from "./TaskItem";
import { TaskConfig }  from  "./config";
import "../../assets/styles/tasks.scss";

const taskRows = TaskConfig.map(({id, task, hint}) => <TaskItem key={id} task={task} hint={hint} />);

const Tasks = () => (
  <div className="wrapper">
    <div className="contentBox">
      <h2 className="header">Birb Tasks</h2>
      <div className="tasksContainer">
        {taskRows}
      </div>
    </div>
  </div>
);

export default Tasks;
