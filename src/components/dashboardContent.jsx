"use client";

import { useState, useRef, useEffect } from "react";
import {
  AlertTriangle,
  ArrowUpRight,
  Download,
  FileUp,
  Plus,
  RefreshCw,
  Search,
  Trash,
  UserPlus,
} from "lucide-react";

// Modal component
function Modal({ isOpen, onClose, title, description, children, footer }) {
  const modalRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "auto";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50">
      <div
        ref={modalRef}
        className="w-full max-w-md rounded-lg bg-white shadow-lg"
      >
        <div className="p-6">
          <h2 className="text-lg font-semibold">{title}</h2>
          {description && (
            <p className="mt-2 text-sm text-gray-500">{description}</p>
          )}
        </div>
        <div className="px-6 py-2">{children}</div>
        {footer && (
          <div className="border-t p-4 flex justify-end gap-2">{footer}</div>
        )}
      </div>
    </div>
  );
}

// Alert Dialog component
function AlertDialog({
  isOpen,
  onClose,
  onConfirm,
  title,
  description,
  children,
}) {
  const dialogRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dialogRef.current && !dialogRef.current.contains(event.target)) {
        onClose();
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "auto";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50">
      <div
        ref={dialogRef}
        className="w-full max-w-md rounded-lg bg-white shadow-lg"
      >
        <div className="p-6">
          <h2 className="text-lg font-semibold">{title}</h2>
          <p className="mt-2 text-sm text-gray-500">{description}</p>
        </div>
        {children && <div className="px-6 py-2">{children}</div>}
        <div className="border-t p-4 flex justify-end gap-2">
          <button
            className="px-4 py-2 rounded-md border border-gray-300 text-sm font-medium hover:bg-gray-50"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className="px-4 py-2 rounded-md bg-red-600 text-white text-sm font-medium hover:bg-red-700"
            onClick={onConfirm}
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
}

