"use client";
import { MapPin, Mail, Phone, MessageSquare, Calendar } from "lucide-react";

export default function ContactChannels() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Government Offices */}
      <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
        <div className="p-6 border-b border-gray-200">
          <h3 className="text-lg font-semibold flex items-center text-gray-900">
            <MapPin className="h-5 w-5 mr-2 text-[#078930]" />
            Government Offices
          </h3>
          <p className="text-sm text-gray-500 mt-1">
            Visit our physical locations
          </p>
        </div>
        <div className="p-6 space-y-4">
          <div>
            <h4 className="font-medium text-gray-900">Ministry of Health HQ</h4>
            <p className="text-gray-600">Plot 6 Lourdel Rd, Kampala</p>
          </div>

          <div className="mt-4">
            <h4 className="font-medium text-gray-900">Additional Locations:</h4>
            <ul className="mt-2 space-y-2">
              <li className="flex items-start">
                <MapPin className="h-4 w-4 mr-2 text-gray-500 mt-0.5 shrink-0" />
                <span>
                  National Medical Stores - Plot 4-12 Nsamizi Road, Entebbe
                </span>
              </li>
              <li className="flex items-start">
                <MapPin className="h-4 w-4 mr-2 text-gray-500 mt-0.5 shrink-0" />
                <span>
                  National Drug Authority - Plot 46-48 Lumumba Avenue, Kampala
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Digital Channels */}
      <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
        <div className="p-6 border-b border-gray-200">
          <h3 className="text-lg font-semibold flex items-center text-gray-900">
            <Mail className="h-5 w-5 mr-2 text-[#078930]" />
            Digital Channels
          </h3>
          <p className="text-sm text-gray-500 mt-1">Reach us online</p>
        </div>
        <div className="p-6 space-y-4">
          <div className="flex items-start">
            <Mail className="h-5 w-5 mr-3 text-gray-500 mt-0.5" />
            <div>
              <h4 className="font-medium text-gray-900">Email</h4>
              <a
                href="mailto:medicines@health.go.ug"
                className="text-blue-600 hover:underline"
              >
                medicines@health.go.ug
              </a>
            </div>
          </div>

          <div className="flex items-start">
            <MessageSquare className="h-5 w-5 mr-3 text-gray-500 mt-0.5" />
            <div>
              <h4 className="font-medium text-gray-900">WhatsApp Business</h4>
              <a
                href="https://wa.me/256700123123"
                className="text-blue-600 hover:underline"
              >
                +256 700 123 123
              </a>
            </div>
          </div>

          <div className="flex items-start">
            <Phone className="h-5 w-5 mr-3 text-gray-500 mt-0.5" />
            <div>
              <h4 className="font-medium text-gray-900">Hotline</h4>
              <a
                href="tel:+256800100100"
                className="text-blue-600 hover:underline"
              >
                +256 800 100 100
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Field Support */}
      <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
        <div className="p-6 border-b border-gray-200">
          <h3 className="text-lg font-semibold flex items-center text-gray-900">
            <MapPin className="h-5 w-5 mr-2 text-[#078930]" />
            Field Support
          </h3>
          <p className="text-sm text-gray-500 mt-1">
            Regional offices across Uganda
          </p>
        </div>
        <div className="p-6 space-y-4">
          <div>
            <h4 className="font-medium text-gray-900">Regional Offices</h4>
            <ul className="mt-2 space-y-2">
              <li className="flex items-start">
                <MapPin className="h-4 w-4 mr-2 text-gray-500 mt-0.5 shrink-0" />
                <span>Gulu Regional Office - Plot 16 Gulu Avenue</span>
              </li>
              <li className="flex items-start">
                <MapPin className="h-4 w-4 mr-2 text-gray-500 mt-0.5 shrink-0" />
                <span>Mbarara Regional Office - 24 Mbaguta Street</span>
              </li>
              <li className="flex items-start">
                <MapPin className="h-4 w-4 mr-2 text-gray-500 mt-0.5 shrink-0" />
                <span>Mbale Regional Office - 7 Republic Street</span>
              </li>
            </ul>
          </div>

          <button className="w-full bg-[#078930] hover:bg-[#056b20] text-white font-medium py-2 px-4 rounded-md transition-colors flex items-center justify-center">
            <Calendar className="h-4 w-4 mr-2" />
            Schedule On-Site Visit
          </button>
        </div>
      </div>

      {/* Contact Hours */}
      <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
        <div className="p-6 border-b border-gray-200">
          <h3 className="text-lg font-semibold flex items-center text-gray-900">
            <Calendar className="h-5 w-5 mr-2 text-[#078930]" />
            Contact Hours
          </h3>
          <p className="text-sm text-gray-500 mt-1">When you can reach us</p>
        </div>
        <div className="p-6">
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="font-medium">Monday - Friday</span>
              <span>8:00 AM - 5:00 PM</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium">Saturday</span>
              <span>9:00 AM - 1:00 PM</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium">Sunday</span>
              <span>Closed</span>
            </div>
            <div className="pt-3 mt-3 border-t border-gray-200">
              <p className="text-sm text-gray-600">
                <span className="font-medium">Emergency Hotline:</span>{" "}
                Available 24/7
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
