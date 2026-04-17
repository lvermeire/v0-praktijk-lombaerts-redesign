import { MapPin, Phone, Clock } from "lucide-react";
import Link from "next/link";

export function Contact() {
  return (
    <section id="contact" className="py-20 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20">
          <div>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-primary mb-4">
              Contact
            </h2>
            <p className="text-muted-foreground max-w-lg mb-10 leading-relaxed">
              Onze praktijk bevindt zich in het hart van Antwerpen. 
              Neem gerust contact op voor vragen of om een afspraak te maken.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium text-primary">Adres</p>
                  <p className="text-muted-foreground">
                    Nationalestraat 100
                    <br />
                    2000 Antwerpen
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium text-primary">Telefoon</p>
                  {/* TODO: replace with real phone numbers */}
                  <p className="text-muted-foreground">
                    <Link href="tel:+3234800000" className="hover:text-accent transition-colors">
                      +32 3 480 00 00
                    </Link>
                  </p>
                  <p className="text-muted-foreground">
                    <Link href="tel:+32475000000" className="hover:text-accent transition-colors">
                      +32 475 00 00 00
                    </Link>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Clock className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium text-primary">Openingsuren</p>
                  <p className="text-muted-foreground">
                    Maandag – Vrijdag: 8:00 – 19:00
                    <br />
                    Zaterdag: Op afspraak
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div id="afspraak" className="flex flex-col justify-center">
            <div className="bg-primary p-8 md:p-12">
              <h3 className="font-serif text-2xl md:text-3xl text-primary-foreground mb-4">
                Maak een afspraak
              </h3>
              <p className="text-primary-foreground/70 mb-8 leading-relaxed">
                Bel ons direct of stuur een bericht. 
                Wij contacteren u zo snel mogelijk.
              </p>
              
              <div className="space-y-4">
                {/* TODO: replace with real phone numbers */}
                <Link
                  href="tel:+3234800000"
                  className="flex items-center justify-center gap-2 w-full bg-accent text-accent-foreground py-4 text-center hover:bg-accent/90 transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  <span>Bel nu</span>
                </Link>
                
                <Link 
                  href="mailto:info@praktijklombaerts.be"
                  className="flex items-center justify-center w-full border border-primary-foreground/30 text-primary-foreground py-4 text-center hover:bg-primary-foreground/10 transition-colors"
                >
                  Stuur een e-mail
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
