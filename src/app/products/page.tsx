import { Suspense } from 'react';
import { products, categories } from '@/lib/mock-data';
import { ProductCard } from '@/components/product-card';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';
import { Pagination as PaginationComponent } from '@/components/shared/pagination';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { CategoryCombobox } from '@/components/category-combobox';

export default function ProductsPage({
  searchParams,
}: {
  searchParams?: {
    q?: string;
    category?: string;
    page?: string;
  };
}) {
  const query = searchParams?.q || '';
  const categoryId = searchParams?.category || 'all';
  const currentPage = Number(searchParams?.page) || 1;
  const itemsPerPage = 8;

  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      categoryId === 'all' || !categoryId
        ? true
        : product.categoryId === categoryId;
    const matchesQuery = product.name
      .toLowerCase()
      .includes(query.toLowerCase());
    return matchesCategory && matchesQuery;
  });

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <div className="container py-10">
          <div className="mb-8 text-center">
            <h1 className="font-headline text-4xl font-bold">تمام محصولات</h1>
            <p className="mt-2 text-muted-foreground">
              کلکسیون بی‌نظیر ما را کاوش کنید
            </p>
          </div>

          <div className="mb-8 flex flex-col gap-4 md:flex-row">
            <div className="relative flex-1">
              <Search className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                type="search"
                placeholder="جستجوی محصول..."
                className="w-full ps-10"
                defaultValue={query}
              />
            </div>
            <CategoryCombobox defaultValue={categoryId} />
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <Suspense fallback={<div>در حال بارگذاری...</div>}>
              {paginatedProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </Suspense>
          </div>
          {paginatedProducts.length === 0 && (
            <div className="col-span-full py-10 text-center">
              <p className="text-muted-foreground">محصولی یافت نشد.</p>
            </div>
          )}

          <div className="mt-10 flex justify-center">
            <PaginationComponent totalPages={totalPages} />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
