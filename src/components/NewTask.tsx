import { PlusCircle } from "@phosphor-icons/react";

import styles from "./NewTask.module.css";

export function NewTask() {
  return (
    <form className={styles.newTask}>
      <input type="text" placeholder="Adicione uma nova tarefa" />
      <button type="submit">
        Criar <PlusCircle weight="bold" size={16} />
      </button>
    </form>
  );
}
