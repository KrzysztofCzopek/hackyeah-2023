import React, { useEffect, useState } from "react";
import styles from "./Character.module.css";
import * as Types from "@/data/types";
import { images } from "@/data/characters";

import Image from "next/image";
import { useAudio } from "@/data/audio";

interface CharacterProps {
  character?: Types.CharacterType;
  flip?: boolean;
  speaks?: boolean;
  party?: boolean;
}

const Character: React.FC<CharacterProps> = ({
  character,
  flip = false,
  speaks = false,
  party = false,
}: CharacterProps) => {
  const [displayedCharacter, setDisplayedCharacter] =
    useState<Types.CharacterType | null>(null);
  const [hidden, setHidden] = useState<boolean>(true);
  const audio = useAudio();

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
        setDisplayedCharacter(character);
        await new Promise((resolve) => {
          timeoutId = setTimeout(resolve, 100);
        });
        console.log(audio.sounds?.[character]);
        audio.sounds?.[character]?.play();
        setHidden(false);
      }
      return () => {
        clearTimeout(timeoutId);
      };
    })();
  }, [audio.sounds, character]);

  return displayedCharacter !== null ? (
    <div className={styles.container} data-flip={flip} data-speaks={speaks} data-party={party} data-animal={displayedCharacter}>
      <div data-shift={hidden} className={styles.hide}>
        <div className={styles.shaker}>
          <Image
            data-flip={flip}
            className={styles.image}
            width={256}
            height={256}
            alt={displayedCharacter}
            unoptimized
            src={images[displayedCharacter]}
          />
        </div>
      </div>
    </div>
  ) : null;
};

export default Character;
