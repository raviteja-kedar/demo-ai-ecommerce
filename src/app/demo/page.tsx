'use client';

import React, { useState } from 'react';
import { NavigationBar, NotificationBar, Footer } from '@/components';
import styles from './page.module.scss';

// Sample product data
const products = [
  {
    id: 1,
    image: '/products/product-1.jpg',
    title: 'Loveseat Sofa',
    price: '$199.00',
    originalPrice: '$400.00',
    badge: 'NEW',
    saleBadge: '-50%',
    rating: 5,
  },
  {
    id: 2,
    image: '/products/product-2.jpg',
    title: 'Table Lamp',
    price: '$50.00',
    rating: 4,
  },
  {
    id: 3,
    image: '/products/product-3.jpg',
    title: 'Wooden Chair',
    price: '$65.00',
    originalPrice: '$95.00',
    saleBadge: '-30%',
    rating: 4,
  },
  {
    id: 4,
    image: '/products/product-4.jpg',
    title: 'Dining Table',
    price: '$199.00',
    badge: 'NEW',
    rating: 5,
  },
  {
    id: 5,
    image: '/products/product-5.jpg',
    title: 'Coffee Table',
    price: '$150.00',
    rating: 3,
  },
  {
    id: 6,
    image: '/products/product-6.jpg',
    title: 'Bedside Table',
    price: '$90.00',
    originalPrice: '$120.00',
    saleBadge: '-25%',
    rating: 4,
  },
  {
    id: 7,
    image: '/products/product-7.jpg',
    title: 'Modern Bookshelf',
    price: '$120.00',
    rating: 5,
  },
  {
    id: 8,
    image: '/products/product-8.jpg',
    title: 'Floor Lamp',
    price: '$75.00',
    originalPrice: '$95.00',
    saleBadge: '-20%',
    rating: 4,
  },
  {
    id: 9,
    image: '/products/product-9.jpg',
    title: 'Wooden Cabinet',
    price: '$240.00',
    badge: 'NEW',
    rating: 5,
  },
];

// Map of price ranges
const priceRanges = [
  { label: 'All Price', value: 'all' },
  { label: '$0.00 - $99.99', value: '0-99.99' },
  { label: '$100.00 - $199.99', value: '100-199.99' },
  { label: '$200.00 - $299.99', value: '200-299.99' },
  { label: '$300.00 - $399.99', value: '300-399.99' },
  { label: '$400.00+', value: '400+' },
];

// Map of categories
const categories = [
  { label: 'All Rooms', value: 'all' },
  { label: 'Living Room', value: 'living-room' },
  { label: 'Bedroom', value: 'bedroom' },
  { label: 'Kitchen', value: 'kitchen' },
  { label: 'Bathroom', value: 'bathroom' },
  { label: 'Dining', value: 'dining' },
  { label: 'Outdoor', value: 'outdoor' },
];

const DemoPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedPriceRange, setSelectedPriceRange] = useState('all');
  const [gridView, setGridView] = useState(3); // Default 3 columns

  return (
    <>
      <NotificationBar />
      <NavigationBar />
      <main className={styles.shopPageContainer}>
        <section className={styles.headerSection}>
          <div className={styles.breadcrumbs}>
            <span className={styles.homeLink}>Home</span> /{' '}
            <span className={styles.activeLink}>Shop</span>
          </div>
          <h1 className={styles.pageTitle}>Shop Products</h1>
          <p className={styles.pageSubtitle}>
            Let&apos;s design the place you always imagined.
          </p>
        </section>

        <div className={styles.contentRow}>
          {/* Filter Sidebar */}
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

            {/* Categories filter */}
            <div className={styles.filterBlock}>
              <h3 className={styles.filterBlockTitle}>CATEGORIES</h3>
              <ul className={styles.categoryList}>
                {categories.map((category) => (
                  <li key={category.value} className={styles.categoryItem}>
                    <button
                      className={`${styles.categoryBtn} ${
                        selectedCategory === category.value ? styles.active : ''
                      }`}
                      onClick={() => setSelectedCategory(category.value)}
                    >
                      {category.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Price filter */}
            <div className={styles.filterBlock}>
              <h3 className={styles.filterBlockTitle}>PRICE</h3>
              <div className={styles.priceOptions}>
                {priceRanges.map((range) => (
                  <div key={range.value} className={styles.priceItem}>
                    <div
                      className={`${styles.checkbox} ${
                        selectedPriceRange === range.value ? styles.checked : ''
                      }`}
                      onClick={() => setSelectedPriceRange(range.value)}
                    >
                      {selectedPriceRange === range.value && (
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
                      )}
                    </div>
                    <span className={styles.priceLabel}>{range.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </aside>

          {/* Product Grid */}
          <section className={styles.gridSection}>
            <div className={styles.toolbarSection}>
              <h2 className={styles.categoryTitle}>All Products</h2>
              <div className={styles.toolbarControls}>
                <div className={styles.sortDropdown}>
                  <span className={styles.sortText}>Sort by</span>
                  <svg
                    width='16'
                    height='16'
                    viewBox='0 0 16 16'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M4 6L8 10L12 6'
                      stroke='#141718'
                      strokeWidth='1.5'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                  </svg>
                </div>
                <div className={styles.viewControls}>
                  <button
                    className={`${styles.viewControl} ${
                      gridView === 1 ? styles.active : ''
                    }`}
                    onClick={() => setGridView(1)}
                    aria-label='One column view'
                  >
                    <svg
                      width='16'
                      height='16'
                      viewBox='0 0 16 16'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <rect
                        x='3'
                        y='3'
                        width='10'
                        height='10'
                        rx='1'
                        stroke='#141718'
                        strokeWidth='1.5'
                      />
                    </svg>
                  </button>
                  <button
                    className={`${styles.viewControl} ${
                      gridView === 2 ? styles.active : ''
                    }`}
                    onClick={() => setGridView(2)}
                    aria-label='Two column view'
                  >
                    <svg
                      width='16'
                      height='16'
                      viewBox='0 0 16 16'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <rect
                        x='3'
                        y='3'
                        width='4'
                        height='10'
                        rx='1'
                        stroke='#141718'
                        strokeWidth='1.5'
                      />
                      <rect
                        x='9'
                        y='3'
                        width='4'
                        height='10'
                        rx='1'
                        stroke='#141718'
                        strokeWidth='1.5'
                      />
                    </svg>
                  </button>
                  <button
                    className={`${styles.viewControl} ${
                      gridView === 3 ? styles.active : ''
                    }`}
                    onClick={() => setGridView(3)}
                    aria-label='Three column view'
                  >
                    <svg
                      width='16'
                      height='16'
                      viewBox='0 0 16 16'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <rect
                        x='2'
                        y='3'
                        width='3'
                        height='10'
                        rx='1'
                        stroke='#141718'
                        strokeWidth='1.5'
                      />
                      <rect
                        x='6.5'
                        y='3'
                        width='3'
                        height='10'
                        rx='1'
                        stroke='#141718'
                        strokeWidth='1.5'
                      />
                      <rect
                        x='11'
                        y='3'
                        width='3'
                        height='10'
                        rx='1'
                        stroke='#141718'
                        strokeWidth='1.5'
                      />
                    </svg>
                  </button>
                  <button
                    className={`${styles.viewControl} ${
                      gridView === 4 ? styles.active : ''
                    }`}
                    onClick={() => setGridView(4)}
                    aria-label='Four column view'
                  >
                    <svg
                      width='16'
                      height='16'
                      viewBox='0 0 16 16'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <rect
                        x='1'
                        y='3'
                        width='2.5'
                        height='10'
                        rx='1'
                        stroke='#141718'
                        strokeWidth='1.5'
                      />
                      <rect
                        x='4.83333'
                        y='3'
                        width='2.5'
                        height='10'
                        rx='1'
                        stroke='#141718'
                        strokeWidth='1.5'
                      />
                      <rect
                        x='8.66667'
                        y='3'
                        width='2.5'
                        height='10'
                        rx='1'
                        stroke='#141718'
                        strokeWidth='1.5'
                      />
                      <rect
                        x='12.5'
                        y='3'
                        width='2.5'
                        height='10'
                        rx='1'
                        stroke='#141718'
                        strokeWidth='1.5'
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            <div className={`${styles.grid} ${styles[`grid-${gridView}`]}`}>
              {products.map((product) => (
                <div key={product.id} className={styles.productCard}>
                  <div className={styles.imageWrapper}>
                    <img
                      src={product.image}
                      alt={product.title}
                      className={styles.productImage}
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src =
                          'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=400&q=80';
                      }}
                    />
                    <div className={styles.badgeContainer}>
                      {product.badge && (
                        <span className={styles.badge}>{product.badge}</span>
                      )}
                      {product.saleBadge && (
                        <span className={styles.saleBadge}>
                          {product.saleBadge}
                        </span>
                      )}
                    </div>
                    <div className={styles.productActions}>
                      <button className={styles.actionButton}>
                        <svg
                          width='20'
                          height='20'
                          viewBox='0 0 20 20'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            d='M10.0001 18.3333C14.6025 18.3333 18.3334 14.6024 18.3334 10C18.3334 5.39763 14.6025 1.66667 10.0001 1.66667C5.39771 1.66667 1.66675 5.39763 1.66675 10C1.66675 14.6024 5.39771 18.3333 10.0001 18.3333Z'
                            stroke='white'
                            strokeWidth='1.5'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                          />
                          <path
                            d='M10 6.66667V13.3333'
                            stroke='white'
                            strokeWidth='1.5'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                          />
                          <path
                            d='M6.66675 10H13.3334'
                            stroke='white'
                            strokeWidth='1.5'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                          />
                        </svg>
                      </button>
                      <button className={styles.actionButton}>
                        <svg
                          width='20'
                          height='20'
                          viewBox='0 0 20 20'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            d='M17.3667 3.84166C16.9411 3.41583 16.4357 3.07803 15.8795 2.84757C15.3233 2.6171 14.7271 2.49847 14.1251 2.49847C13.523 2.49847 12.9268 2.6171 12.3706 2.84757C11.8144 3.07803 11.309 3.41583 10.8834 3.84166L10.0001 4.725L9.11673 3.84166C8.25698 2.98192 7.09092 2.49892 5.87506 2.49892C4.6592 2.49892 3.49314 2.98192 2.63339 3.84166C1.77365 4.70141 1.29065 5.86747 1.29065 7.08333C1.29065 8.29919 1.77365 9.46525 2.63339 10.325L3.51673 11.2083L10.0001 17.6917L16.4834 11.2083L17.3667 10.325C17.7926 9.89937 18.1304 9.39401 18.3608 8.83779C18.5913 8.28158 18.7099 7.6854 18.7099 7.08333C18.7099 6.48127 18.5913 5.88509 18.3608 5.32887C18.1304 4.77266 17.7926 4.26729 17.3667 3.84166V3.84166Z'
                            stroke='white'
                            strokeWidth='1.5'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <div className={styles.info}>
                    {product.rating && (
                      <div className={styles.rating}>
                        {[...Array(5)].map((_, i) => (
                          <span
                            key={i}
                            className={
                              i < product.rating
                                ? styles.starFilled
                                : styles.star
                            }
                          >
                            <svg
                              width='14'
                              height='14'
                              viewBox='0 0 14 14'
                              fill='none'
                              xmlns='http://www.w3.org/2000/svg'
                            >
                              <path
                                d='M7.00001 1.16667L8.80001 4.81667L12.8333 5.41667L9.91668 8.25L10.6 12.2667L7.00001 10.3833L3.40001 12.2667L4.08335 8.25L1.16668 5.41667L5.20001 4.81667L7.00001 1.16667Z'
                                fill={
                                  i < product.rating ? '#FFC633' : '#DFDFDF'
                                }
                                stroke={
                                  i < product.rating ? '#FFC633' : '#DFDFDF'
                                }
                                strokeWidth='1.5'
                                strokeLinecap='round'
                                strokeLinejoin='round'
                              />
                            </svg>
                          </span>
                        ))}
                      </div>
                    )}
                    <div className={styles.title}>{product.title}</div>
                    <div className={styles.priceContainer}>
                      <div className={styles.price}>{product.price}</div>
                      {product.originalPrice && (
                        <div className={styles.originalPrice}>
                          {product.originalPrice}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className={styles.showMoreContainer}>
              <button className={styles.showMoreButton}>Show more</button>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default DemoPage;
