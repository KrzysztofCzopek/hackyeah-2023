import React from 'react';
import styles from './Button.module.css';

interface ButtonProps extends React.ComponentProps<'button'> {
    children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
    return (
        <button{...props} className={`${styles.button} ${props.className}`}>
            {children}
        </button>
    );
};

export default Button;
