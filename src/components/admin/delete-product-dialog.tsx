'use client';

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { Button } from '@/components/ui/button';
import type { Product } from '@/lib/definitions';

interface DeleteProductDialogProps {
  product: Product;
  children: React.ReactNode;
}

export function DeleteProductDialog({ product, children }: DeleteProductDialogProps) {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>{children}</AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>آیا از حذف محصول مطمئن هستید؟</AlertDialogTitle>
          <AlertDialogDescription>
            این عمل غیرقابل بازگشت است. محصول "{product.name}" برای همیشه حذف
            خواهد شد.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>انصراف</AlertDialogCancel>
          <AlertDialogAction asChild>
            <Button variant="destructive">حذف</Button>
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
