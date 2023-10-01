import { Audio, AudioType } from "ts-audio";
import { CharacterType } from "./types";
import { useMemo } from "react";


const fallback = {
  soundtrack: null,
  button: null,
  hallelujah: null,
  sounds: null,
};

export const useAudio = () => {
  return useMemo(() => {
    if (typeof window === "undefined") {
      return fallback;
    }

    const soundtrack = Audio({
      file: "/audio/gameplay.mp3",
      loop: true,
      volume: 0.2,
    });

    const button = Audio({
      file: "/audio/click.wav",
      volume: 0.1,
    });

    const hallelujah = Audio({
      file: "/audio/hallelujah.mp3",
      volume: 0.1,
    });

    const sounds: Record<CharacterType, AudioType> = {
      [CharacterType.Note]: Audio({ file: "/audio/paper.mp3", volume: 0.1 }),
      [CharacterType.Frog]: Audio({ file: "/audio/frog.mp3" }),
      [CharacterType.Cat]: Audio({ file: "/audio/dog.mp3" }),
      [CharacterType.Dog]: Audio({ file: "/audio/dog.mp3" }),
      [CharacterType.Boberek]: Audio({
        file: "/audio/beaver.mp3",
        volume: 0.1,
      }),
      [CharacterType.PigeonStand]: Audio({ file: "/audio/owl.mp3" }),
      [CharacterType.PigeonFly]: Audio({ file: "/audio/owl.mp3" }),
      [CharacterType.Capibara]: Audio({
        file: "/audio/capybara.mp3",
        volume: 0.1,
      }),
      [CharacterType.Diplodok]: Audio({ file: "/audio/dinosaur.mp3" }),
    };
    return {
      soundtrack,
      button,
      hallelujah,
      sounds,
    };
  }, []);
};
