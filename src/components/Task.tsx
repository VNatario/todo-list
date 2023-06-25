import { Check, Trash } from "@phosphor-icons/react";

import styles from "./Task.module.css";

export function Task() {
  return (
    <div className={styles.task}>
      <button
        className={styles.check}
        // className={styles.checked}
      >
        <Check weight="bold" size={12} />
      </button>
      <p>
        Integer urna interdum massa libero auctor neque turpis turpis semper.
        Duis vel sed fames integer.
      </p>
      <button className={styles.trash}>
        <Trash size={20} />
      </button>
    </div>
  );
}
