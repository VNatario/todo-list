import { ClipboardText } from "@phosphor-icons/react";

import styles from "./Tasks.module.css";
import { Task } from "./Task";

export function Tasks({ task = true }: any) {
  return (
    <>
      <div className={styles.info}>
        <div className={styles.createdTask}>
          <p>
            Tarefas criadas <span>0</span>
          </p>
        </div>

        <div className={styles.completedTasks}>
          <p>
            Concluídas <span>0</span>
          </p>
        </div>
      </div>

      {!task ? (
        <div className={styles.emptyList}>
          <ClipboardText size={56} />
          <p>
            <strong>Você ainda não tem tarefas cadastradas</strong>
            Crie tarefas e organize seus itens a fazer
          </p>
        </div>
      ) : (
        <div className={styles.list}>
          <Task />
        </div>
      )}
    </>
  );
}
