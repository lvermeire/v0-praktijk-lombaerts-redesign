import Image from "next/image";

export function Hero() {
  return (
    <section className="relative h-screen w-full">
      {/* Full-bleed background image */}
      <Image
        src="/images/hero-hands.jpg"
        alt="Therapeutische handen tijdens behandeling"
        fill
        className="object-cover"
        priority
      />
      
      {/* Dark overlay for text legibility */}
      <div className="absolute inset-0 bg-primary/50" />
      
      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-end pb-16 md:pb-24 px-6 md:px-12 lg:px-20">
        <div className="max-w-4xl">
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-[#F4EDE1] leading-[1.1] tracking-tight text-balance">
            Praktijk
            <br />
            Lombaerts
          </h1>
          <div className="mt-6 w-24 h-1 bg-accent" />
        </div>
      </div>
    </section>
  );
}
