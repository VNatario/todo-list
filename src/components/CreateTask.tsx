import { PlusCircle } from "@phosphor-icons/react";

import styles from "./CreateTask.module.css";

export function CreateTask() {
  return (
    <form className={styles.newTask}>
      <input type="text" placeholder="Adicione uma nova tarefa" />
      <button type="submit">
        Criar <PlusCircle weight="bold" size={16} />
      </button>
    </form>
  );
}
