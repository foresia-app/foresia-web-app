import Link from 'next/link';
import { Button } from './ui/button';
import { Footer } from './landing-page';

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="container z-40 bg-background">
        <div className="flex h-20 items-center justify-between py-6">
          <div className="flex gap-6 md:gap-10">
            <Link href="/" className="flex items-center space-x-2">
              <span className="font-bold text-lg">Foresia</span>
            </Link>
          </div>
          <nav>
            <Button asChild>
                <Link href="/login">Inloggen</Link>
            </Button>
          </nav>
        </div>
      </header>
      <main className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  )
} 