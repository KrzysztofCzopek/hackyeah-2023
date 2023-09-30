import React from "react";
import styles from "./Character.module.css";
import * as Types from "@/data/types";
import { images } from "@/data/characters";

import Image from "next/image";

interface CharacterProps {
  character: Types.Character;
  flip?: boolean;
}

const Character: React.FC<CharacterProps> = ({ character, flip = false }: CharacterProps) => {
  return (
    <div className={styles.container}>
      <Image data-flip={flip} className={styles.image} width={256} height={256} alt={character.type} src={images[character.type]} />
    </div>
  );
};

export default Character;
