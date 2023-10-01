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

const useTheTrack = (environment: Types.Environment, started: boolean, isFinished: boolean) => {
  const sound = useAudio();
  const tracks = useMemo(() => [
    sound.soundtrack!,
    sound.intro!,
    sound.outro!,
    sound.party!,
  ], [sound.intro, sound.outro, sound.party, sound.soundtrack]);

  return useMemo(() => {
    let result;
    if (environment === Types.Environment.Party) {
      result = sound.party;
    } else if (isFinished) {
      result = sound.outro;
    } else if (!started) {
      result = sound.intro;
    } else {
      result = sound.soundtrack;
    }
  
    return [result, tracks] as const;
  }, [environment, isFinished, sound.intro, sound.outro, sound.party, sound.soundtrack, started, tracks])
}

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
  const [targetTrack, tracks] = useTheTrack(environment, isStarted, currentLine === undefined);

  useEffect(() => {
    tracks.forEach((track) => {
      if (track === targetTrack) {
        track?.play();
      } else {
        track?.stop();
      }
    });

    return () => {
      tracks.forEach((track) => {
        track?.stop();
      });
    };
  }, [targetTrack, tracks]);

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
