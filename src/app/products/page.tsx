
'use client';

import { Suspense } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { products, categories } from '@/lib/mock-data';
import { ProductCard } from '@/components/product-card';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Search } from 'lucide-react';
import { Pagination as PaginationComponent } from '@/components/shared/pagination';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { unstable_noStore as noStore } from 'next/cache';

export default function ProductsPage() {
  noStore();
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const query = searchParams.get('q') || '';
  const categoryId = searchParams.get('category') || 'all';
  const currentPage = Number(searchParams.get('page')) || 1;
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

  const handleSearch = (term: string) => {
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set('q', term);
    } else {
      params.delete('q');
    }
    params.set('page', '1');
    router.replace(`${pathname}?${params.toString()}`);
  };

  const handleCategoryChange = (value: string) => {
    const params = new URLSearchParams(searchParams);
    if (value !== 'all') {
      params.set('category', value);
    } else {
      params.delete('category');
    }
    params.set('page', '1');
    router.replace(`${pathname}?${params.toString()}`);
  };

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
                onChange={(e) => handleSearch(e.target.value)}
              />
            </div>
            <Select
              defaultValue={categoryId}
              onValueChange={handleCategoryChange}
            >
              <SelectTrigger className="w-full md:w-[200px]">
                <SelectValue placeholder="انتخاب دسته‌بندی..." />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">همه دسته‌بندی‌ها</SelectItem>
                {categories.map((category) => (
                  <SelectItem key={category.id} value={category.id}>
                    {category.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <Suspense
            fallback={
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                ...در حال بارگذاری
              </div>
            }
          >
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {paginatedProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </Suspense>

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
