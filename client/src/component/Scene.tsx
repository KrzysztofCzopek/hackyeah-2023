import React from "react";
import styles from "./Scene.module.css";

import * as Types from "@/data/types";
import Character from "./Character";
import { Question } from "./Question";
import { Narration } from "./Narration";

interface SceneProps {
  scene: Types.Line;
  onAnswerSelected: (answer?: Types.Answer) => void;
}

export const Scene: React.FC<SceneProps> = ({ scene, onAnswerSelected }) => {
  return (
    <article className={styles.scene} data-environment={scene.environment}>
      <div className={styles.actors}>
        <div className={styles.leftActor}>
          <Character character={scene.left} />
        </div>
        <div className={styles.rightActor}>
          <Character flip character={scene.right} />
        </div>
      </div>
      <div data-actor={scene.speaking} className={styles.arrow}></div>
      <div className={styles.dialogue}>
        {Types.isQuestion(scene.content) ? (
          <Question
            onAnswerSelected={onAnswerSelected}
            question={scene.content}
          />
        ) : (
          <Narration narration={scene.content} onSkipped={onAnswerSelected} />
        )}
      </div>
    </article>
  );
};
