'use client';

import React from 'react';
import Link from 'next/link';
import styles from './Footer.module.scss';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.topSection}>
          <div className={styles.brandSection}>
            <div className={styles.logo}>3legant.</div>
            <p className={styles.description}>
              We make furniture with love and passion. Our goal is to create
              furniture that will last for generations.
            </p>
            <div className={styles.socialLinks}>
              <a href='#' className={styles.socialLink} aria-label='Instagram'>
                <svg
                  width='20'
                  height='20'
                  viewBox='0 0 20 20'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M14.1667 1.66675H5.83341C3.53223 1.66675 1.66675 3.53223 1.66675 5.83341V14.1667C1.66675 16.4679 3.53223 18.3334 5.83341 18.3334H14.1667C16.4679 18.3334 18.3334 16.4679 18.3334 14.1667V5.83341C18.3334 3.53223 16.4679 1.66675 14.1667 1.66675Z'
                    stroke='#141718'
                    strokeWidth='1.5'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                  <path
                    d='M13.3333 9.47508C13.4362 10.1685 13.3177 10.8769 12.9947 11.4992C12.6716 12.1215 12.1609 12.6262 11.5347 12.9414C10.9084 13.2566 10.1987 13.3663 9.50648 13.2549C8.81427 13.1436 8.17481 12.8167 7.67916 12.322C7.1835 11.8272 6.85517 11.1883 6.74223 10.4961C6.62929 9.8039 6.73736 9.09384 7.05111 8.46717C7.36486 7.84051 7.86839 7.32936 8.49021 7.00545C9.11204 6.68153 9.82065 6.56179 10.5143 6.66341C11.2234 6.76765 11.8742 7.09896 12.3802 7.60469C12.8861 8.11042 13.2179 8.7608 13.3233 9.46925L13.3333 9.47508Z'
                    stroke='#141718'
                    strokeWidth='1.5'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                  <path
                    d='M14.5833 5.41675H14.5917'
                    stroke='#141718'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                </svg>
              </a>
              <a href='#' className={styles.socialLink} aria-label='Facebook'>
                <svg
                  width='20'
                  height='20'
                  viewBox='0 0 20 20'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M15 1.66675H12.5C11.395 1.66675 10.3352 2.10573 9.55376 2.88722C8.77226 3.66871 8.33329 4.72847 8.33329 5.83341V8.33341H5.83329V11.6667H8.33329V18.3334H11.6666V11.6667H14.1666L15 8.33341H11.6666V5.83341C11.6666 5.61239 11.7544 5.40043 11.9107 5.24415C12.0669 5.08786 12.2789 5.00008 12.5 5.00008H15V1.66675Z'
                    stroke='#141718'
                    strokeWidth='1.5'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                </svg>
              </a>
              <a href='#' className={styles.socialLink} aria-label='YouTube'>
                <svg
                  width='20'
                  height='20'
                  viewBox='0 0 20 20'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M18.3333 6.1V13.9C18.3333 14.3971 18.1577 14.8742 17.8452 15.2398C17.5326 15.6055 17.1041 15.83 16.6333 15.875L16.4166 15.8833H3.58329C3.08622 15.8833 2.60913 15.7077 2.24351 15.3952C1.8779 15.0826 1.65335 14.6541 1.60829 14.1833L1.59996 13.9667V6.1C1.59996 5.60293 1.77559 5.12584 2.08813 4.76022C2.40068 4.39461 2.82918 4.17006 3.29996 4.125L3.51663 4.11667H16.4166C16.9137 4.11667 17.3908 4.2923 17.7564 4.60484C18.122 4.91739 18.3466 5.34589 18.3916 5.81667L18.4 6.03333L18.3333 6.1ZM8.33329 7.5V12.5L12.5 10L8.33329 7.5Z'
                    fill='#141718'
                  />
                </svg>
              </a>
            </div>
          </div>
          <div className={styles.linksSection}>
            <div className={styles.linkColumn}>
              <h3 className={styles.linkTitle}>Links</h3>
              <ul className={styles.linkList}>
                <li>
                  <Link href='/'>Home</Link>
                </li>
                <li>
                  <Link href='/shop'>Shop</Link>
                </li>
                <li>
                  <Link href='/about'>About</Link>
                </li>
                <li>
                  <Link href='/contact'>Contact</Link>
                </li>
              </ul>
            </div>
            <div className={styles.linkColumn}>
              <h3 className={styles.linkTitle}>Help</h3>
              <ul className={styles.linkList}>
                <li>
                  <Link href='/payments'>Payment Options</Link>
                </li>
                <li>
                  <Link href='/returns'>Returns</Link>
                </li>
                <li>
                  <Link href='/privacy'>Privacy Policy</Link>
                </li>
              </ul>
            </div>
            <div className={styles.linkColumn}>
              <h3 className={styles.linkTitle}>Newsletter</h3>
              <div className={styles.newsletterForm}>
                <input
                  type='email'
                  placeholder='Enter your email address'
                  className={styles.newsletterInput}
                />
                <button className={styles.subscribeButton}>
                  Subscribe
                  <svg
                    width='20'
                    height='20'
                    viewBox='0 0 20 20'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M3.33325 10H16.6666'
                      stroke='white'
                      strokeWidth='1.5'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                    <path
                      d='M11.6667 5L16.6667 10L11.6667 15'
                      stroke='white'
                      strokeWidth='1.5'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.divider}></div>
        <div className={styles.bottomSection}>
          <div className={styles.copyright}>
            Copyright © 2023 3legant. All rights reserved
          </div>
          <div className={styles.paymentMethods}>
            <span className={styles.paymentIcon}>
              <img src='/assets/payment/mastercard.svg' alt='Mastercard' />
            </span>
            <span className={styles.paymentIcon}>
              <img src='/assets/payment/visa.svg' alt='Visa' />
            </span>
            <span className={styles.paymentIcon}>
              <img src='/assets/payment/paypal.svg' alt='PayPal' />
            </span>
            <span className={styles.paymentIcon}>
              <img src='/assets/payment/applepay.svg' alt='Apple Pay' />
            </span>
            <span className={styles.paymentIcon}>
              <img src='/assets/payment/googlepay.svg' alt='Google Pay' />
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
