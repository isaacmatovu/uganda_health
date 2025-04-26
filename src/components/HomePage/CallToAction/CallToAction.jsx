"use client";
export default function CallToAction() {
  return (
    <section className="bg-[#0033A0] py-16 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="mb-6 text-3xl font-bold">
          Ready to Prevent Medicine Stockouts?
        </h2>
        <p className="mx-auto mb-8 max-w-2xl">
          Join health facilities across Uganda that are already using our system
          to ensure medicine availability.
        </p>
        <button className="rounded bg-[#FFCE00] px-8 py-3 font-medium text-black hover:bg-[#FFCE00]/90">
          Request a Demo
        </button>
      </div>
    </section>
  );
}
