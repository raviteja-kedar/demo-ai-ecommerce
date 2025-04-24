import { ShopProductGridSection, ShopFiltersSection } from '@/sections/Shop';
import NotificationBar from '@/components/NotificationBar';
import NavigationBar from '@/components/NavigationBar';

import styles from './page.module.scss';

export default function ShopPage() {
  return (
    <>
      <NotificationBar />
      <NavigationBar />
      <main className={styles.shopPageContainer}>
        <section className={styles.headerSection}>
          <div className={styles.breadcrumbs}>
            <span className={styles.homeLink}>Home</span> /
            <span className={styles.activeLink}>Shop</span>
          </div>
          <h1 className={styles.pageTitle}>Shop Page</h1>
          <p className={styles.pageSubtitle}>
            Let&apos;s design the place you always imagined.
          </p>
        </section>
        <div className={styles.contentRow}>
          <ShopFiltersSection />
          <ShopProductGridSection />
        </div>
      </main>
    </>
  );
}
