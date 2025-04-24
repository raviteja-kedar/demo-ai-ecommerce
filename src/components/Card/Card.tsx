import React from 'react';
import styles from './Card.module.scss';

export interface CardProps {
  children: React.ReactNode;
  className?: string;
}

const Card: React.FC<CardProps> = ({ children, className = '' }) => (
  <div className={[styles.card, className].filter(Boolean).join(' ')}>
    {children}
  </div>
);

export default Card;
