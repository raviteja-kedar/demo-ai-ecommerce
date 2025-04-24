import styles from './ShopProductGridSection.module.scss';
import ProductCard from '@/components/ProductCard/ProductCard';

const demoProducts = [
  {
    image:
      'https://images.unsplash.com/photo-1513708847802-f2fae5f6e8b4?auto=format&fit=crop&w=400&q=80',
    title: 'Loveseat Sofa',
    price: '$199.00',
    originalPrice: '$400.00',
    badge: 'NEW',
    saleBadge: '-50%',
    rating: 5,
  },
  {
    image:
      'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=400&q=80',
    title: 'Luxury Sofa',
    price: '$299.00',
    originalPrice: '$500.00',
    badge: 'NEW',
    saleBadge: '-50%',
    rating: 5,
  },
  {
    image:
      'https://images.unsplash.com/photo-1606306823929-ec120b8c9ebd?auto=format&fit=crop&w=400&q=80',
    title: 'Table Lamp',
    price: '$19.00',
    badge: 'NEW',
    saleBadge: '-50%',
    rating: 5,
  },
  {
    image:
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=400&q=80',
    title: 'White Drawer Unit',
    price: '$89.99',
    badge: 'NEW',
    saleBadge: '-50%',
    rating: 5,
  },
  {
    image:
      'https://images.unsplash.com/photo-1592078615290-033ee584e267?auto=format&fit=crop&w=400&q=80',
    title: 'Black Tray Table',
    price: '$19.99',
    badge: 'NEW',
    saleBadge: '-50%',
    rating: 5,
  },
  {
    image:
      'https://images.unsplash.com/photo-1550581190-9c1c48d21d6c?auto=format&fit=crop&w=400&q=80',
    title: 'Lamp',
    price: '$39.00',
    badge: 'NEW',
    saleBadge: '-50%',
    rating: 5,
  },
  {
    image:
      'https://images.unsplash.com/photo-1589196726804-86067a67852b?auto=format&fit=crop&w=400&q=80',
    title: 'Light Beige Pillow',
    price: '$3.99',
    badge: 'NEW',
    saleBadge: '-50%',
    rating: 5,
  },
  {
    image:
      'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=400&q=80',
    title: 'Table Lamp',
    price: '$39.99',
    badge: 'NEW',
    saleBadge: '-50%',
    rating: 5,
  },
  {
    image:
      'https://images.unsplash.com/photo-1600166898405-da9535204843?auto=format&fit=crop&w=400&q=80',
    title: 'Bamboo Basket',
    price: '$9.99',
    badge: 'NEW',
    saleBadge: '-50%',
    rating: 5,
  },
];

const ShopProductGridSection = () => {
  return (
    <section className={styles.gridSection}>
      <div className={styles.toolbarSection}>
        <h2 className={styles.categoryTitle}>Living Room</h2>
        <div className={styles.toolbarControls}>
          <div className={styles.sortDropdown}>
            <span className={styles.sortText}>Sort by</span>
            <img src='/assets/chevron-down.svg' alt='Sort dropdown' />
          </div>
          <div className={styles.viewControls}>
            <div className={`${styles.viewControl} ${styles.active}`}>
              <img src='/assets/view-column.svg' alt='Column view' />
            </div>
            <div className={styles.viewControl}>
              <img src='/assets/view-grid-2.svg' alt='Grid view' />
            </div>
            <div className={styles.viewControl}>
              <img src='/assets/view-grid-3.svg' alt='Grid view 3' />
            </div>
            <div className={styles.viewControl}>
              <img src='/assets/view-grid-4.svg' alt='Grid view 4' />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.grid}>
        {demoProducts.map((product, idx) => (
          <ProductCard key={idx} {...product} />
        ))}
      </div>
      <div className={styles.showMoreContainer}>
        <button className={styles.showMoreButton}>Show more</button>
      </div>
    </section>
  );
};

export default ShopProductGridSection;
