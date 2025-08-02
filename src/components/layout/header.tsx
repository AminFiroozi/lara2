'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu } from 'lucide-react';
import { cn } from '@/lib/utils';
import { HEADER_LINKS } from '@/lib/constants';
import { Logo } from '@/components/logo';
import { DarkModeToggle } from '@/components/dark-mode-toggle';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="me-auto flex items-center gap-4 md:hidden">
            <Sheet>
            <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">باز کردن منو</span>
                </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px]">
                <Logo className="mb-8" />
                <nav className="flex flex-col gap-4">
                {HEADER_LINKS.map((link) => (
                    <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                        'text-lg font-medium',
                        pathname === link.href ? 'text-primary' : 'text-foreground/60'
                    )}
                    >
                    {link.label}
                    </Link>
                ))}
                </nav>
            </SheetContent>
            </Sheet>
        </div>

        <Logo className="hidden md:flex" />

        <nav className="hidden items-center gap-6 text-sm font-medium md:flex md:flex-1 md:justify-center">
          {HEADER_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                'transition-colors hover:text-foreground/80',
                pathname === link.href ? 'text-foreground' : 'text-foreground/60'
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center">
          <DarkModeToggle />
        </div>
      </div>
    </header>
  );
}
