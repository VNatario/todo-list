import { v4 as uuidv4 } from "uuid";
import { useState } from "react";

import { Header } from "./components/Header";
import { NewTask } from "./components/NewTask";
import { Tasks } from "./components/Tasks";

import styles from "./App.module.css";

export function App() {
  const [tasks, setTasks] = useState([
    {
      id: uuidv4(),
      isComplete: false,
      content:
        "nteger urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.",
    },
    {
      id: uuidv4(),
      isComplete: true,
      content: "nteger urna interdum.",
    },
  ]);

  console.log("TASKS >>:", tasks);

  function createTask(contentTask: string) {
    const newTask = {
      //add uuid
      id: uuidv4(),
      isComplete: false,
      content: contentTask,
    };
    setTasks([...tasks, newTask]);
  }

  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <NewTask createTask={createTask} />
        <main>
          <Tasks tasks={tasks} />
        </main>
      </div>
    </>
  );
}
