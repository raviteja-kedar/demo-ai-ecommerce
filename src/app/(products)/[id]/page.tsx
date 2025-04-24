import {
  ProductDetailGallerySection,
  ProductDetailDescriptionSection,
  ProductDetailRelatedProductsSection,
} from '@/sections/ProductDetail';
import NotificationBar from '@/components/NotificationBar';
import NavigationBar from '@/components/NavigationBar';

export default function ProductDetailPage() {
  return (
    <>
      <NotificationBar />
      <NavigationBar />
      <main>
        <ProductDetailGallerySection />
        <ProductDetailDescriptionSection />
        <ProductDetailRelatedProductsSection />
      </main>
    </>
  );
}
