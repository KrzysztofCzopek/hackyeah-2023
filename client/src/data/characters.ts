import { CharacterType } from "./types";

export const images: Record<CharacterType, string> = {
    [CharacterType.Frog]: require("../../public/characters/frog.png"),
    [CharacterType.Cat]: require("../../public/characters/dog.png"),
    [CharacterType.Dog]: require("../../public/characters/dog.png"),
    [CharacterType.Boberek]: require("../../public/characters/boberek.png"),
    [CharacterType.PigeonStand]: require("../../public/characters/pigeon_stand.png"),
    [CharacterType.PigeonFly]: require("../../public/characters/pigeon_fly.png"),
    [CharacterType.Note]: require("../../public/characters/note.png"),
    [CharacterType.Capibara]: require("../../public/characters/capibara.png"),
    [CharacterType.Diplodok]: require("../../public/characters/diplodok.png"),
};
