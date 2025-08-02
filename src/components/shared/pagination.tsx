'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import {
  Pagination as PaginationContainer,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
  PaginationEllipsis,
} from '@/components/ui/pagination';
import { cn } from '@/lib/utils';
import { ChevronRight, ChevronLeft } from 'lucide-react';

export function Pagination({ totalPages }: { totalPages: number }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get('page')) || 1;

  const createPageURL = (pageNumber: number | string) => {
    const params = new URLSearchParams(searchParams);
    params.set('page', pageNumber.toString());
    return `${pathname}?${params.toString()}`;
  };

  const renderPaginationItems = () => {
    const pageNumbers = [];
    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      pageNumbers.push(1);
      if (currentPage > 3) {
        pageNumbers.push('...');
      }
      if (currentPage > 2) {
        pageNumbers.push(currentPage - 1);
      }
      if (currentPage !== 1 && currentPage !== totalPages) {
        pageNumbers.push(currentPage);
      }
      if (currentPage < totalPages - 1) {
        pageNumbers.push(currentPage + 1);
      }
      if (currentPage < totalPages - 2) {
        pageNumbers.push('...');
      }
      pageNumbers.push(totalPages);
    }
    
    // Remove duplicates that might occur with the logic
    const uniquePageNumbers = [...new Set(pageNumbers)];

    return uniquePageNumbers.map((page, index) => (
      <PaginationItem key={`${page}-${index}`}>
        {typeof page === 'number' ? (
          <PaginationLink
            href={createPageURL(page)}
            isActive={currentPage === page}
          >
            {page}
          </PaginationLink>
        ) : (
          <PaginationEllipsis />
        )}
      </PaginationItem>
    ));
  };

  if (totalPages <= 1) return null;

  return (
    <PaginationContainer>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            href={createPageURL(currentPage - 1)}
            className={cn({ 'pointer-events-none opacity-50': currentPage <= 1 })}
          >
            <ChevronRight className="h-4 w-4" />
            <span className="sr-only">قبلی</span>
          </PaginationPrevious>
        </PaginationItem>

        {renderPaginationItems()}

        <PaginationItem>
          <PaginationNext
            href={createPageURL(currentPage + 1)}
            className={cn({ 'pointer-events-none opacity-50': currentPage >= totalPages })}
          >
            <ChevronLeft className="h-4 w-4" />
             <span className="sr-only">بعدی</span>
          </PaginationNext>
        </PaginationItem>
      </PaginationContent>
    </PaginationContainer>
  );
}