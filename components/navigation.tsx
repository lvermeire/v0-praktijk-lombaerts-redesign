"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="font-serif text-xl tracking-wide text-primary">
            Praktijk Lombaerts
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link 
              href="#behandelingen" 
              className="text-sm tracking-wide text-primary/80 hover:text-primary transition-colors"
            >
              Behandelingen
            </Link>
            <Link 
              href="#team" 
              className="text-sm tracking-wide text-primary/80 hover:text-primary transition-colors"
            >
              Team
            </Link>
            <Link 
              href="#contact" 
              className="text-sm tracking-wide text-primary/80 hover:text-primary transition-colors"
            >
              Contact
            </Link>
            <Link 
              href="#afspraak" 
              className="bg-accent text-accent-foreground px-5 py-2.5 text-sm tracking-wide hover:bg-accent/90 transition-colors"
            >
              Afspraak maken
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-primary"
            aria-label="Menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pt-6 pb-4 space-y-4">
            <Link 
              href="#behandelingen" 
              onClick={() => setIsOpen(false)}
              className="block text-sm tracking-wide text-primary/80 hover:text-primary transition-colors"
            >
              Behandelingen
            </Link>
            <Link 
              href="#team" 
              onClick={() => setIsOpen(false)}
              className="block text-sm tracking-wide text-primary/80 hover:text-primary transition-colors"
            >
              Team
            </Link>
            <Link 
              href="#contact" 
              onClick={() => setIsOpen(false)}
              className="block text-sm tracking-wide text-primary/80 hover:text-primary transition-colors"
            >
              Contact
            </Link>
            <Link 
              href="#afspraak" 
              onClick={() => setIsOpen(false)}
              className="inline-block bg-accent text-accent-foreground px-5 py-2.5 text-sm tracking-wide hover:bg-accent/90 transition-colors"
            >
              Afspraak maken
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
