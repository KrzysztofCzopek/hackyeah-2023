'use client'

import { lines } from "@/data/first-scene";

import { Answer, CommittedAnswer } from "@/data/types";
import React, { useEffect, useMemo, useState } from "react";
import { Scene } from "./Scene";
import { useAudio } from "@/data/audio";
import Result from "./Result";

interface GameProps {}

const Game: React.FC<GameProps> = () => {
  const audio = useAudio();
  const [committedAnswers, setAnswers] = useState<Array<CommittedAnswer>>([]);
  const currentLine = useMemo(() => {
    return lines.find((line) => {
      const isAnswered = committedAnswers.some(
        (answer) => answer.lineKey === line.content.key
      );
      return !isAnswered;
    });
  }, [committedAnswers]);

  useEffect(() => {
    audio.soundtrack?.play();
  }, []);

  const onAnswerSelected = (answer: Answer | null = null) => {
    if (!currentLine) {
      throw new Error("No current scene!");
    }

    if (answer === null) {
      setAnswers((answers) => [
        ...answers,
        { answerKey: null, lineKey: currentLine.content.key },
      ]);
    } else {
      setAnswers((answers) => [
        ...answers,
        { answerKey: answer.key, lineKey: currentLine.content.key },
      ]);
    }
  };

  return currentLine !== undefined ? (
    <Scene scene={currentLine} onAnswerSelected={onAnswerSelected} />
  ) : (
    <Result result="Result!" />
  );
};

export default Game;
