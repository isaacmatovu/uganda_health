import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-b from-[#0033A0] to-[#0033A0]/80 py-16 text-white md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-2 md:gap-12">
          <div className="flex flex-col justify-center space-y-6">
            <h1 className="text-3xl font-bold leading-tight md:text-5xl">
              Prevent Medicine Stockouts Nationwide
            </h1>
            <p className="max-w-md text-lg text-white/80">
              Our innovative tracking system ensures essential medicines are
              always available when and where they are needed most.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <button className="rounded bg-[#FFCE00] px-6 py-3 font-medium text-black hover:bg-[#FFCE00]/90">
                Get Started
              </button>
              <button className="rounded border border-white px-6 py-3 font-medium text-white hover:bg-white/10">
                Learn More
              </button>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative h-64 w-full max-w-md overflow-hidden rounded-lg bg-white/10 shadow-lg md:h-80">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Healthcare workers using the medicine tracking system"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
