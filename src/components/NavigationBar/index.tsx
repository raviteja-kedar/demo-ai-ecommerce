import React from 'react';
import Link from 'next/link';
import styles from './styles.module.scss';

const NavigationBar: React.FC = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <Link href='/' className={styles.logo}>
          Demo AI
        </Link>

        <div className={styles.navLinks}>
          <Link href='/' className={styles.navLink}>
            Home
          </Link>
          <Link href='/shop' className={styles.navLink}>
            Shop
          </Link>
          <Link href='/about' className={styles.navLink}>
            About
          </Link>
          <Link href='/contact' className={styles.navLink}>
            Contact
          </Link>
        </div>

        <div className={styles.navIcons}>
          <button className={styles.iconButton}>
            <svg
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
          </button>
          <button className={styles.iconButton}>
            <svg
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M15 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H9M9 3V5C9 5.79565 9.31607 6.55871 9.87868 7.12132C10.4413 7.68393 11.2044 8 12 8C12.7956 8 13.5587 7.68393 14.1213 7.12132C14.6839 6.55871 15 5.79565 15 5V3M9 3H15M12 12H12.01V12.01H12V12Z'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
            <span className={styles.badge}>3</span>
          </button>
          <button className={styles.iconButton}>
            <svg
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
