import React from 'react';
import styles from './Start.module.css';
import Button from './Button';

interface EmptyComponentProps {
    onStarted?: () => void;
}

const Start: React.FC<EmptyComponentProps> = ({ onStarted }) => {
    return (
        <div className={styles.container}>
            <Button onClick={onStarted}>START !</Button>
        </div>
    );
};

export default Start;