export function DashboardContent() {
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [isAddOfficerModalOpen, setIsAddOfficerModalOpen] = useState(false);
  const [isDeactivateModalOpen, setIsDeactivateModalOpen] = useState(false);
  const [isThresholdModalOpen, setIsThresholdModalOpen] = useState(false);
  const [isAlertDialogOpen, setIsAlertDialogOpen] = useState(false);

  const refreshData = () => {
    setIsRefreshing(true);
    setTimeout(() => {
      setIsRefreshing(false);
    }, 1500);
  };

  const activityLogs = [
    {
      timestamp: "Today 08:23",
      user: "admin1",
      action: "Changed Coartem threshold",
      ipAddress: "196.43.255.56",
    },
    {
      timestamp: "Today 07:15",
      user: "district_officer3",
      action: "Added new clinic",
      ipAddress: "196.43.112.89",
    },
    {
      timestamp: "Yesterday 16:42",
      user: "admin2",
      action: "Deactivated clinic #1243",
      ipAddress: "196.43.255.12",
    },
    {
      timestamp: "Yesterday 14:30",
      user: "super_admin",
      action: "Broadcast district alert",
      ipAddress: "196.43.255.100",
    },
    {
      timestamp: "2 days ago",
      user: "district_officer7",
      action: "Updated inventory",
      ipAddress: "196.43.118.45",
    },
  ];

  return (
    <div className="container mx-auto p-4 md:p-6 space-y-8">
      {/* National Overview Header */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold">National Overview</h2>
          <div className="flex items-center gap-2">
            <button
              className={`flex items-center px-3 py-1.5 text-sm font-medium rounded-md border border-gray-300 ${
                isRefreshing
                  ? "opacity-50 cursor-not-allowed"
                  : "hover:bg-gray-50"
              }`}
              onClick={refreshData}
              disabled={isRefreshing}
            >
              <RefreshCw
                className={`h-4 w-4 mr-2 ${isRefreshing ? "animate-spin" : ""}`}
              />
              Refresh Data
            </button>
            <span className="text-sm text-gray-500">
              Last updated: Today 09:15 AM
            </span>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {/* Total Clinics Card */}
          <div className="rounded-lg border bg-white shadow">
            <div className="p-4 border-b">
              <h3 className="text-lg font-medium">Total Clinics</h3>
              <p className="text-sm text-gray-500">
                Nationwide reporting status
              </p>
            </div>
            <div className="p-4">
              <div className="text-3xl font-bold">1,243</div>
              <div className="mt-1 flex items-center">
                <div className="h-2 w-full rounded-full bg-gray-200">
                  <div
                    className="h-2 rounded-full bg-green-500"
                    style={{ width: "87%" }}
                  ></div>
                </div>
                <span className="ml-2 text-sm font-medium text-gray-500">
                  87% reporting
                </span>
              </div>
            </div>
          </div>

          {/* Critical Stockouts Card */}
          <div className="rounded-lg border bg-white shadow">
            <div className="p-4 border-b">
              <h3 className="text-lg font-medium">Critical Stockouts</h3>
              <p className="text-sm text-gray-500">
                Facilities with medicine shortages
              </p>
            </div>
            <div className="p-4">
              <div className="text-3xl font-bold text-amber-600">127</div>
              <div className="mt-1 flex items-center">
                <span className="inline-flex items-center rounded-md border border-amber-200 bg-amber-50 px-2 py-1 text-xs font-medium text-amber-600">
                  <AlertTriangle className="mr-1 h-3 w-3" />
                  Requires attention
                </span>
              </div>
            </div>
          </div>

          {/* Districts Alerted Card */}
          <div className="rounded-lg border bg-white shadow">
            <div className="p-4 border-b">
              <h3 className="text-lg font-medium">Districts Alerted</h3>
              <p className="text-sm text-gray-500">
                Districts with active alerts
              </p>
            </div>
            <div className="p-4">
              <div className="text-3xl font-bold text-red-600">23/135</div>
              <div className="mt-1">
                <button
                  className="w-full flex items-center justify-center px-4 py-2 rounded-md bg-red-600 text-white font-medium hover:bg-red-700"
                  onClick={() => setIsAlertDialogOpen(true)}
                >
                  <AlertTriangle className="mr-2 h-4 w-4" />
                  Broadcast Nationwide Alert
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* System Management Cards */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold">System Management</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {/* User Administration Card */}
          <div className="rounded-lg border bg-white shadow">
            <div className="p-4 border-b">
              <h3 className="text-lg font-medium">User Administration</h3>
              <p className="text-sm text-gray-500">
                Manage system users and clinics
              </p>
            </div>
            <div className="p-4 space-y-4">
              <button
                className="w-full flex items-center justify-center px-4 py-2 rounded-md bg-blue-600 text-white font-medium hover:bg-blue-700"
                onClick={() => setIsAddOfficerModalOpen(true)}
              >
                <UserPlus className="mr-2 h-4 w-4" />
                Add District Officer
              </button>
              <button
                className="w-full flex items-center justify-center px-4 py-2 rounded-md bg-red-600 text-white font-medium hover:bg-red-700"
                onClick={() => setIsDeactivateModalOpen(true)}
              >
                <Trash className="mr-2 h-4 w-4" />
                Deactivate Clinic
              </button>
            </div>
            <div className="p-4 border-t">
              <p className="text-sm text-gray-500">
                All actions available with super-admin privileges
              </p>
            </div>
          </div>

          {/* Content Controls Card */}
          <div className="rounded-lg border bg-white shadow">
            <div className="p-4 border-b">
              <h3 className="text-lg font-medium">Content Controls</h3>
              <p className="text-sm text-gray-500">
                Update system thresholds and content
              </p>
            </div>
            <div className="p-4 space-y-4">
              <button
                className="w-full flex items-center justify-center px-4 py-2 rounded-md bg-blue-600 text-white font-medium hover:bg-blue-700"
                onClick={() => setIsThresholdModalOpen(true)}
              >
                <FileUp className="mr-2 h-4 w-4" />
                Update Medicine Thresholds
              </button>
              <button className="w-full flex items-center justify-center px-4 py-2 rounded-md border border-gray-300 text-gray-700 font-medium hover:bg-gray-50">
                <Plus className="mr-2 h-4 w-4" />
                Add New Medicine Type
              </button>
            </div>
            <div className="p-4 border-t">
              <p className="text-sm text-gray-500">
                Changes will be applied to all clinics in the system
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Security & Logs */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold">Security & Logs</h2>
          <div className="flex items-center gap-2">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
              <input
                type="search"
                placeholder="Search logs..."
                className="w-full rounded-md border border-gray-300 py-2 pl-8 pr-3 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 md:w-[300px]"
              />
            </div>
            <button className="flex items-center px-3 py-2 rounded-md border border-gray-300 text-sm font-medium hover:bg-gray-50">
              <Download className="mr-2 h-4 w-4" />
              Export Full Audit Log
            </button>
          </div>
        </div>

        <div className="rounded-lg border bg-white shadow">
          <div className="p-4 border-b">
            <h3 className="text-lg font-medium">Recent Activity</h3>
            <p className="text-sm text-gray-500">
              System activity and audit trail
            </p>
          </div>
          <div className="p-4">
            <div className="overflow-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Timestamp
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      User
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Action
                    </th>
                    <th
                      scope="col"
                      className="hidden md:table-cell px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      IP Address
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Details
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {activityLogs.map((log, index) => (
                    <tr key={index}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {log.timestamp}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {log.user}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {log.action}
                      </td>
                      <td className="hidden md:table-cell px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {log.ipAddress}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm">
                        <button className="text-gray-500 hover:text-gray-700">
                          <ArrowUpRight className="h-4 w-4" />
                          <span className="sr-only">View details</span>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="p-4 border-t flex items-center justify-between">
            <div className="text-sm text-gray-500">
              Showing 5 of 1,234 entries
            </div>
            <div className="flex items-center gap-2">
              <button
                className="px-3 py-1 rounded-md border border-gray-300 text-sm font-medium text-gray-400 cursor-not-allowed"
                disabled
              >
                Previous
              </button>
              <button className="px-3 py-1 rounded-md border border-gray-300 text-sm font-medium hover:bg-gray-50">
                Next
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Add District Officer Modal */}
      <Modal
        isOpen={isAddOfficerModalOpen}
        onClose={() => setIsAddOfficerModalOpen(false)}
        title="Add District Officer"
        description="Add a new district officer with NIN verification."
        footer={
          <>
            <button
              className="px-4 py-2 rounded-md border border-gray-300 text-sm font-medium hover:bg-gray-50"
              onClick={() => setIsAddOfficerModalOpen(false)}
            >
              Cancel
            </button>
            <button
              className="px-4 py-2 rounded-md bg-blue-600 text-white text-sm font-medium hover:bg-blue-700"
              onClick={() => setIsAddOfficerModalOpen(false)}
            >
              Verify & Create Account
            </button>
          </>
        }
      >
        <div className="grid gap-4 py-4">
          <div className="grid gap-2">
            <label htmlFor="name" className="text-sm font-medium">
              Full Name
            </label>
            <input
              id="name"
              placeholder="Enter full name"
              className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>
          <div className="grid gap-2">
            <label htmlFor="nin" className="text-sm font-medium">
              National ID Number (NIN)
            </label>
            <input
              id="nin"
              placeholder="Enter NIN"
              className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>
          <div className="grid gap-2">
            <label htmlFor="district" className="text-sm font-medium">
              District
            </label>
            <input
              id="district"
              placeholder="Select district"
              className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>
          <div className="grid gap-2">
            <label htmlFor="email" className="text-sm font-medium">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="Enter email address"
              className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>
        </div>
      </Modal>

      {/* Deactivate Clinic Modal */}
      <AlertDialog
        isOpen={isDeactivateModalOpen}
        onClose={() => setIsDeactivateModalOpen(false)}
        onConfirm={() => setIsDeactivateModalOpen(false)}
        title="Deactivate Clinic"
        description="This action will deactivate the clinic and all its users. This action will be logged in the audit trail."
      >
        <div className="py-4">
          <input
            placeholder="Enter clinic ID to confirm"
            className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>
      </AlertDialog>

      {/* Update Medicine Thresholds Modal */}
      <Modal
        isOpen={isThresholdModalOpen}
        onClose={() => setIsThresholdModalOpen(false)}
        title="Update Medicine Thresholds"
        description="Upload a CSV file with updated medicine thresholds."
        footer={
          <>
            <button
              className="px-4 py-2 rounded-md border border-gray-300 text-sm font-medium hover:bg-gray-50"
              onClick={() => setIsThresholdModalOpen(false)}
            >
              Cancel
            </button>
            <button
              className="px-4 py-2 rounded-md bg-blue-600 text-white text-sm font-medium hover:bg-blue-700"
              onClick={() => setIsThresholdModalOpen(false)}
            >
              Upload and Apply
            </button>
          </>
        }
      >
        <div className="grid gap-4 py-4">
          <div className="rounded-lg border border-dashed p-8 text-center">
            <div className="mx-auto flex max-w-[420px] flex-col items-center justify-center">
              <FileUp className="h-10 w-10 text-gray-400" />
              <h3 className="mt-4 text-lg font-semibold">Upload CSV file</h3>
              <p className="mt-2 text-sm text-gray-500">
                Drag and drop your CSV file here, or click to browse
              </p>
              <button className="mt-4 px-4 py-2 rounded-md border border-gray-300 text-sm font-medium hover:bg-gray-50">
                Browse Files
              </button>
            </div>
          </div>
          <div>
            <h4 className="mb-2 text-sm font-medium">
              CSV Format Requirements:
            </h4>
            <ul className="list-inside list-disc text-sm text-gray-500">
              <li>Medicine Name, Minimum Threshold, Critical Threshold</li>
              <li>Include header row</li>
              <li>Maximum file size: 5MB</li>
            </ul>
          </div>
        </div>
      </Modal>

      {/* Alert Dialog */}
      <AlertDialog
        isOpen={isAlertDialogOpen}
        onClose={() => setIsAlertDialogOpen(false)}
        onConfirm={() => setIsAlertDialogOpen(false)}
        title="Broadcast Emergency Alert"
        description="This will send an emergency alert to ALL districts and clinics in the system. This action should only be used for critical nationwide emergencies."
      />
    </div>
  );
}
