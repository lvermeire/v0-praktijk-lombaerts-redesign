import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <Link href="/" className="font-serif text-xl tracking-wide">
              Praktijk Lombaerts
            </Link>
            <p className="text-primary-foreground/60 text-sm mt-2">
              Kinesitherapie & Osteopathie sinds 1986
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-4 md:gap-8 text-sm">
            <Link 
              href="#behandelingen" 
              className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
            >
              Behandelingen
            </Link>
            <Link 
              href="#team" 
              className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
            >
              Team
            </Link>
            <Link 
              href="#contact" 
              className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
            >
              Contact
            </Link>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-primary-foreground/20">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-sm text-primary-foreground/50">
            <p>© {new Date().getFullYear()} Praktijk Lombaerts. Alle rechten voorbehouden.</p>
            <div className="flex gap-6">
              {/* TODO: link to real privacy/cookie policy pages */}
              <Link href="#" className="hover:text-primary-foreground transition-colors">
                Privacybeleid
              </Link>
              <Link href="#" className="hover:text-primary-foreground transition-colors">
                Cookiebeleid
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
