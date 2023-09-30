import React from "react";
import styles from "./Narration.module.css";
import * as Types from "@/data/types";
import Button from "./Button";

interface NarrationProps {
  narration: Types.Narration;
  onSkipped: () => void;
}

export const Narration: React.FC<NarrationProps> = ({ narration, onSkipped }) => {

  return (
    <div className={styles.container}>
      {narration.text}
      <div className={styles.menu}>
        <Button
          className={styles.continue}
          onClick={() => {
            onSkipped();
          }}
        >
          Continue...
        </Button>
      </div>
    </div>
  );
};
