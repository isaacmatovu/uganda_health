"use client";

import { useState, useRef, useEffect } from "react";
import {
  Bell,
  ChevronDown,
  FileText,
  Home,
  LogOut,
  Menu,
  Settings,
  Shield,
  Users,
  X,
} from "lucide-react";
import Link from "next/link";

export function DashboardLayout({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b bg-[#002366] text-white">
        <div className="flex h-16 items-center justify-between px-4 sm:px-6">
          <div className="flex items-center">
            <button
              className="mr-2 md:hidden rounded-lg p-2 text-white hover:bg-blue-800"
              onClick={() => setIsSidebarOpen(true)}
            >
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </button>
            <div className="flex items-center gap-2">
              <Shield className="h-6 w-6" />
              <h1 className="text-xl font-bold">Uganda Health System</h1>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button className="rounded-lg p-2 text-white hover:bg-blue-800">
              <Bell className="h-5 w-5" />
              <span className="sr-only">Notifications</span>
            </button>
            <div className="relative" ref={dropdownRef}>
              <button
                className="flex items-center gap-2 rounded-lg p-2 text-white hover:bg-blue-800"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                <div className="h-8 w-8 rounded-full bg-blue-700 flex items-center justify-center">
                  <span className="text-sm font-medium">JD</span>
                </div>
                <span className="hidden md:inline-flex">John Doe</span>
                <ChevronDown className="h-4 w-4" />
              </button>
              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-56 rounded-md border border-gray-200 bg-white shadow-lg">
                  <div className="py-1 px-2 border-b border-gray-200">
                    <p className="text-sm font-medium text-gray-900">
                      My Account
                    </p>
                  </div>
                  <div className="py-1">
                    <button className="flex w-full items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      Profile
                    </button>
                    <button className="flex w-full items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      Settings
                    </button>
                  </div>
                  <div className="py-1 border-t border-gray-200">
                    <button className="flex w-full items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      <LogOut className="mr-2 h-4 w-4" />
                      <span>Log out</span>
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>

      <div className="flex flex-1">
        {/* Sidebar for desktop */}
        <aside className="hidden w-64 flex-col border-r bg-gray-100/40 md:flex">
          <nav className="flex-1 overflow-auto py-6 px-4">
            <ul className="space-y-2">
              <li>
                <Link
                  href="#"
                  className="flex items-center gap-3 rounded-lg bg-gray-200 px-3 py-2 text-gray-900 transition-all hover:text-gray-900"
                >
                  <Home className="h-5 w-5" />
                  <span>Dashboard</span>
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900"
                >
                  <Users className="h-5 w-5" />
                  <span>User Management</span>
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900"
                >
                  <FileText className="h-5 w-5" />
                  <span>Reports</span>
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900"
                >
                  <Settings className="h-5 w-5" />
                  <span>System Settings</span>
                </Link>
              </li>
            </ul>
          </nav>
          <div className="border-t p-4">
            <div className="flex items-center gap-3">
              <div className="h-8 w-8 rounded-full bg-blue-700 flex items-center justify-center text-white">
                <span className="text-sm font-medium">JD</span>
              </div>
              <div>
                <p className="text-sm font-medium">John Doe</p>
                <p className="text-xs text-gray-500">Role: Super Admin</p>
              </div>
            </div>
          </div>
        </aside>

        {/* Mobile sidebar */}
        {isSidebarOpen && (
          <div className="fixed inset-0 z-50 md:hidden">
            {/* Backdrop */}
            <div
              className="fixed inset-0 bg-black/50"
              onClick={() => setIsSidebarOpen(false)}
            ></div>

            {/* Sidebar */}
            <div className="fixed inset-y-0 left-0 w-64 bg-white">
              <div className="flex h-16 items-center border-b px-6">
                <div className="flex items-center gap-2">
                  <Shield className="h-6 w-6" />
                  <h2 className="text-lg font-semibold">Health System</h2>
                </div>
                <button
                  className="ml-auto rounded-lg p-1 text-gray-500 hover:bg-gray-100"
                  onClick={() => setIsSidebarOpen(false)}
                >
                  <X className="h-5 w-5" />
                  <span className="sr-only">Close</span>
                </button>
              </div>
              <nav className="flex-1 overflow-auto py-6 px-4">
                <ul className="space-y-2">
                  <li>
                    <Link
                      href="#"
                      className="flex items-center gap-3 rounded-lg bg-gray-200 px-3 py-2 text-gray-900 transition-all hover:text-gray-900"
                      onClick={() => setIsSidebarOpen(false)}
                    >
                      <Home className="h-5 w-5" />
                      <span>Dashboard</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900"
                      onClick={() => setIsSidebarOpen(false)}
                    >
                      <Users className="h-5 w-5" />
                      <span>User Management</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900"
                      onClick={() => setIsSidebarOpen(false)}
                    >
                      <FileText className="h-5 w-5" />
                      <span>Reports</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900"
                      onClick={() => setIsSidebarOpen(false)}
                    >
                      <Settings className="h-5 w-5" />
                      <span>System Settings</span>
                    </Link>
                  </li>
                </ul>
              </nav>
              <div className="border-t p-4">
                <div className="flex items-center gap-3">
                  <div className="h-8 w-8 rounded-full bg-blue-700 flex items-center justify-center text-white">
                    <span className="text-sm font-medium">JD</span>
                  </div>
                  <div>
                    <p className="text-sm font-medium">John Doe</p>
                    <p className="text-xs text-gray-500">Role: Super Admin</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Main content */}
        <main className="flex-1 overflow-auto">{children}</main>
      </div>
    </div>
  );
}
