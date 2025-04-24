import React from 'react';
import styles from './Radio.module.scss';

export interface RadioProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  className?: string;
}

const Radio: React.FC<RadioProps> = ({ label, className = '', ...props }) => (
  <label className={[styles.radioLabel, className].filter(Boolean).join(' ')}>
    <input type="radio" className={styles.radio} {...props} />
    <span className={styles.checkmark}></span>
    {label && <span className={styles.labelText}>{label}</span>}
  </label>
);

export default Radio;
