'use client';

import { useState } from 'react';
import styles from './ProductDetailGallerySection.module.scss';

// Demo product images
const demoProductImages = [
  'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1594224457860-23f361add7a4?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1592078615290-033ee584e267?auto=format&fit=crop&w=800&q=80',
];

const ProductDetailGallerySection = () => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  return (
    <section className={styles.gallery}>
      <div className={styles.container}>
        <div className={styles.thumbnails}>
          {demoProductImages.map((image, index) => (
            <div
              key={index}
              className={`${styles.thumbnailItem} ${
                index === activeImageIndex ? styles.active : ''
              }`}
              onClick={() => setActiveImageIndex(index)}
            >
              <img
                src={image}
                alt={`Product thumbnail ${index + 1}`}
                className={styles.thumbnailImage}
              />
            </div>
          ))}
        </div>

        <div className={styles.mainImage}>
          <img
            src={demoProductImages[activeImageIndex]}
            alt='Product main view'
            className={styles.image}
          />
        </div>
      </div>
    </section>
  );
};

export default ProductDetailGallerySection;
