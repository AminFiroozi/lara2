import { products, categories } from '@/lib/mock-data';
import { PageHeader } from '@/components/admin/page-header';
import { Button } from '@/components/ui/button';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { MoreHorizontal } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { ProductDialog } from '@/components/admin/product-dialog';
import { DeleteProductDialog } from '@/components/admin/delete-product-dialog';

export default function AdminProductsPage() {
  const getCategoryName = (categoryId: string) => {
    return categories.find((c) => c.id === categoryId)?.name || '-';
  };

  return (
    <div>
      <PageHeader
        title="مدیریت محصولات"
        description="محصولات خود را اضافه، ویرایش یا حذف کنید."
      >
        <ProductDialog categories={categories}>
          <Button>افزودن محصول جدید</Button>
        </ProductDialog>
      </PageHeader>
      <div className="rounded-lg border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>نام محصول</TableHead>
              <TableHead>دسته‌بندی</TableHead>
              <TableHead>قیمت</TableHead>
              <TableHead>موجودی</TableHead>
              <TableHead className="w-[100px] text-right">
                <span className="sr-only">عملیات</span>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {products.map((product) => (
              <TableRow key={product.id}>
                <TableCell className="font-medium">{product.name}</TableCell>
                <TableCell>{getCategoryName(product.categoryId)}</TableCell>
                <TableCell>
                  {product.price.toLocaleString('fa-IR')} تومان
                </TableCell>
                <TableCell>
                  {product.inventory > 0 ? (
                    <Badge variant="secondary">{product.inventory}</Badge>
                  ) : (
                    <Badge variant="outline">ناموجود</Badge>
                  )}
                </TableCell>
                <TableCell className="text-right">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" className="h-8 w-8 p-0">
                        <span className="sr-only">باز کردن منو</span>
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="start">
                      <ProductDialog product={product} categories={categories}>
                        <DropdownMenuItem onSelect={(e) => e.preventDefault()}>
                          ویرایش
                        </DropdownMenuItem>
                      </ProductDialog>
                      <DeleteProductDialog product={product}>
                        <DropdownMenuItem
                          onSelect={(e) => e.preventDefault()}
                          className="text-destructive"
                        >
                          حذف
                        </DropdownMenuItem>
                      </DeleteProductDialog>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
