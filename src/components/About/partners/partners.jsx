import Image from "next/image";

export function Partners() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
      <div className="px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Our Partners
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Working together to strengthen Uganda's healthcare system
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-8 items-center justify-items-center">
          <PartnerLogo name="Uganda MoH Seal" />
          <PartnerLogo name="WHO Uganda" />
          <PartnerLogo name="National Medical Stores" />
          <PartnerLogo name="UNDP" />
        </div>
      </div>
    </section>
  );
}

function PartnerLogo({ name }) {
  return (
    <div className="flex flex-col items-center space-y-2">
      <div className="w-32 h-32 bg-gray-100 rounded-lg flex items-center justify-center">
        <Image
          src={`/placeholder.svg?height=128&width=128&text=${encodeURIComponent(
            name
          )}`}
          alt={`${name} logo`}
          width={128}
          height={128}
          className="max-w-full max-h-full p-4"
        />
      </div>
      <span className="text-sm font-medium">{name}</span>
    </div>
  );
}
