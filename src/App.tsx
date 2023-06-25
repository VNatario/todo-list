import { Header } from "./components/Header";
import { NewTask } from "./components/NewTask";
import { Tasks } from "./components/Tasks";

import styles from "./App.module.css";
import { useState } from "react";

export function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      isComplete: false,
      content:
        "nteger urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.",
    },
    {
      id: 2,
      isComplete: true,
      content: "nteger urna interdum.",
    },
  ]);

  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <NewTask />
        <main>
          <Tasks tasks={tasks} />
        </main>
      </div>
    </>
  );
}
