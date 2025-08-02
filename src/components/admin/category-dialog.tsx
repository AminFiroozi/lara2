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
import type { Category } from '@/lib/definitions';

interface CategoryDialogProps {
  category?: Category | null;
  children: React.ReactNode;
}

export function CategoryDialog({ category, children }: CategoryDialogProps) {
  const title = category ? 'ویرایش دسته‌بندی' : 'افزودن دسته‌بندی جدید';
  const description = category
    ? 'نام دسته‌بندی را ویرایش کنید.'
    : 'یک دسته‌بندی جدید به لیست خود اضافه کنید.';

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              نام
            </Label>
            <Input id="name" defaultValue={category?.name || ''} className="col-span-3" />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">ذخیره تغییرات</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
