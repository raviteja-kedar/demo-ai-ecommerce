import styles from './ProductDetailRelatedProductsSection.module.scss';
import ProductCard from '@/components/ProductCard/ProductCard';

// Demo related products
const relatedProducts = [
  {
    image:
      'https://images.unsplash.com/photo-1550581190-9c1c48d21d6c?auto=format&fit=crop&w=400&q=80',
    title: 'Accent Chair',
    price: '$249.00',
    originalPrice: '$349.00',
    badge: 'NEW',
    saleBadge: '-30%',
    rating: 5,
  },
  {
    image:
      'https://images.unsplash.com/photo-1592078615290-033ee584e267?auto=format&fit=crop&w=400&q=80',
    title: 'Black Coffee Table',
    price: '$159.00',
    badge: 'NEW',
    rating: 4,
  },
  {
    image:
      'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=400&q=80',
    title: 'Table Lamp',
    price: '$59.99',
    rating: 5,
  },
  {
    image:
      'https://images.unsplash.com/photo-1513708847802-f2fae5f6e8b4?auto=format&fit=crop&w=400&q=80',
    title: 'Modern Loveseat',
    price: '$499.00',
    originalPrice: '$599.00',
    saleBadge: '-15%',
    rating: 4,
  },
];

const ProductDetailRelatedProductsSection = () => {
  return (
    <section className={styles.related}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Related Products</h2>
        <div className={styles.grid}>
          {relatedProducts.map((product, idx) => (
            <ProductCard key={idx} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductDetailRelatedProductsSection;
