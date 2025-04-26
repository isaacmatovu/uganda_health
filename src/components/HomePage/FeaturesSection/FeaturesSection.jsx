export default function FeaturesSection() {
  const features = [
    {
      icon: "📊",
      title: "Real-Time Tracking",
      description:
        "Monitor medicine inventory levels across all health facilities in real-time, enabling proactive distribution and preventing stockouts.",
    },
    {
      icon: "📱",
      title: "SMS Alerts",
      description:
        "Receive instant notifications when stock levels are low, ensuring timely resupply and continuous availability of essential medicines.",
    },
    {
      icon: "📶",
      title: "Offline Mode",
      description:
        "Continue working even without internet connectivity. Data syncs automatically when connection is restored.",
    },
  ];

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center text-3xl font-bold">Our Features</h2>
        <div className="grid gap-8 md:grid-cols-3">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ icon, title, description }) {
  return (
    <div className="flex flex-col items-center rounded-lg border border-gray-200 p-6 text-center shadow-sm transition-all hover:shadow-md">
      <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#0033A0]/10 text-3xl">
        {icon}
      </div>
      <h3 className="mb-2 text-xl font-bold">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}
