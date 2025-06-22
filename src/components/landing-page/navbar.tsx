import { Button } from "@/components/ui/button";
import { GithubIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const Navbar = () => {
  return (
    <header className="py-4 bg-[#f0faf6]">
      <div className="container mx-auto flex justify-between items-center">
      <Link href="/">
        <div className="flex items-center space-x-2">
          <Image
            src="/logo.png"
            alt="Foresia Logo"
            width={32}
            height={32}
            className="rounded-md"
          />
          <span className="text-xl font-bold">Foresia.app</span>
        </div>
        </Link>
        <nav className="hidden md:flex items-center space-x-8">
          <Link href="/features" className="text-gray-600 hover:text-gray-900">
            features
          </Link>
          <a
            href="https://demo.foresia.app"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-900"
          >
            Demo
          </a>
          <Link href="/about" className="text-gray-600 hover:text-gray-900">
            Over Ons
          </Link>
          <Link href="#" className="text-gray-600 hover:text-gray-900">
            Documentatie
          </Link>
        </nav>
        <div className="flex items-center space-x-4">
          <Button variant="outline" asChild className="bg-white">
            <a
              href="https://github.com/foresia-app"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center"
            >
              <GithubIcon className="mr-2 h-4 w-4" />
              GitHub
            </a>
          </Button>
          <Button className="bg-green-600 hover:bg-green-700 text-white">
            <Link href="/login">
              Inloggen
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
}; 