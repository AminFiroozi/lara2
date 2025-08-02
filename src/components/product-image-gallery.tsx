'use client';

import { useState } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { Card } from '@/components/ui/card';

interface ProductImageGalleryProps {
  images: string[];
  productName: string;
}

export function ProductImageGallery({ images, productName }: ProductImageGalleryProps) {
  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <div className="flex flex-col gap-4">
      <Card className="overflow-hidden">
        <Image
          src={selectedImage}
          alt={`تصویر اصلی ${productName}`}
          width={600}
          height={600}
          className="aspect-square w-full object-cover"
        />
      </Card>
      {images.length > 1 && (
        <div className="grid grid-cols-5 gap-2">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => setSelectedImage(image)}
              className={cn(
                'overflow-hidden rounded-md border-2 transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
                selectedImage === image ? 'border-primary' : 'border-transparent'
              )}
            >
              <Image
                src={image}
                alt={`تصویر کوچک ${index + 1} از ${productName}`}
                width={100}
                height={100}
                className="aspect-square w-full object-cover"
              />
              <span className="sr-only">مشاهده تصویر {index + 1}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
