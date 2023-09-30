export enum CharacterType {
  Frog = "Frog",
  Cat = "Cat",
  Dog = "Dog"
}

export enum Environment {
  Room = 'room',
  Street = 'street',
  Park = 'park',
  Forest = 'forest',
  Meadow = "Meadow",
  Desert = "Desert"
}

export enum Mood {
    Happy = 'happy',
    Sad = 'sad',
    Angry = 'angry',
    Neutral = 'neutral',
}

export interface CommittedAnswer {
    lineKey: string;
    answerKey: string | null;
}

export interface Answer {
    text: string;
    key: string;
    answers?: Answer[];
}

export interface Narration {
    text: string;
    key: string;
}

export interface Question extends Narration {
    answers: Answer[];
}

export interface Character {
    type: CharacterType;
    mood: Mood;
}

export interface Line {
    speaking?: "left" | "right"
    left?: Character;
    right?: Character;
    environment?: Environment;
    content: Narration | Question;
}

export const isQuestion = (content: Narration): content is Question => {
    return (content as Question).answers !== undefined;
}
