export function ImpactStats() {
  return (
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
