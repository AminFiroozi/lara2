import { Star } from 'lucide-react';
import { cn } from '@/lib/utils';

export function Logo({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <div className="flex items-center">
        <Star className="h-4 w-4 text-primary" />
        <Star className="h-6 w-6 text-primary" />
        <Star className="h-4 w-4 text-primary" />
      </div>
      <span className="text-xl font-bold font-headline">ستاره</span>
    </div>
  );
}
