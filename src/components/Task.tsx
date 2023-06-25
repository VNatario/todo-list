import { Check, Trash } from "@phosphor-icons/react";

import styles from "./Task.module.css";
import { TaskType } from "./Tasks";

interface TaskProps {
  task: TaskType;
  checkedTask: (id: string) => void;
}

export function Task({ task, checkedTask }: TaskProps) {
  function handleChecked() {
    checkedTask(task.id);
  }

  return (
    <div className={task.isComplete ? styles.taskComplete : styles.task}>
      <button className={styles.check} onClick={handleChecked}>
        <Check weight="bold" size={12} />
      </button>
      <p>{task.content}</p>
      <button className={styles.trash}>
        <Trash size={20} />
      </button>
    </div>
  );
}
