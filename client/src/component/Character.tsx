import React from 'react';
import styles from './Character.module.css';
import * as Types from '@/data/types';

interface CharacterProps {
    character: Types.Character;
}

const Character: React.FC<CharacterProps> = ({ character }: CharacterProps) => {
    return <div className={styles.container}>{character.type}</div>;
};

export default Character;
