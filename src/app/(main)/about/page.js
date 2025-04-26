import Image from "next/image";
import { Download, FileText } from "lucide-react";
import Button from "@/components/common/button";

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Banner */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-[#FCD116] to-[#0066CC]">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white">
                Saving Lives Through Reliable Medicine Access
              </h1>
              <p className="mx-auto max-w-[700px] text-white md:text-xl">
                A Ugandan Ministry of Health Initiative
              </p>
            </div>
            <div className="w-full max-w-sm space-y-2">
              <Button>
                <div className="flex items-center justify-center">
                  <FileText className="h-4 w-4" />
                  <span>Download Fact Sheet</span>
                  <Download className="h-4 w-4 ml-1" />
                </div>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Key Features
              </h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Our platform provides essential tools to ensure medicine
                availability across Uganda
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            <FeatureCard
              icon="📈"
              title="Real-Time Stock Tracking"
              description="Monitor medicine inventory levels across all health centers in real-time"
            />
            <FeatureCard
              icon="📱"
              title="Automated SMS Alerts"
              description="Receive instant notifications about critical stock levels and deliveries"
            />
            <FeatureCard
              icon="📶"
              title="Offline-First for Rural Areas"
              description="Continue operations even in areas with limited connectivity"
            />
            <FeatureCard
              icon="⛓️"
              title="Blockchain-Verified Data"
              description="Ensure data integrity with immutable blockchain verification"
            />
            <FeatureCard
              icon="🌍"
              title="Multi-Language Support"
              description="Access the platform in Uganda's major languages for wider accessibility"
            />
            <FeatureCard
              icon="🔒"
              title="Government-Approved Security"
              description="Rest assured with security protocols approved by the Ministry of Health"
            />
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
        <div className="px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Our Impact
              </h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Transforming healthcare delivery across Uganda
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            <StatCard value="50+" description="Health Centers Connected" />
            <StatCard value="92%" description="Reduction in Stockouts" />
            <StatCard value="1.2M" description="Lives Impacted" />
          </div>
        </div>
      </section>

      {/* Partners */}
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

      {/* Team Section */}
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
    </main>
  );
}

function FeatureCard({ icon, title, description }) {
  return (
    <div className="flex flex-col items-center space-y-2 border-amber-50 shadow-2xl rounded-lg p-6 hover:shadow-md transition-shadow">
      <div className="text-4xl mb-2">{icon}</div>
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="text-muted-foreground text-center">{description}</p>
    </div>
  );
}

function StatCard({ value, description }) {
  return (
    <div className="flex flex-col items-center justify-center space-y-2 p-6 bg-white rounded-lg shadow-sm">
      <span className="text-4xl font-bold text-[#0066CC]">{value}</span>
      <span className="text-muted-foreground text-center">{description}</span>
    </div>
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
