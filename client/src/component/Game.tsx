"use client"

import { lines } from '@/data/mock';
import { Answer, CommittedAnswer } from '@/data/types';
import React, { useMemo, useState } from 'react';
import { Scene } from './Scene';

interface GameProps {}

const Game: React.FC<GameProps> = () => {
    const [committedAnswers, setAnswers] = useState<Array<CommittedAnswer>>([]);
    const currentLine = useMemo(() => {
      return lines.find((line) => {
        const isAnswered = committedAnswers.some(
          (answer) => answer.lineKey === line.content.key
        );
        return !isAnswered;
      });
    }, [committedAnswers]);
  
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
  
    return (
        currentLine !== undefined ? (
          <Scene scene={currentLine} onAnswerSelected={onAnswerSelected} />
        ) : (
          <div>Game Over</div>
        )
    );
};

export default Game;
