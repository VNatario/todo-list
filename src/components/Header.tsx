import rocketIcon from "../assets/roceketIcon.svg";
import styles from "./Header.module.css";

export function Header() {
  return (
    <header className={styles.header}>
      <div>
        <img src={rocketIcon} alt="Icone de um foguete" />
        <h1>
          to<span>do</span>
        </h1>
      </div>
    </header>
  );
}
