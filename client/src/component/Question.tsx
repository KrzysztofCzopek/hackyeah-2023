import React, { use, useEffect, useMemo, useState } from "react";
import styles from "./Question.module.css";
import * as Types from "@/data/types";
import Button from "./Button";
import Answer from "./Answer";

interface QuestionProps {
  question: Types.Question;
  onAnswerSelected: (answer: Types.Answer) => void;
}

export const Question: React.FC<QuestionProps> = ({
  question,
  onAnswerSelected,
}) => {
  const [selected, setSelected] = useState<Types.Answer>();

  const select = (answer: Types.Answer) => {
    setSelected(answer);
  };

  const answers = useMemo(() => {
    if (selected && selected.answers) {
      return selected.answers;
    }

    if (selected) {
      return [selected];
    }

    return question.answers;
  }, [selected, question]);

  useEffect(() => {
    setSelected(undefined);
  }, [question]);

  const completed = selected && !selected.answers;

  return (
    <div className={styles.container}>
      {question.text}
      {answers.map((answer) => (
        <Answer
          selected={selected === answer}
          answer={answer}
          key={answer.key}
          onClick={select}
        />
      ))}
      <div className={styles.menu}>
        <Button
          className={styles.confirm}
          disabled={!completed}
          onClick={() => {
            if (selected) {
              onAnswerSelected(selected);
            }
          }}
        >
          Confirm!
        </Button>
        <Button
          className={styles.cancel}
          disabled={!selected}
          onClick={() => {
            if (selected) {
              setSelected(undefined);
            }
          }}
        >
          Clear
        </Button>
      </div>
    </div>
  );
};
