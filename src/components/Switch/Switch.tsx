import React from 'react';
import styles from './Switch.module.scss';

export interface SwitchProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  className?: string;
}

const Switch: React.FC<SwitchProps> = ({ label, className = '', ...props }) => (
  <label className={[styles.switchLabel, className].filter(Boolean).join(' ')}>
    <input type="checkbox" className={styles.switch} {...props} />
    <span className={styles.slider}></span>
    {label && <span className={styles.labelText}>{label}</span>}
  </label>
);

export default Switch;
