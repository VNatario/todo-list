import styles from "./Tasks.module.css";

export function Tasks() {
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
      <div>Empty</div>
    </>
  );
}
