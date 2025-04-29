"use client";

import { useState } from "react";
import {
  Bell,
  Calendar,
  ClipboardList,
  Download,
  FileText,
  Home,
  LogOut,
  Menu,
  MessageSquare,
  Package,
  Settings,
  User,
  X,
} from "lucide-react";

export default function Dashboard() {
  const [isOpen, setIsOpen] = useState(false);

  const currentDate = new Date();
  const formattedDate = `${currentDate.toLocaleDateString()} ${currentDate.toLocaleTimeString()}`;

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar for desktop */}
      <div className="hidden md:flex flex-col w-64 bg-white border-r">
        <div className="flex items-center justify-center h-16 border-b bg-[#0066CC]">
          <h1 className="text-xl font-bold text-white">MoH Uganda</h1>
        </div>
        <div className="flex flex-col flex-1 overflow-y-auto">
          <div className="flex flex-col items-center p-4 border-b">
            <div className="relative w-20 h-20 rounded-full bg-[#0066CC] flex items-center justify-center text-white text-2xl mb-2">
              <User size={32} />
            </div>
            <h2 className="text-sm font-semibold">Welcome</h2>
            <p className="text-xs text-gray-500">District Health Officer</p>
          </div>
          <nav className="flex-1 px-2 py-4 space-y-1">
            <a
              href="#"
              className="flex items-center px-4 py-2 text-sm font-medium text-white rounded-md bg-[#0066CC]"
            >
              <Home className="w-5 h-5 mr-3" />
              Dashboard
            </a>
            <a
              href="#"
              className="flex items-center px-4 py-2 text-sm font-medium text-gray-600 rounded-md hover:bg-gray-100"
            >
              <Package className="w-5 h-5 mr-3" />
              Inventory
            </a>
            <a
              href="#"
              className="flex items-center px-4 py-2 text-sm font-medium text-gray-600 rounded-md hover:bg-gray-100"
            >
              <ClipboardList className="w-5 h-5 mr-3" />
              Clinics
            </a>
            <a
              href="#"
              className="flex items-center px-4 py-2 text-sm font-medium text-gray-600 rounded-md hover:bg-gray-100"
            >
              <FileText className="w-5 h-5 mr-3" />
              Reports
            </a>
          </nav>
          <div className="p-4 border-t">
            <a
              href="#"
              className="flex items-center px-4 py-2 text-sm font-medium text-gray-600 rounded-md hover:bg-gray-100"
            >
              <LogOut className="w-5 h-5 mr-3" />
              Logout
            </a>
          </div>
        </div>
      </div>

      {/* Mobile sidebar */}
      {isOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div
            className="fixed inset-0 bg-gray-600 bg-opacity-75"
            onClick={() => setIsOpen(false)}
          ></div>
          <div className="relative flex flex-col w-full max-w-xs pb-12 overflow-y-auto bg-white shadow-xl">
            <div className="flex items-center justify-between px-4 pt-5 pb-2">
              <h1 className="text-lg font-bold text-[#0066CC]">MoH Uganda</h1>
              <button
                type="button"
                className="inline-flex items-center justify-center p-2 text-gray-400 rounded-md hover:text-gray-500 hover:bg-gray-100"
                onClick={() => setIsOpen(false)}
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="flex flex-col items-center p-4 border-b">
              <div className="relative w-20 h-20 rounded-full bg-[#0066CC] flex items-center justify-center text-white text-2xl mb-2">
                <User size={32} />
              </div>
              <h2 className="text-sm font-semibold">Welcome</h2>
              <p className="text-xs text-gray-500">District Health Officer</p>
            </div>
            <nav className="flex-1 px-2 py-4 space-y-1">
              <a
                href="#"
                className="flex items-center px-4 py-2 text-sm font-medium text-white rounded-md bg-[#0066CC]"
              >
                <Home className="w-5 h-5 mr-3" />
                Dashboard
              </a>
              <a
                href="#"
                className="flex items-center px-4 py-2 text-sm font-medium text-gray-600 rounded-md hover:bg-gray-100"
              >
                <Package className="w-5 h-5 mr-3" />
                Inventory
              </a>
              <a
                href="#"
                className="flex items-center px-4 py-2 text-sm font-medium text-gray-600 rounded-md hover:bg-gray-100"
              >
                <ClipboardList className="w-5 h-5 mr-3" />
                Clinics
              </a>
              <a
                href="#"
                className="flex items-center px-4 py-2 text-sm font-medium text-gray-600 rounded-md hover:bg-gray-100"
              >
                <FileText className="w-5 h-5 mr-3" />
                Reports
              </a>

              <a
                href="#"
                className="flex items-center px-4 py-2 text-sm font-medium text-gray-600 rounded-md hover:bg-gray-100"
              >
                <LogOut className="w-5 h-5 mr-3" />
                Logout
              </a>
            </nav>
          </div>
        </div>
      )}

      {/* Main content */}
      <div className="flex flex-col flex-1 overflow-hidden">
        {/* Top navigation */}
        <div className="flex items-center justify-between h-16 px-4 border-b bg-white">
          <div className="flex items-center">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 text-gray-400 rounded-md md:hidden hover:text-gray-500 hover:bg-gray-100"
              onClick={() => setIsOpen(true)}
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
          <div className="flex items-center space-x-4">
            <button className="p-2 text-gray-500 rounded-full hover:bg-gray-100">
              <Bell className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Dashboard content */}
        <div className="flex-1 p-6 overflow-y-auto">
          <h1 className="text-2xl font-bold text-gray-900 mb-6">
            District Overview
          </h1>

          {/* Overview widgets */}
          <div className="grid grid-cols-1 gap-6 mb-6 md:grid-cols-3">
            {/* Card 1 */}
            <div className="bg-white rounded-lg shadow-sm border p-4">
              <div className="pb-2">
                <h3 className="text-sm font-medium text-gray-500">
                  Total clinics
                </h3>
              </div>
              <div>
                <div className="text-2xl font-bold">27/32 reporting (84%)</div>
                <div className="flex items-center mt-1">
                  <Calendar className="w-4 h-4 mr-1 text-gray-500" />
                  <p className="text-xs text-gray-500">
                    Data last updated: {formattedDate}
                  </p>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-lg shadow-sm border p-4">
              <div className="pb-2">
                <h3 className="text-sm font-medium text-gray-500">
                  Stockout rate
                </h3>
              </div>
              <div>
                <div className="text-2xl font-bold">12%</div>
                <p className="text-xs text-green-600">↓ 3% from last month</p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-lg shadow-sm border p-4">
              <div className="pb-2">
                <h3 className="text-sm font-medium text-gray-500">
                  Most needed medicine
                </h3>
              </div>
              <div>
                <div className="text-2xl font-bold">Coartem</div>
                <p className="text-xs text-red-600">8 clinics critical</p>
              </div>
            </div>
          </div>

          {/* Actionable tables */}
          <div className="grid grid-cols-1 gap-6 mb-6 lg:grid-cols-2">
            {/* Table 1 */}
            <div className="bg-white rounded-lg shadow-sm border">
              <div className="p-4 border-b">
                <h3 className="text-lg font-medium">
                  Clinics Needing Attention
                </h3>
              </div>
              <div className="p-4">
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Clinic Name
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Last Reported
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Stockouts
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          Kisenyi HC
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          2 days ago
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          3 medicines
                        </td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          Kawempe HC
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          1 days ago
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          2 medicines
                        </td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          Naguru HC
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          3 days ago
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          1 medicines
                        </td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          Kiswa HC
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          4 days ago
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          2 medicines
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Table 2 */}
            <div className="bg-white rounded-lg shadow-sm border">
              <div className="p-4 border-b">
                <h3 className="text-lg font-medium">Emergency Requests</h3>
              </div>
              <div className="p-4">
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Medicine
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Clinics Affected
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Urgency
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          Coartem
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          5
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-500 text-white">
                            🔴 High
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          Paracetamol
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          3
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-500 text-white">
                            🟡 Medium
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          Amoxicillin
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          4
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-500 text-white">
                            🔴 High
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          ORS
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          2
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-500 text-white">
                            🟡 Medium
                          </span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

          {/* Quick actions */}
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            <button className="flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-[#0066CC] rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
              <Package className="w-4 h-4 mr-2" />
              Request Emergency Supply
            </button>
            <button className="flex items-center justify-center px-4 py-2 text-sm font-medium text-[#0066CC] bg-white border border-[#0066CC] rounded-md hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
              <Download className="w-4 h-4 mr-2" />
              Export District Report
            </button>
            <button className="flex items-center justify-center px-4 py-2 text-sm font-medium text-[#0066CC] bg-white border border-[#0066CC] rounded-md hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
              <MessageSquare className="w-4 h-4 mr-2" />
              Send District Report
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
