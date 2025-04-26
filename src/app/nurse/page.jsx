import Button from "@/components/common/button";
import { User } from "lucide-react";
import React from "react";

export default function Nurse() {
  return (
    <div>
      <main>
        <header>
          <div className="bg-white border-b border-gray-200 py-4 px-4 shadow-sm">
            <div className="flex items-start gap-6">
              <div className="bg-blue-100 p-2 rounded-full">
                <User className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <p className="text-lg font-medium">Logged in as Nurse</p>
                <p className="text-sm text-gray-600">Kisenyi HC IV</p>
              </div>
            </div>
          </div>
        </header>
        <table>
          <thead>
            <tr>
              <th className="text-left p-4">Medicine</th>
              <th className="text-left p-4">Total Stock</th>
              <th className="text-left p-4">Used Stock</th>
              <th className="text-left p-4">Remaining Stock</th>
              <th className="text-left p-4">Status</th>
              <div className="flex flex-row gap-10 pt-5">
                <Button text="Update Stock" />
                <Button text="Add New Stock" />
                <Button text="Delete Stock" />
              </div>
            </tr>
          </thead>
          <tbody>
            {/* Example data */}
            <tr>
              <td className="p-4">Paracetamol</td>
              <td className="p-4">50</td>
              <td className="p-4">20</td>
              <td className="p-4">20</td>
              <td className="p-4">Good</td>
            </tr>
            <tr>
              <td className="p-4">Paracetamol</td>
              <td className="p-4">50</td>
              <td className="p-4">20</td>
              <td className="p-4">20</td>

              <td className="p-4">Good</td>
            </tr>
            <tr>
              <td className="p-4">Paracetamol</td>
              <td className="p-4">50</td>
              <td className="p-4">20</td>
              <td className="p-4">20</td>

              <td className="p-4">Good</td>
            </tr>
            <tr>
              <td className="p-4">Paracetamol</td>
              <td className="p-4">50</td>
              <td className="p-4">20</td>
              <td className="p-4">20</td>

              <td className="p-4">Good</td>
            </tr>
            {/* Add more rows as needed */}
          </tbody>
        </table>
      </main>
    </div>
  );
}
