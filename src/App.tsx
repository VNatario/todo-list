import { v4 as uuidv4 } from "uuid";
import { useState } from "react";

import { Header } from "./components/Header";
import { NewTask } from "./components/NewTask";
import { TaskType, Tasks } from "./components/Tasks";

import styles from "./App.module.css";

export function App() {
  const [tasks, setTasks] = useState<TaskType[]>([]);

  function createTask(contentTask: string) {
    const newTask = {
      id: uuidv4(),
      isComplete: false,
      content: contentTask,
    };
    setTasks([...tasks, newTask]);
  }

  function checkedTask(id: string) {
    const taskChecked = tasks.map((task) => {
      if (task.id === id) {
        return {
          ...task,
          isComplete: !task.isComplete,
        };
      } else {
        return task;
      }
    });

    console.log(taskChecked);

    setTasks(taskChecked);
  }

  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <NewTask createTask={createTask} />
        <main>
          <Tasks tasks={tasks} checkedTask={checkedTask} />
        </main>
      </div>
    </>
  );
}
