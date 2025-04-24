'use client';

import React, { useState } from 'react';
import styles from './NotificationBar.module.scss';

const NotificationBar: React.FC = () => {
  const [visible, setVisible] = useState(true);

  const handleClose = () => {
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className={styles.notificationBar}>
      <div className={styles.content}>
        <div className={styles.textIcon}>
          <img
            src='/assets/notification-icon.svg'
            alt='Notification'
            width='18'
            height='18'
          />
          <span className={styles.text}>30% off storewide — Limited time!</span>
        </div>
        <button className={styles.button}>
          <span>Shop Now</span>
          <img
            src='/assets/arrow-right-icon.svg'
            alt='Arrow right'
            width='14'
            height='14'
          />
        </button>
      </div>
      <button className={styles.closeButton} onClick={handleClose}>
        <img src='/assets/close-icon.svg' alt='Close' width='16' height='16' />
      </button>
    </div>
  );
};

export default NotificationBar;
