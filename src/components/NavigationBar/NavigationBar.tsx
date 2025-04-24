import React from 'react';
import Link from 'next/link';
import styles from './NavigationBar.module.scss';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  active?: boolean;
}

const NavLink: React.FC<NavLinkProps> = ({ href, children, active }) => (
  <Link
    href={href}
    className={`${styles.navLink} ${active ? styles.active : ''}`}
  >
    {children}
  </Link>
);

const NavigationBar: React.FC = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link href='/'>3legant.</Link>
      </div>

      <div className={styles.navLinks}>
        <NavLink href='/'>Home</NavLink>
        <NavLink href='/shop' active={true}>
          Shop
        </NavLink>
        <NavLink href='/product'>Product</NavLink>
        <NavLink href='/contact'>Contact Us</NavLink>
      </div>

      <div className={styles.navIcons}>
        <button className={styles.iconButton}>
          <svg
            width='20'
            height='20'
            viewBox='0 0 20 20'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M17.5 17.5L14.5834 14.5833M16.6667 9.58333C16.6667 13.4954 13.4954 16.6667 9.58333 16.6667C5.67132 16.6667 2.5 13.4954 2.5 9.58333C2.5 5.67132 5.67132 2.5 9.58333 2.5C13.4954 2.5 16.6667 5.67132 16.6667 9.58333Z'
              stroke='#141718'
              strokeWidth='1.5'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>
        </button>
        <button className={styles.iconButton}>
          <svg
            width='20'
            height='20'
            viewBox='0 0 20 20'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M10.0001 12.5C12.7615 12.5 15.0001 10.2614 15.0001 7.5C15.0001 4.73858 12.7615 2.5 10.0001 2.5C7.23865 2.5 5.00008 4.73858 5.00008 7.5C5.00008 10.2614 7.23865 12.5 10.0001 12.5Z'
              stroke='#141718'
              strokeWidth='1.5'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
            <path
              d='M17.5 17.5C15.7615 15.7615 12.9744 14.5833 10 14.5833C7.02555 14.5833 4.23845 15.7615 2.5 17.5'
              stroke='#141718'
              strokeWidth='1.5'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>
        </button>
        <button className={styles.cartButton}>
          <div className={styles.cartCount}>
            <span>2</span>
          </div>
          <svg
            width='20'
            height='20'
            viewBox='0 0 20 20'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M6.66667 8.33333H13.3333L15.8333 3.33333H4.16667L6.66667 8.33333ZM6.66667 8.33333L4.16667 3.33333H2.5M6.66667 8.33333V13.3333M13.3333 8.33333V13.3333M6.66667 13.3333H13.3333M6.66667 13.3333V16.6667M13.3333 13.3333V16.6667'
              stroke='#141718'
              strokeWidth='1.5'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default NavigationBar;
