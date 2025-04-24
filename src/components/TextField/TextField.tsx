import React from 'react';
import styles from './TextField.module.scss';

export interface TextFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
}

const TextField: React.FC<TextFieldProps> = ({ label, error, helperText, className = '', ...props }) => {
  return (
    <div className={styles.textField}>
      {label && <label className={styles.label}>{label}</label>}
      <input className={[styles.input, error && styles.error, className].filter(Boolean).join(' ')} {...props} />
      {helperText && <div className={styles.helperText}>{helperText}</div>}
      {error && <div className={styles.errorText}>{error}</div>}
    </div>
  );
};

export default TextField;
