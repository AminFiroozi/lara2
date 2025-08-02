import { notFound } from 'next/navigation';
import { products, categories } from '@/lib/mock-data';
import { ProductImageGallery } from '@/components/product-image-gallery';
import { Badge } from '@/components/ui/badge';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';

export default function ProductDetailPage({
  params,
}: {
  params: { productId: string };
}) {
  const product = products.find((p) => p.id === params.productId);

  if (!product) {
    notFound();
  }

  const category = categories.find((c) => c.id === product.categoryId);

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <div className="container py-10">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12">
            <div>
              <ProductImageGallery images={product.images} productName={product.name} />
            </div>
            <div className="flex flex-col">
              {category && (
                <p className="font-semibold text-primary">{category.name}</p>
              )}
              <h1 className="mt-2 font-headline text-3xl font-bold md:text-4xl">
                {product.name}
              </h1>
              <div className="mt-4 flex items-center gap-4">
                <p className="text-2xl font-bold">
                  {product.price.toLocaleString('fa-IR')} تومان
                </p>
                {product.inventory > 0 ? (
                  <Badge variant="default" className="text-sm">
                    موجود
                  </Badge>
                ) : (
                  <Badge variant="destructive" className="text-sm">
                    ناموجود
                  </Badge>
                )}
              </div>
              <div className="prose prose-lg mt-6 text-muted-foreground max-w-none">
                <p>{product.description}</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
