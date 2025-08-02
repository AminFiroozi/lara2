import Image from 'next/image';
import Link from 'next/link';
import type { Product } from '@/lib/definitions';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Card className="group flex h-full flex-col overflow-hidden transition-shadow hover:shadow-lg">
      <CardHeader className="p-0">
        <Link href={`/products/${product.id}`} className="block overflow-hidden">
          <Image
            src={product.images[0]}
            alt={product.name}
            width={400}
            height={400}
            className="aspect-square w-full object-cover transition-transform duration-300 group-hover:scale-105"
            data-ai-hint="elegant product"
          />
        </Link>
      </CardHeader>
      <CardContent className="flex-1 p-4">
        <CardTitle className="text-lg">
          <Link href={`/products/${product.id}`} className="hover:text-primary">
            {product.name}
          </Link>
        </CardTitle>
      </CardContent>
      <CardFooter className="flex justify-between p-4 pt-0">
        <p className="font-semibold">
          {product.price.toLocaleString('fa-IR')} تومان
        </p>
        {product.inventory > 0 ? (
          <Badge variant="secondary">موجود</Badge>
        ) : (
          <Badge variant="outline">ناموجود</Badge>
        )}
      </CardFooter>
    </Card>
  );
}
