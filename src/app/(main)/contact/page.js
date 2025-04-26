import ContactForm from "@/components/contactForm";
import ContactChannels from "@/components/contactChannels";
import FaqSection from "@/components/faqSection";

export const metadata = {
  title: "Contact Uganda eHealth Team",
  description:
    "Get in touch with Uganda's eHealth Team for support and assistance",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Government Letterhead Style Header */}
      <header className="bg-[#078930] text-white">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="h-16 w-16 relative">
                <div className="absolute inset-0 bg-[#FFFF00] rounded-full"></div>
                <div className="absolute inset-2 bg-[#000000] rounded-full"></div>
                <div className="absolute inset-4 bg-[#DE3908] rounded-full"></div>
              </div>
              <div>
                <h1 className="text-xl font-bold">Republic of Uganda</h1>
                <p className="text-sm">Ministry of Health</p>
              </div>
            </div>
            <nav className="hidden md:flex space-x-6">
              <a href="/" className="hover:underline">
                Home
              </a>
              <a href="/services" className="hover:underline">
                Services
              </a>
              <a href="/about" className="hover:underline">
                About
              </a>
              <a href="/contact" className="font-bold underline">
                Contact
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Emergency Banner */}
      <div className="bg-red-600 text-white py-3 px-4">
        <div className="container mx-auto flex items-center justify-center">
          <span className="text-2xl mr-2">🚨</span>
          <p className="font-medium text-center">
            Immediate Assistance? Call{" "}
            <a href="tel:+256800100100" className="font-bold underline">
              +256 800 100 100
            </a>
          </p>
        </div>
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Need Help? Contact Uganda's eHealth Team
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our team is ready to assist you with any questions or issues
              related to Uganda's eHealth system.
            </p>
          </div>

          {/* Contact Channels Grid */}
          <ContactChannels />

          {/* Support Form */}
          <div className="mt-16 bg-gray-50 p-6 md:p-8 rounded-lg border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Submit a Support Request
            </h3>
            <ContactForm />
          </div>

          {/* FAQ Section */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Frequently Asked Questions
            </h3>
            <FaqSection />
          </div>
        </div>
      </main>
    </div>
  );
}
