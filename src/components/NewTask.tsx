import { ChangeEvent, FormEvent, InvalidEvent, useState } from "react";

import { PlusCircle } from "@phosphor-icons/react";

import styles from "./NewTask.module.css";

interface NewTaskProps {
  createTask: (contentTask: string) => void;
}

export function NewTask({ createTask }: NewTaskProps) {
  const [newTask, setNewTask] = useState("");

  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault();

    if (newTask.trim().length > 0) {
      createTask(newTask);
      setNewTask("");
    }
  }

  function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity("");
    setNewTask(event.target.value);
  }

  function handleNewTaskInvalid(event: InvalidEvent<HTMLInputElement>) {
    event.target.setCustomValidity("Esse campo é obrigatório!");
  }

  return (
    <form className={styles.newTask} onSubmit={handleCreateNewTask}>
      <input
        type="text"
        placeholder="Adicione uma nova tarefa"
        value={newTask}
        onChange={handleNewTaskChange}
        onInvalid={handleNewTaskInvalid}
        required
      />
      <button type="submit">
        Criar <PlusCircle weight="bold" size={16} />
      </button>
    </form>
  );
}
