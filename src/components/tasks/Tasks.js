import React          from "react";
import TaskItem       from "./TaskItem";
import { TaskConfig }  from "./config";
import Header         from "../common/Header";
import "../../assets/styles/tasks.scss";

const taskRows = TaskConfig.map(({id, task, hint, text, code}) => 
  <TaskItem key={id} task={task} hint={hint} text={text} code={code}/>
);

const Tasks = () => (
  <div className="wrapper">
    <div className="contentBox">
      <Header text="Birb Tasks" />
      <div className="tasksContainer">
        {taskRows}
      </div>
    </div>
  </div>
);

export default Tasks;
