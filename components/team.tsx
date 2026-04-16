import Image from "next/image";

interface TeamMember {
  name: string;
  role: string;
  since: string;
  description: string;
  image: string;
}

const team: TeamMember[] = [
  {
    name: "Yves Lombaerts",
    role: "Kinesitherapeut & Osteopaat",
    since: "Sinds 1986",
    description: "Meer dan 35 jaar ervaring in manuele therapie. Gespecialiseerd in osteopathie, chronische pijnklachten en holistische behandelmethoden. Zijn ervaring en intuïtie maken het verschil bij complexe gevallen.",
    image: "/images/yves-portrait.jpg",
  },
  {
    name: "Sebastien Lombaerts",
    role: "Kinesitherapeut & Osteopaat",
    description: "Internationale opleiding met focus op evidence-based behandelmethoden. Expertise in sportrevalidatie, dry needling en moderne manuele technieken. Combineert wetenschappelijke inzichten met hands-on vakmanschap.",
    since: "Nieuwe generatie",
    image: "/images/sebastien-portrait.jpg",
  },
];

export function Team() {
  return (
    <section id="team" className="py-20 md:py-32 bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl mb-4">
          Het team
        </h2>
        <p className="text-primary-foreground/70 max-w-2xl mb-12 md:mb-16 leading-relaxed">
          Twee generaties, één passie: vakmanschap in manuele therapie.
        </p>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {team.map((member) => (
            <div key={member.name} className="group">
              <div className="relative aspect-[4/5] mb-6 overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-500"
                />
              </div>
              
              <div className="space-y-3">
                <div className="flex items-baseline justify-between">
                  <h3 className="font-serif text-2xl md:text-3xl">{member.name}</h3>
                  <span className="text-highlight text-sm">{member.since}</span>
                </div>
                <p className="text-accent text-sm tracking-wide">{member.role}</p>
                <div className="w-12 h-0.5 bg-highlight" />
                <p className="text-primary-foreground/70 leading-relaxed text-sm md:text-base">
                  {member.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
