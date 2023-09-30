import { Scene } from "@/component/Scene";
import styles from "./page.module.css";

import { scenes } from "@/data/mock";
import { useMemo, useState } from "react";
import { Answer, CommittedAnswer } from "@/data/types";
import Game from "@/component/Game";

export default function Home() {
  return (
    <main className={styles.main}>
      <Game />
    </main>
  );
}
