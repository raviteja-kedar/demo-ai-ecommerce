'use client';

import { useState } from 'react';
import styles from './ProductDetailDescriptionSection.module.scss';
import { Button, QuantityCounter, Select } from '@/components';

// Demo product data
const demoProduct = {
  title: 'Premium Sofa',
  rating: 4.5,
  reviewCount: 12,
  price: '$299.00',
  originalPrice: '$399.00',
  discount: '25% Off',
  description:
    'Experience ultimate comfort with our premium sofa. Designed with high-quality materials for durability and style. The perfect addition to any modern living space.',
  colors: [
    { label: 'Light Gray', value: 'light-gray' },
    { label: 'Dark Gray', value: 'dark-gray' },
    { label: 'Black', value: 'black' },
  ],
  sizes: [
    { label: 'Small', value: 'small' },
    { label: 'Medium', value: 'medium' },
    { label: 'Large', value: 'large' },
  ],
  sku: 'SF-PRO-1234',
  category: 'Furniture',
  tags: ['Sofa', 'Furniture', 'Living Room'],
  features: [
    'Stain-resistant fabric',
    'Ergonomic design',
    'Easy to assemble',
    'Durable frame',
  ],
  reviews: [
    {
      id: 1,
      author: 'Sarah Johnson',
      avatar: 'https://randomuser.me/api/portraits/women/32.jpg',
      date: '2 days ago',
      rating: 5,
      comment:
        'This sofa is absolutely perfect! The quality is exceptional and it looks even better in person. Very comfortable and fits perfectly in my living room.',
    },
    {
      id: 2,
      author: 'Michael Brown',
      avatar: 'https://randomuser.me/api/portraits/men/42.jpg',
      date: '1 week ago',
      rating: 4,
      comment:
        "Great sofa for the price. Assembly was straightforward and the fabric feels durable. It's a bit firmer than I expected, but overall I'm very satisfied with my purchase.",
    },
    {
      id: 3,
      author: 'Emily Clark',
      avatar: 'https://randomuser.me/api/portraits/women/28.jpg',
      date: '2 weeks ago',
      rating: 5,
      comment:
        "I've been looking for the perfect sofa for months and finally found it! The color is exactly as pictured and it's so comfortable. Highly recommend!",
    },
  ],
};

