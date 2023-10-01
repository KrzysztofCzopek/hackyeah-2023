import React, { useEffect, useMemo } from "react";
import styles from "./Result.module.css";
import { useAudio } from "@/data/audio";
import { CommittedAnswer, isQuestion } from "@/data/types";
import { createRecommendation } from "@/app/analysis/createRecommendation";
import { GameResult } from "@/domain/Game";
import { universityUJ } from '@/data/universities/UJ';
import { universityAGH } from '@/data/universities/AGH';
import { CandidateTrait, MajorTrait } from '@/domain/Trait';
import { Factor } from '@/domain/Factor';
import Button from "./Button";

interface ResultProps {
  answers: Array<CommittedAnswer>;
  onRestart: () => void;
}

const committedAnswersToGameResult = (
  answers: Array<CommittedAnswer>
): GameResult => {
  const [lat, long] = answers
    .find(it => it.lineKey?.startsWith('city'))!
    .answerKey!.split(";")
    .map(it => Number.parseFloat(it))
  return {
    location: { lat, long },
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
const Result: React.FC<ResultProps> = ({ answers, onRestart }) => {
  const audio = useAudio();
  useEffect(() => {
    audio.hallelujah?.play();
  }, [audio.hallelujah]);

  const result = useMemo(() => {
    return createRecommendation(
      committedAnswersToGameResult(answers),
      [ universityUJ, universityAGH ],
      [ 
        { 
          response: { answer: 'capibara', question: 'oswietlenie-odpowiedz' },
          traits: [{ trait: CandidateTrait.AFFINITY_HUMANITIES, points: 1}]
        },
        { 
          response: { answer: 'pies', question: 'oswietlenie-odpowiedz' },
          traits: [{ trait: CandidateTrait.AFFINITY_SCIENCE, points: 1}]
        },
        { 
          response: { answer: 'boberek', question: 'aktywnosc-odpowiedz' },
          traits: [{ trait: CandidateTrait.AFFINITY_SCIENCE, points: 1}]
        },
        { 
          response: { answer: 'zabka', question: 'aktywnosc-odpowiedz' },
          traits: [{ trait: CandidateTrait.AFFINITY_HUMANITIES, points: 1}]
        }
      ],
      [
        {
          factor: Factor.HUMANITIES,
          traits: [
            { trait: CandidateTrait.AFFINITY_HUMANITIES, points: 1 },
            { trait: MajorTrait.AFFINITY_HUMANITIES, points: 1 },
          ]
        },
        {
          factor: Factor.SCIENCE,
          traits: [
            { trait: CandidateTrait.AFFINITY_SCIENCE, points: 1 },
            { trait: MajorTrait.AFFINITY_SCIENCE, points: 1 },
          ]
        }
      ]
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
                  <a target="_blank" href={item.major.syllabusUrl} className={styles.url}>
                    Zobacz syllabus!
                  </a>
                  <p className={styles.resultItemDescription}>Mismatch rating: {item.ranking}</p>
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
                  <p className={styles.resultItemDescription}>Mismatch rating: {item.ranking}</p>
                </li>
              );
            })}
          </ul>
        </>
      ) : null}

      <Button onClick={onRestart}>Spróbuj ponownie!</Button>
    </div>
  );
};

export default Result;
