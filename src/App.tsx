import { CreateTask } from "./components/CreateTask";
import { Header } from "./components/Header";

import styles from "./App.module.css";

export function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <CreateTask />
      </div>
    </>
  );
}
