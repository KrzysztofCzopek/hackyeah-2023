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
        {scene.environment !== Types.Environment.Party ? (
          <>
            <div className={styles.leftActor}>
              <Character
                character={scene.left}
                speaks={scene.speaking === "left"}
              />
            </div>
            <div className={styles.rightActor}>
              <Character
                flip
                character={scene.right}
                speaks={scene.speaking === "right"}
              />
            </div>
          </>
        ) : (
          <>
            <Character party character={Types.CharacterType.Boberek} />
            <Character party character={Types.CharacterType.Capibara} />
            <Character party character={Types.CharacterType.Diplodok} />
            <Character party character={Types.CharacterType.Dog} />
            <Character party character={Types.CharacterType.Frog} />
            <Character party character={Types.CharacterType.PigeonFly} />
          </>
        )}
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
