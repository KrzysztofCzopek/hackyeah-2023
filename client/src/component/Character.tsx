import React, { useEffect, useRef, useState } from "react";
import styles from "./Character.module.css";
import * as Types from "@/data/types";
import { images } from "@/data/characters";

import Image from "next/image";

interface CharacterProps {
  character?: Types.Character;
  flip?: boolean;
}

const Character: React.FC<CharacterProps> = ({
  character,
  flip = false,
}: CharacterProps) => {
  const [displayedCharacter, setDisplayedCharacter] =
    useState<Types.CharacterType | null>(null);
  const [hidden, setHidden] = useState<boolean>(true);

  useEffect(() => {
    (async function () {
      let timeoutId: ReturnType<typeof setTimeout>;

      if (!character) {
        setHidden(true);
        await new Promise((resolve) => {
          timeoutId = setTimeout(resolve, 600);
        });
        setDisplayedCharacter(null);
      } else {
        setDisplayedCharacter(character.type);
        await new Promise((resolve) => {
          timeoutId = setTimeout(resolve, 100);
        });
        setHidden(false);
      }
      return () => {
        clearTimeout(timeoutId);
      }
    })();
  }, [character]);

  return displayedCharacter !== null ? (
    <div className={styles.container} data-flip={flip}>
      <Image
        data-shift={hidden}
        data-flip={flip}
        className={styles.image}
        width={256}
        height={256}
        alt={displayedCharacter}
        unoptimized
        src={images[displayedCharacter]}
      />
    </div>
  ) : null;
};

export default Character;
