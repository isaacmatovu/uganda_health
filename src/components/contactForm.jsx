"use client";

import { useState } from "react";
import { AlertCircle, Upload } from "lucide-react";

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [fileName, setFileName] = useState("");

  // Form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    inquiryType: "",
    message: "",
    isUrgent: false,
  });

  // Form errors
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
    inquiryType: "",
    message: "",
  });

  // Uganda phone number validation
  const validateUgandaPhone = (phone) => {
    const ugandaPhoneRegex = /^(?:\+256|0)7[0-9]{8}$/;
    return ugandaPhoneRegex.test(phone);
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = {
      name: "",
      email: "",
      phone: "",
      inquiryType: "",
      message: "",
    };

    // Validate name
    if (formData.name.length < 2) {
      newErrors.name = "Name must be at least 2 characters";
      valid = false;
    }

    // Validate email
    if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
      valid = false;
    }

    // Validate phone
    if (!validateUgandaPhone(formData.phone)) {
      newErrors.phone =
        "Please enter a valid Uganda phone number (e.g., +256 7XX XXX XXX or 07XX XXX XXX)";
      valid = false;
    }

    // Validate inquiry type
    if (!formData.inquiryType) {
      newErrors.inquiryType = "Please select an inquiry type";
      valid = false;
    }

    // Validate message
    if (formData.message.length < 10) {
      newErrors.message = "Message must be at least 10 characters";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFileName(e.target.files[0].name);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      setIsSubmitting(true);

      // Simulate form submission
      setTimeout(() => {
        console.log(formData);
        setIsSubmitting(false);
        setIsSubmitted(true);
        setFormData({
          name: "",
          email: "",
          phone: "",
          inquiryType: "",
          message: "",
          isUrgent: false,
        });
        setFileName("");
      }, 1500);
    }
  };

  if (isSubmitted) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg
            className="w-8 h-8 text-green-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 13l4 4L19 7"
            ></path>
          </svg>
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-2">Thank You!</h3>
        <p className="text-gray-600 mb-4">
          Your message has been received. Our team will get back to you shortly.
        </p>
        <button
          onClick={() => setIsSubmitted(false)}
          className="bg-[#078930] hover:bg-[#056b20] text-white font-medium py-2 px-4 rounded-md transition-colors"
        >
          Submit Another Request
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Name Field */}
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Full Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="John Doe"
            value={formData.name}
            onChange={handleChange}
            className={`w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#078930] ${
              errors.name ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.name && (
            <p className="mt-1 text-sm text-red-600">{errors.name}</p>
          )}
        </div>

        {/* Email Field */}
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Email Address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="john.doe@example.com"
            value={formData.email}
            onChange={handleChange}
            className={`w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#078930] ${
              errors.email ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-600">{errors.email}</p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Phone Field */}
        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Phone Number
          </label>
          <input
            id="phone"
            name="phone"
            type="text"
            placeholder="+256 7XX XXX XXX"
            value={formData.phone}
            onChange={handleChange}
            className={`w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#078930] ${
              errors.phone ? "border-red-500" : "border-gray-300"
            }`}
          />
          <p className="mt-1 text-xs text-gray-500">
            Uganda format: +256 7XX XXX XXX or 07XX XXX XXX
          </p>
          {errors.phone && (
            <p className="mt-1 text-sm text-red-600">{errors.phone}</p>
          )}
        </div>

        {/* Inquiry Type Field */}
        <div>
          <label
            htmlFor="inquiryType"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Inquiry Type
          </label>
          <select
            id="inquiryType"
            name="inquiryType"
            value={formData.inquiryType}
            onChange={handleChange}
            className={`w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#078930] ${
              errors.inquiryType ? "border-red-500" : "border-gray-300"
            }`}
          >
            <option value="" disabled>
              Select Inquiry Type
            </option>
            <option value="technical">Technical Support</option>
            <option value="stockEmergency">Stock Emergency</option>
            <option value="feedback">Feedback</option>
            <option value="partnership">Partnership</option>
            <option value="other">Other</option>
          </select>
          {errors.inquiryType && (
            <p className="mt-1 text-sm text-red-600">{errors.inquiryType}</p>
          )}
        </div>
      </div>

      {/* Message Field */}
      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          placeholder="Please describe your inquiry in detail..."
          value={formData.message}
          onChange={handleChange}
          rows={4}
          className={`w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#078930] ${
            errors.message ? "border-red-500" : "border-gray-300"
          }`}
        ></textarea>
        {errors.message && (
          <p className="mt-1 text-sm text-red-600">{errors.message}</p>
        )}
      </div>

      <div className="space-y-4">
        {/* File Upload */}
        <div>
          <label
            htmlFor="file"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Attachment (Optional)
          </label>
          <div className="flex items-center gap-2">
            <label
              htmlFor="file"
              className="cursor-pointer flex items-center gap-2 border border-gray-300 rounded-md px-4 py-2 hover:bg-gray-50 transition-colors"
            >
              <Upload className="h-4 w-4" />
              <span>{fileName || "Upload File"}</span>
            </label>
            <input
              id="file"
              type="file"
              className="hidden"
              onChange={handleFileChange}
              accept=".pdf,.doc,.docx,.jpg,.png"
            />
            {fileName && (
              <button
                type="button"
                className="text-gray-500 hover:text-gray-700 text-sm px-2 py-1"
                onClick={() => setFileName("")}
              >
                Clear
              </button>
            )}
          </div>
          <p className="text-xs text-gray-500 mt-1">
            Accepted formats: PDF, DOC, DOCX, JPG, PNG (max 5MB)
          </p>
        </div>

        {/* Urgent Toggle */}
        <div className="flex flex-row items-center justify-between rounded-lg border border-gray-200 p-4">
          <div className="space-y-0.5">
            <label
              htmlFor="isUrgent"
              className="text-base font-medium text-gray-900"
            >
              Mark as Urgent
            </label>
            <p className="text-sm text-gray-500">
              For MoH Staff Only - Prioritizes your request
            </p>
          </div>
          <div className="relative inline-flex items-center">
            <input
              type="checkbox"
              id="isUrgent"
              name="isUrgent"
              checked={formData.isUrgent}
              onChange={handleChange}
              className="sr-only"
            />
            <div
              className={`w-11 h-6 rounded-full transition ${
                formData.isUrgent ? "bg-[#078930]" : "bg-gray-200"
              }`}
            >
              <div
                className={`w-5 h-5 rounded-full bg-white shadow transform transition-transform ${
                  formData.isUrgent ? "translate-x-5" : "translate-x-1"
                }`}
              ></div>
            </div>
          </div>
        </div>
      </div>

      {/* Warning Banner */}
      <div className="bg-amber-50 border border-amber-200 rounded-md p-4 flex items-start gap-3">
        <AlertCircle className="h-5 w-5 text-amber-600 mt-0.5 shrink-0" />
        <div>
          <p className="text-sm text-amber-800">
            For medical emergencies requiring immediate attention, please call
            our emergency hotline at
            <a href="tel:+256800100100" className="font-bold underline ml-1">
              +256 800 100 100
            </a>
            .
          </p>
        </div>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-[#078930] hover:bg-[#056b20] text-white font-medium py-3 px-4 rounded-md transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? "Submitting..." : "Submit Support Request"}
      </button>
    </form>
  );
}
