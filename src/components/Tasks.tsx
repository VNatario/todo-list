import { ClipboardText } from "@phosphor-icons/react";

import styles from "./Tasks.module.css";
import { Task } from "./Task";

export interface TaskType {
  id: string;
  content: string;
  isComplete: boolean;
}

interface TasksProps {
  tasks: TaskType[];
  checkedTask: (id: string) => void;
  deleteTask: (id: string) => void;
}

export function Tasks({ tasks, checkedTask, deleteTask }: TasksProps) {
  const tasksComplete = tasks.filter((task) => task.isComplete);

  return (
    <>
      <div className={styles.info}>
        <div className={styles.createdTask}>
          <p>
            Tarefas criadas <span>{tasks.length}</span>
          </p>
        </div>

        <div className={styles.completedTasks}>
          <p>
            Concluídas{" "}
            <span>
              {tasks.length === 0
                ? tasks.length
                : `${tasksComplete.length} de ${tasks.length}`}
            </span>
          </p>
        </div>
      </div>

      {tasks.length === 0 ? (
        <div className={styles.emptyList}>
          <ClipboardText size={56} />
          <p>
            <strong>Você ainda não tem tarefas cadastradas</strong>
            Crie tarefas e organize seus itens a fazer
          </p>
        </div>
      ) : (
        <div className={styles.list}>
          {tasks.map((task) => {
            return (
              <Task
                key={task.id}
                task={task}
                checkedTask={checkedTask}
                deleteTask={deleteTask}
              />
            );
          })}
        </div>
      )}
    </>
  );
}
