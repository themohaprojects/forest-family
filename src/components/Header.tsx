'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Phone, TreePine } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { clsx } from 'clsx';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navigation = [
    { name: 'Accueil', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'À Propos', href: '/a-propos' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (path: string) => pathname === path;

  return (
    <header className="bg-white/90 backdrop-blur-md fixed w-full z-50 shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="bg-primary p-2 rounded-lg group-hover:bg-primary-light transition-colors">
              <TreePine className="h-6 w-6 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-xl tracking-tight text-primary">FOREST FAMILY</span>
              <span className="text-xs text-secondary font-medium tracking-wide">EXPERTISE FORESTIÈRE</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={clsx(
                  'text-sm font-semibold transition-colors duration-200',
                  isActive(item.href)
                    ? 'text-primary'
                    : 'text-gray-600 hover:text-primary'
                )}
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/devis"
              className="bg-primary text-white px-5 py-2.5 rounded-full font-semibold text-sm hover:bg-primary-light transition-all shadow-md hover:shadow-lg flex items-center gap-2"
            >
              Demander un devis
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-primary p-2"
              aria-label="Menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 absolute w-full shadow-lg">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={clsx(
                  'block px-4 py-3 rounded-md text-base font-medium',
                  isActive(item.href)
                    ? 'bg-accent/30 text-primary'
                    : 'text-gray-600 hover:bg-gray-50 hover:text-primary'
                )}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-4 px-4">
              <Link
                href="/devis"
                onClick={() => setIsOpen(false)}
                className="w-full bg-primary text-white text-center py-3 rounded-lg font-semibold block hover:bg-primary-light transition-colors"
              >
                Demander un devis
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
