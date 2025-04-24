import React from 'react';
import styles from './Avatar.module.scss';

export interface AvatarProps {
  src: string;
  alt?: string;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const Avatar: React.FC<AvatarProps> = ({ src, alt = '', size = 'md', className = '' }) => (
  <img
    src={src}
    alt={alt}
    className={[styles.avatar, styles[size], className].filter(Boolean).join(' ')}
  />
);

export default Avatar;
