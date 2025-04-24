import React from 'react';
import styles from './ProductCard.module.scss';

export interface ProductCardProps {
  image: string;
  title: string;
  price: string;
  originalPrice?: string;
  badge?: string;
  saleBadge?: string;
  rating?: number;
}

const ProductCard: React.FC<ProductCardProps> = ({
  image,
  title,
  price,
  originalPrice,
  badge,
  saleBadge,
  rating,
}) => {
  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <img src={image} alt={title} className={styles.image} />
        <div className={styles.badgeContainer}>
          {badge && <span className={styles.badge}>{badge}</span>}
          {saleBadge && <span className={styles.saleBadge}>{saleBadge}</span>}
        </div>
      </div>
      <div className={styles.info}>
        {rating && (
          <div className={styles.rating}>
            {[...Array(5)].map((_, i) => (
              <span
                key={i}
                className={i < rating ? styles.starFilled : styles.star}
              >
                <img
                  src={
                    i < rating ? '/assets/star.svg' : '/assets/star-empty.svg'
                  }
                  alt={i < rating ? 'Filled star' : 'Empty star'}
                  width='14'
                  height='14'
                />
              </span>
            ))}
          </div>
        )}
        <div className={styles.title}>{title}</div>
        <div className={styles.priceContainer}>
          <div className={styles.price}>{price}</div>
          {originalPrice && (
            <div className={styles.originalPrice}>{originalPrice}</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
