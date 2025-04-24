import React from 'react';
import styles from './Badge.module.scss';

export interface BadgeProps {
  children: React.ReactNode;
  color?: 'primary' | 'secondary' | 'success' | 'danger' | 'neutral';
  className?: string;
}

const Badge: React.FC<BadgeProps> = ({ children, color = 'neutral', className = '' }) => (
  <span className={[styles.badge, styles[color], className].filter(Boolean).join(' ')}>
    {children}
  </span>
);

export default Badge;
