import Link from 'next/link';
import { Logo } from '@/components/logo';
import { SOCIAL_LINKS } from '@/lib/constants';
import { Button } from '@/components/ui/button';

export default function Footer() {
  return (
    <footer className="bg-secondary/50">
      <div className="container py-8">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <Logo />
          <div className="flex gap-2">
            {SOCIAL_LINKS.map((social) => (
              <Button key={social.href} variant="ghost" size="icon" asChild>
                <Link href={social.href}>
                  <social.icon className="h-5 w-5" />
                  <span className="sr-only">{social.href}</span>
                </Link>
              </Button>
            ))}
          </div>
        </div>
        <div className="mt-6 flex flex-col items-center justify-between border-t pt-6 text-sm text-muted-foreground md:flex-row">
          <p>&copy; {new Date().getFullYear()} ستاره. تمامی حقوق محفوظ است.</p>
          <Link href="/admin/login" className="hover:text-primary transition-colors">
            ورود مدیر
          </Link>
        </div>
      </div>
    </footer>
  );
}
