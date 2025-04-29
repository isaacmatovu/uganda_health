import { Download, FileText } from "lucide-react";
import Button from "@/components/common/button";

export function HeroBanner() {
  return (
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
  );
}
