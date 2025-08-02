import { categories } from '@/lib/mock-data';
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
import { MoreHorizontal } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { CategoryDialog } from '@/components/admin/category-dialog';

export default function AdminCategoriesPage() {
  return (
    <div className='w-full'>
      <PageHeader
        title="مدیریت دسته‌بندی‌ها"
        description="دسته‌بندی‌های محصولات خود را مدیریت کنید."
      >
        <CategoryDialog>
          <Button>افزودن دسته‌بندی</Button>
        </CategoryDialog>
      </PageHeader>
      <div className="rounded-lg border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>نام دسته‌بندی</TableHead>
              <TableHead className="w-[100px] text-left">
                <span className="sr-only">عملیات</span>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {categories.map((category) => (
              <TableRow key={category.id}>
                <TableCell className="font-medium">{category.name}</TableCell>
                <TableCell className="text-left">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" className="h-8 w-8 p-0">
                        <span className="sr-only">باز کردن منو</span>
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="start">
                      <CategoryDialog category={category}>
                        <DropdownMenuItem onSelect={(e) => e.preventDefault()}>
                          ویرایش
                        </DropdownMenuItem>
                      </CategoryDialog>
                      <DropdownMenuItem className="text-destructive">
                        حذف
                      </DropdownMenuItem>
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
