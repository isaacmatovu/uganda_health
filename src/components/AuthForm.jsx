"use client";
import { useState } from "react";

const AuthForm = ({ isLogin }) => {
  const [isRegistering, setIsRegistering] = useState(!isLogin);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    district: "",
    role: "health_centre",
  });
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    district: "",
    role: "",
  });
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const districts = [
    "Kampala",
    "Wakiso",
    "Jinja",
    "Mbarara",
    "Gulu",
    "Mbale",
    "Arua",
    "Lira",
    "Masaka",
    "Fort Portal",
  ];

  const validateForm = () => {
    let tempErrors = {};
    let isValid = true;

    // Role-based validations
    if (isRegistering) {
      // Health Centre validations
      if (formData.role === "health_centre") {
        if (!formData.name.trim()) {
          tempErrors.name = "Healthcare facility name is required";
          isValid = false;
        }
        if (!formData.district) {
          tempErrors.district = "District is required";
          isValid = false;
        }
      }
      // District Officer validations
      else if (formData.role === "district_officer") {
        if (!formData.district) {
          tempErrors.district = "District is required";
          isValid = false;
        }
      }
      // Admin has no special fields to validate
    }

    // Common validations for all roles
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email) {
      tempErrors.email = "Email is required";
      isValid = false;
    } else if (!emailRegex.test(formData.email)) {
      tempErrors.email = "Please enter a valid email address";
      isValid = false;
    }

    if (!formData.password) {
      tempErrors.password = "Password is required";
      isValid = false;
    } else if (formData.password.length < 8) {
      tempErrors.password = "Password must be at least 8 characters long";
      isValid = false;
    }

    if (isRegistering) {
      if (!formData.confirmPassword) {
        tempErrors.confirmPassword = "Please confirm your password";
        isValid = false;
      } else if (formData.password !== formData.confirmPassword) {
        tempErrors.confirmPassword = "Passwords do not match";
        isValid = false;
      }
    }

    setErrors(tempErrors);
    return isValid;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccessMessage("");

    if (validateForm()) {
      // Simulate API call
      setTimeout(() => {
        setLoading(false);
        setSuccessMessage(
          isRegistering
            ? "Registration successful! (Frontend demo)"
            : "Login successful! (Frontend demo)"
        );

        if (isRegistering) {
          setFormData({
            name: "",
            email: "",
            password: "",
            confirmPassword: "",
            district: "",
            role: "health_centre",
          });
        }
      }, 1500);
    } else {
      setLoading(false);
    }
  };

  const toggleAuthMode = () => {
    setIsRegistering(!isRegistering);
    setErrors({
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      district: "",
      role: "",
    });
    setSuccessMessage("");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-lg shadow-md">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            {isRegistering ? "Create your account" : "Sign in to your account"}
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            {isRegistering
              ? "Register your healthcare facility"
              : "Access your healthcare dashboard"}
          </p>
        </div>

        {successMessage && (
          <div
            className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative"
            role="alert"
          >
            <span className="block sm:inline">{successMessage}</span>
          </div>
        )}

        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm space-y-4">
            {isRegistering && (
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Register As
                </label>
                <div className="mt-2 space-y-2">
                  <div className="flex items-center">
                    <input
                      id="health_centre"
                      name="role"
                      type="radio"
                      className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300"
                      value="health_centre"
                      checked={formData.role === "health_centre"}
                      onChange={handleChange}
                    />
                    <label
                      htmlFor="health_centre"
                      className="ml-2 block text-sm text-gray-700"
                    >
                      Health Centre
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      id="district_officer"
                      name="role"
                      type="radio"
                      className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300"
                      value="district_officer"
                      checked={formData.role === "district_officer"}
                      onChange={handleChange}
                    />
                    <label
                      htmlFor="district_officer"
                      className="ml-2 block text-sm text-gray-700"
                    >
                      District Officer
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      id="admin"
                      name="role"
                      type="radio"
                      className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300"
                      value="admin"
                      checked={formData.role === "admin"}
                      onChange={handleChange}
                    />
                    <label
                      htmlFor="admin"
                      className="ml-2 block text-sm text-gray-700"
                    >
                      Admin
                    </label>
                  </div>
                </div>
                {errors.role && (
                  <p className="mt-1 text-sm text-red-500">{errors.role}</p>
                )}
              </div>
            )}

            {/* Conditional rendering for Healthcare Facility Name field */}
            {isRegistering && formData.role === "health_centre" ? (
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Name of Health Care Facility
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  className={`mt-1 block w-full px-3 py-2 border ${
                    errors.name ? "border-red-500" : "border-gray-300"
                  } rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
                  placeholder="e.g. Mulago Hospital"
                  value={formData.name}
                  onChange={handleChange}
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-500">{errors.name}</p>
                )}
              </div>
            ) : null}

            {/* Conditional rendering for District field */}
            {isRegistering &&
            (formData.role === "health_centre" ||
              formData.role === "district_officer") ? (
              <div>
                <label
                  htmlFor="district"
                  className="block text-sm font-medium text-gray-700"
                >
                  District
                </label>
                <select
                  id="district"
                  name="district"
                  className={`mt-1 block w-full px-3 py-2 border ${
                    errors.district ? "border-red-500" : "border-gray-300"
                  } rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
                  value={formData.district}
                  onChange={handleChange}
                >
                  <option value="">Select your district</option>
                  {districts.map((district) => (
                    <option key={district} value={district}>
                      {district}
                    </option>
                  ))}
                </select>
                {errors.district && (
                  <p className="mt-1 text-sm text-red-500">{errors.district}</p>
                )}
              </div>
            ) : null}

            {/* Common fields for all roles */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                className={`mt-1 block w-full px-3 py-2 border ${
                  errors.email ? "border-red-500" : "border-gray-300"
                } rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
                placeholder="your@email.com"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-500">{errors.email}</p>
              )}
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete={
                  isRegistering ? "new-password" : "current-password"
                }
                className={`mt-1 block w-full px-3 py-2 border ${
                  errors.password ? "border-red-500" : "border-gray-300"
                } rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
                placeholder={
                  isRegistering ? "Create a password" : "Enter your password"
                }
                value={formData.password}
                onChange={handleChange}
              />
              {errors.password && (
                <p className="mt-1 text-sm text-red-500">{errors.password}</p>
              )}
            </div>

            {/* Show confirm password field only when registering */}
            {isRegistering ? (
              <div>
                <label
                  htmlFor="confirmPassword"
                  className="block text-sm font-medium text-gray-700"
                >
                  Confirm Password
                </label>
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  autoComplete="new-password"
                  className={`mt-1 block w-full px-3 py-2 border ${
                    errors.confirmPassword
                      ? "border-red-500"
                      : "border-gray-300"
                  } rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
                  placeholder="Confirm your password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                />
                {errors.confirmPassword && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.confirmPassword}
                  </p>
                )}
              </div>
            ) : null}
          </div>

          {/* Show remember me and forgot password only on login form */}
          {!isRegistering && (
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label
                  htmlFor="remember-me"
                  className="ml-2 block text-sm text-gray-700"
                >
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                <a
                  href="#"
                  className="font-medium text-blue-600 hover:text-blue-500"
                >
                  Forgot your password?
                </a>
              </div>
            </div>
          )}

          <div>
            <button
              type="submit"
              disabled={loading}
              className={`group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${
                loading ? "opacity-70 cursor-not-allowed" : ""
              }`}
            >
              {loading ? (
                <>
                  <svg
                    className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Processing...
                </>
              ) : isRegistering ? (
                "Register"
              ) : (
                "Sign in"
              )}
            </button>
          </div>
        </form>

        <div className="text-center text-sm text-gray-600">
          {isRegistering ? (
            <>
              Already have an account?{" "}
              <button
                onClick={toggleAuthMode}
                className="font-medium text-blue-600 hover:text-blue-500"
              >
                Sign in
              </button>
            </>
          ) : (
            <>
              Don't have an account?{" "}
              <button
                onClick={toggleAuthMode}
                className="font-medium text-blue-600 hover:text-blue-500"
              >
                Register
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
