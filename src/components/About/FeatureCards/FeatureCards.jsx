export function FeatureCards() {
  return (
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
