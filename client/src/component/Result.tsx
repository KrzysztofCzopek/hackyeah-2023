import React, { useEffect, useMemo } from "react";
import styles from "./Result.module.css";
import { useAudio } from "@/data/audio";
import { CommittedAnswer, isQuestion } from "@/data/types";
import { createRecommendation } from "@/app/analysis/createRecommendation";
import { GameResult } from "@/domain/Game";

interface ResultProps {
  answers: Array<CommittedAnswer>;
}

const committedAnswersToGameResult = (
  answers: Array<CommittedAnswer>
): GameResult => {
  return {
    location: {
      lat: 0,
      long: 0,
    },
    responses: answers
      .filter(({ answerKey }) => answerKey !== null)
      .map((answer) => {
        return {
          question: answer.lineKey,
          answer: answer.answerKey!,
        };
      }),
  };
};
const Result: React.FC<ResultProps> = ({ answers }) => {
  const audio = useAudio();
  useEffect(() => {
    audio.hallelujah?.play();
  }, [audio.hallelujah]);

  const result = useMemo(() => {
    return createRecommendation(
      committedAnswersToGameResult(answers),
      [],
      [],
      []
    );
  }, [answers]);

  return (
    <div className={styles.resultContainer}>
      <h2 className={styles.resultTitle}>Result</h2>
      {result.topMajors.length > 0 ? (
        <>
          <h3 className={styles.resultSubtitle}>Majors:</h3>
          <ul className={styles.resultList}>
            {result.topMajors.map((item, key) => {
              return (
                <li key={key} className={styles.resultItem}>
                  <p className={styles.resultItemTitle}>{item.major.name}</p>
                  <p className={styles.resultItemDescription}>
                    {item.major.syllabusUrl}
                  </p>
                </li>
              );
            })}
          </ul>
        </>
      ) : null}
      {result.topUniversities.length > 0 ? (
        <>
          <h3 className={styles.resultSubtitle}>Universities:</h3>
          <ul className={styles.resultList}>
            {result.topUniversities.map((item, key) => {
              return (
                <li key={key} className={styles.resultItem}>
                  <p className={styles.resultItemTitle}>
                    {item.university.name}
                  </p>
                  <p className={styles.resultItemDescription}>{item.ranking}</p>
                </li>
              );
            })}
          </ul>
        </>
      ) : null}
    </div>
  );
};

export default Result;
