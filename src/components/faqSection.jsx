"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    id: "item-1",
    question: "How do I reset my password?",
    answer:
      'To reset your password, visit the eHealth portal login page and click on "Forgot Password". Enter your registered email address, and you will receive instructions to reset your password. If you continue to experience issues, please contact our technical support team.',
  },
  {
    id: "item-2",
    question: "How can I report fake medicines?",
    answer:
      'To report fake or counterfeit medicines, use the "Report Suspicious Medicine" feature in the eHealth portal or mobile app. Alternatively, you can call our dedicated hotline at +256 800 100 100. Please provide as much detail as possible, including the medicine name, batch number, and where it was purchased.',
  },
  {
    id: "item-3",
    question: "How can my facility become a partner health center?",
    answer:
      "Health facilities interested in becoming partner health centers should submit an application through the Ministry of Health website. The application requires details about your facility, services offered, and staff qualifications. After submission, our team will review your application and conduct a site visit before approval.",
  },
  {
    id: "item-4",
    question:
      "What should I do if I encounter technical issues with the eHealth system?",
    answer:
      "If you encounter technical issues, first try refreshing your browser or restarting the application. Check your internet connection and ensure you're using a supported browser. If problems persist, contact our technical support team through the contact form on this page or call our support line during business hours.",
  },
  {
    id: "item-5",
    question: "How can I request training for my staff on the eHealth system?",
    answer:
      "The Ministry of Health offers regular training sessions for healthcare professionals. To request training for your staff, fill out the training request form on the eHealth portal or contact our training department directly at training@health.go.ug. We offer both in-person and virtual training options.",
  },
];

export default function FaqSection() {
  const [openItem, setOpenItem] = useState(null);

  const toggleItem = (id) => {
    setOpenItem(openItem === id ? null : id);
  };

  return (
    <div className="w-full space-y-2">
      {faqs.map((faq) => (
        <div
          key={faq.id}
          className="border border-gray-200 rounded-md overflow-hidden"
        >
          <button
            onClick={() => toggleItem(faq.id)}
            className="flex items-center justify-between w-full p-4 text-left font-medium focus:outline-none focus:ring-2 focus:ring-[#078930] focus:ring-inset"
            aria-expanded={openItem === faq.id}
            aria-controls={`content-${faq.id}`}
          >
            <span>{faq.question}</span>
            <ChevronDown
              className={`h-5 w-5 text-gray-500 transition-transform ${
                openItem === faq.id ? "transform rotate-180" : ""
              }`}
            />
          </button>
          <div
            id={`content-${faq.id}`}
            className={`px-4 overflow-hidden transition-all duration-200 ease-in-out ${
              openItem === faq.id ? "max-h-96 pb-4" : "max-h-0"
            }`}
            aria-hidden={openItem !== faq.id}
          >
            <p className="text-gray-600">{faq.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
