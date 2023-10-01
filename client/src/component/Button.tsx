import React from 'react';
import styles from './Button.module.css';
import { useAudio } from '@/data/audio';

interface ButtonProps extends React.ComponentProps<'button'> {
    children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
    const audio = useAudio();
    const onClick = (ev: React.MouseEvent<HTMLButtonElement>) => {
        props.onClick?.(ev);
        console.log(audio.button)
        audio.button?.play();
    }
    return (
        <button{...props} className={`${styles.button} ${props.className}`} onClick={onClick}>
            {children}
        </button>
    );
};

export default Button;
