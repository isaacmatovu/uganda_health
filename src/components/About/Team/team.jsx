import Image from "next/image";

export function Team() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
      <div className="px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Our Team
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Developed by Ugandan Tech Experts
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 mt-8">
          <TeamMember name="Dr. Sarah Nakato" role="Project Lead" />
          <TeamMember name="John Okello" role="Lead Developer" />
          <TeamMember name="Grace Auma" role="UX Designer" />
          <TeamMember name="David Mugisha" role="Data Scientist" />
          <TeamMember name="Faith Nambi" role="Implementation Specialist" />
        </div>
      </div>
    </section>
  );
}

function TeamMember({ name, role }) {
  return (
    <div className="flex flex-col items-center space-y-2 group">
      <div className="relative">
        <div className="w-24 h-24 rounded-full overflow-hidden bg-gray-200">
          <Image
            src={`/placeholder.svg?height=96&width=96&text=${encodeURIComponent(
              name.split(" ")[0][0] + name.split(" ")[1][0]
            )}`}
            alt={name}
            width={96}
            height={96}
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-black/70 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center p-2 text-xs">
          <p className="font-medium">{name}</p>
          <p>{role}</p>
        </div>
      </div>
      <span className="text-sm font-medium">{name}</span>
      <span className="text-xs text-muted-foreground">{role}</span>
    </div>
  );
}