const ProductDetailDescriptionSection = () => {
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState(
    demoProduct.colors[0].value
  );
  const [selectedSize, setSelectedSize] = useState(demoProduct.sizes[0].value);
  const [activeTab, setActiveTab] = useState('description');

  const handleQuantityChange = (value: number) => {
    setQuantity(value);
  };

  const handleColorChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedColor(e.target.value);
  };

  const handleSizeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedSize(e.target.value);
  };

  return (
    <section className={styles.description}>
      <div className={styles.container}>
        <div className={styles.productInfo}>
          <h1 className={styles.title}>{demoProduct.title}</h1>

          <div className={styles.ratingRow}>
            <div className={styles.rating}>
              {[...Array(5)].map((_, i) => (
                <span
                  key={i}
                  className={
                    i < Math.floor(demoProduct.rating)
                      ? styles.starFilled
                      : styles.star
                  }
                >
                  <img
                    src={
                      i < Math.floor(demoProduct.rating)
                        ? '/assets/star.svg'
                        : '/assets/star-empty.svg'
                    }
                    alt={
                      i < Math.floor(demoProduct.rating)
                        ? 'Filled star'
                        : 'Empty star'
                    }
                    width='16'
                    height='16'
                  />
                </span>
              ))}
              {demoProduct.rating % 1 > 0 && (
                <span className={styles.starHalf}>
                  <img
                    src='/assets/star-half.svg'
                    alt='Half star'
                    width='16'
                    height='16'
                  />
                </span>
              )}
            </div>
            <span className={styles.reviewCount}>
              {demoProduct.reviewCount} Reviews
            </span>
          </div>

          <div className={styles.priceRow}>
            <span className={styles.price}>{demoProduct.price}</span>
            {demoProduct.originalPrice && (
              <span className={styles.originalPrice}>
                {demoProduct.originalPrice}
              </span>
            )}
            {demoProduct.discount && (
              <span className={styles.discount}>{demoProduct.discount}</span>
            )}
          </div>

          <div className={styles.options}>
            <div className={styles.optionGroup}>
              <label className={styles.optionLabel}>Color</label>
              <div className={styles.colorOptions}>
                {demoProduct.colors.map((color) => (
                  <div
                    key={color.value}
                    className={`${styles.colorOption} ${
                      selectedColor === color.value ? styles.activeColor : ''
                    }`}
                    onClick={() => setSelectedColor(color.value)}
                    style={{
                      backgroundColor:
                        color.value === 'light-gray'
                          ? '#E8E8E8'
                          : color.value === 'dark-gray'
                          ? '#6F6F6F'
                          : '#141718',
                    }}
                  />
                ))}
              </div>
            </div>

            <div className={styles.optionGroup}>
              <label className={styles.optionLabel}>Size</label>
              <div className={styles.sizeOptions}>
                {demoProduct.sizes.map((size) => (
                  <div
                    key={size.value}
                    className={`${styles.sizeOption} ${
                      selectedSize === size.value ? styles.activeSize : ''
                    }`}
                    onClick={() => setSelectedSize(size.value)}
                  >
                    {size.label}
                  </div>
                ))}
              </div>
            </div>

            <div className={styles.optionGroup}>
              <label className={styles.optionLabel}>Quantity</label>
              <QuantityCounter
                initialValue={quantity}
                onChange={handleQuantityChange}
              />
            </div>
          </div>

          <div className={styles.actions}>
            <Button size='lg' className={styles.addToCartButton}>
              Add to Cart
            </Button>
            <Button
              size='lg'
              variant='outline'
              className={styles.wishlistButton}
            >
              <img
                src='/assets/heart.svg'
                alt='Wishlist'
                width='20'
                height='20'
              />
            </Button>
          </div>

          <div className={styles.details}>
            <div className={styles.detailItem}>
              <span className={styles.detailLabel}>SKU:</span>
              <span className={styles.detailValue}>{demoProduct.sku}</span>
            </div>
            <div className={styles.detailItem}>
              <span className={styles.detailLabel}>Category:</span>
              <span className={styles.detailValue}>{demoProduct.category}</span>
            </div>
            <div className={styles.detailItem}>
              <span className={styles.detailLabel}>Tags:</span>
              <span className={styles.detailValue}>
                {demoProduct.tags.join(', ')}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.tabSection}>
        <div className={styles.container}>
          <div className={styles.tabs}>
            <button
              className={`${styles.tabButton} ${
                activeTab === 'description' ? styles.activeTab : ''
              }`}
              onClick={() => setActiveTab('description')}
            >
              Description
            </button>
            <button
              className={`${styles.tabButton} ${
                activeTab === 'additional' ? styles.activeTab : ''
              }`}
              onClick={() => setActiveTab('additional')}
            >
              Additional Information
            </button>
            <button
              className={`${styles.tabButton} ${
                activeTab === 'reviews' ? styles.activeTab : ''
              }`}
              onClick={() => setActiveTab('reviews')}
            >
              Reviews ({demoProduct.reviews.length})
            </button>
          </div>

          <div className={styles.tabContent}>
            {activeTab === 'description' && (
              <div className={styles.tabDescription}>
                <p>{demoProduct.description}</p>
                <ul className={styles.features}>
                  {demoProduct.features.map((feature, index) => (
                    <li key={index} className={styles.featureItem}>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {activeTab === 'additional' && (
              <div className={styles.tabAdditional}>
                <div className={styles.additionalInfo}>
                  <div className={styles.infoRow}>
                    <span className={styles.infoLabel}>Dimensions</span>
                    <span className={styles.infoValue}>
                      W: 85cm x H: 40cm x D: 35cm
                    </span>
                  </div>
                  <div className={styles.infoRow}>
                    <span className={styles.infoLabel}>Weight</span>
                    <span className={styles.infoValue}>55kg</span>
                  </div>
                  <div className={styles.infoRow}>
                    <span className={styles.infoLabel}>Material</span>
                    <span className={styles.infoValue}>Linen, Wood</span>
                  </div>
                  <div className={styles.infoRow}>
                    <span className={styles.infoLabel}>Available Colors</span>
                    <span className={styles.infoValue}>
                      Light Gray, Dark Gray, Black
                    </span>
                  </div>
                  <div className={styles.infoRow}>
                    <span className={styles.infoLabel}>Assembly</span>
                    <span className={styles.infoValue}>
                      Required, tools included
                    </span>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'reviews' && (
              <div className={styles.tabReviews}>
                {demoProduct.reviews.map((review) => (
                  <div key={review.id} className={styles.reviewItem}>
                    <div className={styles.reviewHeader}>
                      <div className={styles.reviewUser}>
                        <img
                          src={review.avatar}
                          alt={review.author}
                          className={styles.reviewAvatar}
                        />
                        <div className={styles.reviewAuthorInfo}>
                          <h4 className={styles.reviewAuthor}>
                            {review.author}
                          </h4>
                          <span className={styles.reviewDate}>
                            {review.date}
                          </span>
                        </div>
                      </div>
                      <div className={styles.reviewRating}>
                        {[...Array(5)].map((_, i) => (
                          <span
                            key={i}
                            className={
                              i < review.rating
                                ? styles.starFilled
                                : styles.star
                            }
                          >
                            <img
                              src={
                                i < review.rating
                                  ? '/assets/star.svg'
                                  : '/assets/star-empty.svg'
                              }
                              alt='Star'
                              width='14'
                              height='14'
                            />
                          </span>
                        ))}
                      </div>
                    </div>
                    <p className={styles.reviewComment}>{review.comment}</p>
                  </div>
                ))}

                <div className={styles.reviewAction}>
                  <Button variant='secondary'>Write a Review</Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetailDescriptionSection;
