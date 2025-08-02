'use client';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import type { Product, Category } from '@/lib/definitions';

interface ProductDialogProps {
  product?: Product | null;
  categories: Category[];
  children: React.ReactNode;
}

export function ProductDialog({ product, categories, children }: ProductDialogProps) {
  const title = product ? 'ویرایش محصول' : 'افزودن محصول جدید';
  const description = product
    ? 'مشخصات محصول را ویرایش کنید.'
    : 'یک محصول جدید به فروشگاه خود اضافه کنید.';

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              نام محصول
            </Label>
            <Input id="name" defaultValue={product?.name || ''} className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="description" className="text-right">
              توضیحات
            </Label>
            <Textarea
              id="description"
              defaultValue={product?.description || ''}
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="price" className="text-right">
              قیمت (تومان)
            </Label>
            <Input
              id="price"
              type="number"
              defaultValue={product?.price || ''}
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="inventory" className="text-right">
              موجودی
            </Label>
            <Input
              id="inventory"
              type="number"
              defaultValue={product?.inventory || ''}
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="category" className="text-right">
              دسته‌بندی
            </Label>
            <Select defaultValue={product?.categoryId || ''}>
              <SelectTrigger className="col-span-3">
                <SelectValue placeholder="انتخاب دسته‌بندی..." />
              </SelectTrigger>
              <SelectContent>
                {categories.map((category) => (
                  <SelectItem key={category.id} value={category.id}>
                    {category.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="images" className="text-right">
              تصاویر
            </Label>
            <Textarea
                id="images"
                defaultValue={product?.images.join('\n') || ''}
                className="col-span-3"
                placeholder="هر آدرس تصویر را در یک خط جدید وارد کنید"
            />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">ذخیره</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
