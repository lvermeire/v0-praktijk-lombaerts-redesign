"use client";

import { useState } from "react";
import { ChevronRight } from "lucide-react";

interface Treatment {
  id: string;
  title: string;
  description: string;
}

const treatments: Treatment[] = [
  {
    id: "osteopathie",
    title: "Osteopathie",
    description: "Holistische benadering die het lichaam als geheel behandelt. Door zachte manuele technieken worden spanningen vrijgemaakt en wordt het zelfherstellend vermogen van het lichaam gestimuleerd. Effectief bij rugpijn, hoofdpijn, spijsverteringsproblemen en chronische klachten.",
  },
  {
    id: "kinesitherapie",
    title: "Kinesitherapie",
    description: "Gerichte bewegingstherapie en manuele technieken voor het behandelen van blessures, chronische pijn en functionele beperkingen. Revalidatie na operaties, sportblessures, en preventie van terugkerende klachten.",
  },
  {
    id: "dry-needling",
    title: "Dry Needling",
    description: "Precieze techniek waarbij dunne naalden in triggerpoints worden geplaatst om diepe spierspanningen op te heffen. Bijzonder effectief bij hardnekkige spierpijn, spanningshoofdpijn en uitstralende pijn.",
  },
  {
    id: "endermologie",
    title: "Endermologie",
    description: "Niet-invasieve techniek die het bindweefsel stimuleert door mechanische massage. Verbetert de bloedcirculatie, vermindert cellulitis en ondersteunt het herstel van littekenweefsel.",
  },
];

export function Treatments() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  return (
    <section id="behandelingen" className="py-20 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-primary mb-4">
          Behandelingen
        </h2>
        <p className="text-muted-foreground max-w-2xl mb-12 md:mb-16 leading-relaxed">
          Deskundige zorg, afgestemd op uw specifieke klachten en lichaam.
        </p>

        {/* Horizontal scroll on mobile, grid on desktop */}
        <div className="flex md:grid md:grid-cols-2 gap-4 md:gap-6 overflow-x-auto pb-4 md:pb-0 -mx-6 px-6 md:mx-0 md:px-0 snap-x snap-mandatory md:snap-none">
          {treatments.map((treatment) => (
            <div
              key={treatment.id}
              className="flex-shrink-0 w-[85vw] md:w-auto snap-center"
            >
              <button
                onClick={() => setExpandedId(expandedId === treatment.id ? null : treatment.id)}
                className="w-full text-left group"
              >
                <div 
                  className={`border border-border p-6 md:p-8 transition-all duration-300 ${
                    expandedId === treatment.id 
                      ? "bg-primary text-primary-foreground" 
                      : "bg-card hover:border-highlight"
                  }`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-serif text-2xl md:text-3xl tracking-tight">
                      {treatment.title}
                    </h3>
                    <ChevronRight 
                      className={`w-6 h-6 transition-transform duration-300 ${
                        expandedId === treatment.id ? "rotate-90" : ""
                      }`} 
                    />
                  </div>
                  
                  <div 
                    className={`overflow-hidden transition-all duration-300 ${
                      expandedId === treatment.id ? "max-h-48 opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="w-12 h-0.5 bg-accent mb-4" />
                    <p className={`leading-relaxed text-sm ${
                      expandedId === treatment.id ? "text-primary-foreground/90" : "text-muted-foreground"
                    }`}>
                      {treatment.description}
                    </p>
                  </div>
                </div>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
