'use client'

import { lines } from "@/data/first-scene";

import { Answer, CommittedAnswer } from "@/data/types";
import React, { useEffect, useMemo, useState } from "react";
import { Scene } from "./Scene";
import * as Types from "@/data/types";
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

  const onRestart = () => {
    setAnswers([]);
  }

  const onStarted = () => {
    setStarted(true);
  };

  const environment = currentLine?.environment ?? Types.Environment.Room;
  const { soundtrack, intro, party } = useAudio();
  useEffect(() => {
    if (environment === Types.Environment.Party) {
      soundtrack?.stop();
      intro?.stop();
      party?.play();
    } else {
      party?.stop();
      if (isStarted) {
        intro?.stop();
        soundtrack?.play();
      } else {
        intro?.play();
        soundtrack?.stop();
      }
    }

    return () => {
      soundtrack?.stop();
      intro?.stop();
      party?.stop();
    }
  }, [soundtrack, isStarted, intro, environment, party]);

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
    <Result answers={committedAnswers} onRestart={onRestart}/>
  );
};

export default Game;
