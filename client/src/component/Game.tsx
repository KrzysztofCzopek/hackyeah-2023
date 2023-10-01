'use client'

import { lines } from "@/data/first-scene";

import { Answer, CommittedAnswer } from "@/data/types";
import React, { useEffect, useMemo, useState } from "react";
import { Scene } from "./Scene";
import { useAudio } from "@/data/audio";
import Result from "./Result";
import Start from "./Start";

interface GameProps {}

const Game: React.FC<GameProps> = () => {
  const [committedAnswers, setAnswers] = useState<Array<CommittedAnswer>>([]);
  const [isStarted, setStarted] = useState<boolean>(false);
  const currentLine = useMemo(() => {
    return lines.find((line) => {
      const isAnswered = committedAnswers.some(
        (answer) => answer.lineKey === line.content.key
      );
      return !isAnswered;
    });
  }, [committedAnswers]);

  const onStarted = () => {
    setStarted(true);
  };

  const { soundtrack } = useAudio();
  useEffect(() => {
    soundtrack?.play();
  }, [soundtrack]);

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

  if (!isStarted) {
    return <Start onStarted={onStarted} />;
  }

  return currentLine !== undefined ? (
    <Scene scene={currentLine} onAnswerSelected={onAnswerSelected} />
  ) : (
    <Result result="Result!" />
  );
};

export default Game;
