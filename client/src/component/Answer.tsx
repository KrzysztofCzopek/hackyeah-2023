import React from 'react';
import styles from './Answer.module.css';
import * as Types from "@/data/types";
import Button from './Button';

interface ResponseProps {
    answer: Types.Answer;
    selected: boolean;
    onClick : (answer: Types.Answer) => void;
}

const Answer: React.FC<ResponseProps> = ({ answer, selected, onClick }) => {
    return (
        <Button data-selected={selected} onClick={() => onClick(answer)} className={styles.container}>
            {answer.text}
        </Button>
    );
};

export default Answer;
