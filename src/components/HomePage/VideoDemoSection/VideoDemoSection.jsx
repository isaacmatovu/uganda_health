import Image from "next/image";

export default function VideoDemoSection() {
  return (
    <section className="bg-gray-50 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-6 text-3xl font-bold">See How It Works</h2>
          <p className="mb-10 text-gray-600">
            Watch our demonstration video to see how our system helps prevent
            medicine stockouts across Uganda.
          </p>
          <div className="relative mx-auto aspect-video w-full overflow-hidden rounded-lg bg-black shadow-lg">
            <div className="absolute inset-0 flex items-center justify-center">
              <button className="flex h-16 w-16 items-center justify-center rounded-full bg-[#0033A0] text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="ml-1"
                >
                  <polygon points="5 3 19 12 5 21 5 3" />
                </svg>
              </button>
            </div>
            <Image
              src="/placeholder.svg?height=720&width=1280"
              alt="Video demonstration of the medicine tracking system"
              fill
              className="object-cover opacity-50"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
