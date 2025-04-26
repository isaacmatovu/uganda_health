import { Phone, Mail, MapPin } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t bg-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-3 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2">
              <div className="h-10 w-10 rounded bg-[#0033A0]"></div>
              <span className="text-lg font-bold">Ministry of Health</span>
            </div>
            <p className="mt-4 text-sm text-gray-600">
              Ensuring medicine availability for all Ugandans through innovative
              tracking solutions.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <FooterLink href="#" text="Home" />
              <FooterLink href="#" text="About Us" />
              <FooterLink href="#" text="Services" />
              <FooterLink href="#" text="Resources" />
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold">Resources</h3>
            <ul className="space-y-2 text-sm">
              <FooterLink href="#" text="Documentation" />
              <FooterLink href="#" text="Training" />
              <FooterLink href="#" text="Support" />
              <FooterLink href="#" text="FAQ" />
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <ContactItem
                icon={<MapPin className="h-4 w-4 text-[#0033A0]" />}
                text="Plot 6, Lourdel Road, Kampala, Uganda"
              />
              <ContactItem
                icon={<Phone className="h-4 w-4 text-[#0033A0]" />}
                text="+256 417 712 260"
              />
              <ContactItem
                icon={<Mail className="h-4 w-4 text-[#0033A0]" />}
                text="info@health.go.ug"
              />
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-200 pt-6 text-center text-sm text-gray-600">
          <p>
            © {new Date().getFullYear()} Ministry of Health, Republic of Uganda.
            All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterLink({ href, text }) {
  return (
    <li>
      <Link href={href} className="text-gray-600 hover:text-[#0033A0]">
        {text}
      </Link>
    </li>
  );
}

function ContactItem({ icon, text }) {
  return (
    <li className="flex items-center gap-2">
      {icon}
      <span className="text-gray-600">{text}</span>
    </li>
  );
}
