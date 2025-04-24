import React from 'react';
import styles from './Select.module.scss';

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  options: { label: string; value: string }[];
  className?: string;
}

const Select: React.FC<SelectProps> = ({ label, options, className = '', ...props }) => (
  <div className={styles.selectWrapper}>
    {label && <label className={styles.label}>{label}</label>}
    <select className={[styles.select, className].filter(Boolean).join(' ')} {...props}>
      {options.map(opt => (
        <option key={opt.value} value={opt.value}>{opt.label}</option>
      ))}
    </select>
  </div>
);

export default Select;
