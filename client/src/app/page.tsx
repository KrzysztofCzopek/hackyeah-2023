import styles from "./page.module.css";
import Game from "@/component/Game";

export default function Home() {
  return (
    <main className={styles.main}>
      <Game />
    </main>
  );
}
