import React from 'react';
import styles from './Checkbox.module.scss';

export interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  className?: string;
}

const Checkbox: React.FC<CheckboxProps> = ({ label, className = '', ...props }) => (
  <label className={[styles.checkboxLabel, className].filter(Boolean).join(' ')}>
    <input type="checkbox" className={styles.checkbox} {...props} />
    <span className={styles.checkmark}></span>
    {label && <span className={styles.labelText}>{label}</span>}
  </label>
);

export default Checkbox;
