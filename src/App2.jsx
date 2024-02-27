import React from "react";
import TaskCard from "./Components/TaskCard/TaskCard";
import style from "./app2.module.css";
import { tasks } from "./data";

const App2 = () => {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Task Mangagement</h1>
      <div className={style.cardGroups}>
        {tasks.map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
};

export default App2;
