import React from 'react';
import styles from './Button.module.css';
import { button } from '@/data/audio';

interface ButtonProps extends React.ComponentProps<'button'> {
    children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
    const onClick = (ev: React.MouseEvent<HTMLButtonElement>) => {
        props.onClick?.(ev);
        button.play();
    }
    return (
        <button{...props} className={`${styles.button} ${props.className}`} onClick={onClick}>
            {children}
        </button>
    );
};

export default Button;
