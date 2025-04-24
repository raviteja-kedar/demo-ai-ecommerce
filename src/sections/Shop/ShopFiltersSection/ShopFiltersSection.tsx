import styles from './ShopFiltersSection.module.scss';

const ShopFiltersSection = () => {
  return (
    <aside className={styles.filters}>
      <div className={styles.filterHeader}>
        <div className={styles.filterIcon}>
          <svg
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M4 4L9 12V18L15 21V12L20 4H4Z'
              stroke='#141718'
              strokeWidth='1.5'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>
        </div>
        <h3 className={styles.filterTitle}>Filter</h3>
      </div>

      <div className={styles.block}>
        <h3 className={styles.title}>CATEGORIES</h3>
        <ul className={styles.list}>
          <li className={styles.categoryItem}>
            <button className={`${styles.categoryBtn} ${styles.active}`}>
              All Rooms
            </button>
          </li>
          <li className={styles.categoryItem}>
            <button className={styles.categoryBtn}>Living Room</button>
          </li>
          <li className={styles.categoryItem}>
            <button className={styles.categoryBtn}>Bedroom</button>
          </li>
          <li className={styles.categoryItem}>
            <button className={styles.categoryBtn}>Kitchen</button>
          </li>
          <li className={styles.categoryItem}>
            <button className={styles.categoryBtn}>Bathroom</button>
          </li>
          <li className={styles.categoryItem}>
            <button className={styles.categoryBtn}>Dinning</button>
          </li>
          <li className={styles.categoryItem}>
            <button className={styles.categoryBtn}>Outdoor</button>
          </li>
        </ul>
      </div>

      <div className={styles.block}>
        <h3 className={styles.title}>PRICE</h3>
        <div className={styles.priceOptions}>
          <div className={styles.priceItem}>
            <div className={styles.checkbox}>
              <div className={styles.checkboxInner}></div>
            </div>
            <span className={styles.priceLabel}>All Price</span>
          </div>
          <div className={`${styles.priceItem} ${styles.selected}`}>
            <div className={`${styles.checkbox} ${styles.checked}`}>
              <div className={styles.checkboxInner}>
                <svg
                  width='10'
                  height='8'
                  viewBox='0 0 10 8'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M1 3.5L3.667 6.5L9 1'
                    stroke='white'
                    strokeWidth='1.5'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                </svg>
              </div>
            </div>
            <span className={styles.priceLabel}>$0.00 - 99.99</span>
          </div>
          <div className={styles.priceItem}>
            <div className={styles.checkbox}>
              <div className={styles.checkboxInner}></div>
            </div>
            <span className={styles.priceLabel}>$100.00 - 199.99</span>
          </div>
          <div className={styles.priceItem}>
            <div className={styles.checkbox}>
              <div className={styles.checkboxInner}></div>
            </div>
            <span className={styles.priceLabel}>$200.00 - 299.99</span>
          </div>
          <div className={styles.priceItem}>
            <div className={styles.checkbox}>
              <div className={styles.checkboxInner}></div>
            </div>
            <span className={styles.priceLabel}>$300.00 - 399.99</span>
          </div>
          <div className={styles.priceItem}>
            <div className={styles.checkbox}>
              <div className={styles.checkboxInner}></div>
            </div>
            <span className={styles.priceLabel}>$400.00+</span>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default ShopFiltersSection;
