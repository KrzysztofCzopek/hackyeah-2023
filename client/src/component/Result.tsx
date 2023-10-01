import React, { useEffect } from 'react';
import styles from './Result.module.css';
import { useAudio } from '@/data/audio';

interface ResultProps {
    result: string;
}

const Result: React.FC<ResultProps> = ({ result }) => {
    const audio = useAudio();
    useEffect(() => {
        audio.hallelujah.play();
    }, [audio.hallelujah]);
    return (
        <div className={styles.resultContainer}>
            <h2 className={styles.resultTitle}>Result</h2>
            <p className={styles.resultText}>{result}</p>
        </div>
    );
};

export default Result;
