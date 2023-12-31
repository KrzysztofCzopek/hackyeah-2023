import { CharacterType } from "./types";
import { useEffect, useMemo, useState } from "react";
import { Howl } from "howler";

const fallback = {
  soundtrack: null,
  button: null,
  hallelujah: null,
  sounds: null,
  intro: null,
  party: null,
  outro: null,
};

export const useAudio = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);
  return useMemo(() => {
    if (!loaded) {
      return fallback;
    }

    const soundtrack = new Howl({
      src: ["/audio/gameplay.mp3"],
      volume: 0.5,
      loop: true,
    });

    const button = new Howl({
      src: ["/audio/click.wav"],
      volume: 0.1,
    });

    const intro = new Howl({
      src: ["/audio/intro.mp3"],
      volume: 0.4,
      loop: true,
    });

    const outro = new Howl({
      src: ["/audio/outro.mp3"],
      volume: 0.4,
    });

    const party = new Howl({
      src: ["/audio/party.mp3"],
      loop: true,
      volume: 0.4,
    });

    const hallelujah = new Howl({
      src: ["/audio/hallelujah.mp3"],
      volume: 0.3,
    });

    const sounds: Record<CharacterType, Howl> = {
      [CharacterType.Note]: new Howl({ src: "/audio/paper.mp3", volume: 0.1 }),
      [CharacterType.Frog]: new Howl({ src: "/audio/frog.mp3" }),
      [CharacterType.Cat]: new Howl({ src: "/audio/dog.mp3" }),
      [CharacterType.Dog]: new Howl({ src: "/audio/dog.mp3" }),
      [CharacterType.Boberek]: new Howl({
        src: "/audio/beaver.mp3",
        volume: 0.2,
      }),
      [CharacterType.PigeonStand]: new Howl({ src: "/audio/owl.mp3" }),
      [CharacterType.PigeonFly]: new Howl({ src: "/audio/owl.mp3" }),
      [CharacterType.Capibara]: new Howl({
        src: "/audio/capybara.mp3",
        volume: 0.2,
      }),
      [CharacterType.Diplodok]: new Howl({ src: "/audio/dinosaur.mp3" }),
    };
    return {
      soundtrack,
      button,
      hallelujah,
      sounds,
      intro,
      outro,
      party,
    };
  }, [loaded]);
};
