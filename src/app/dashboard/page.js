import { AlertBar } from "@/components/AlertBar";
import { BottomNav } from "@/components/BottomNav";
import { Header } from "@/components/Header";
import { MedicineTable } from "@/components/MedicineTable";
import { QuickActions } from "@/components/QuickActions";
import { getMedicines } from "@/lib/data";

export default function Dashboard() {
  const medicines = getMedicines();
  const hasLowStock = medicines.some(
    (medicine) => medicine.currentStock / medicine.threshold < 0.2
  );

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header role="Nurse" facility="Kisenyi HC IV" />

      {hasLowStock && (
        <AlertBar message="Emergency: Some medicines are below 20% threshold!" />
      )}

      <main className="flex-1 container mx-auto px-4 py-6 max-w-md">
        <h1 className="sr-only">Health Worker Dashboard</h1>

        <QuickActions />

        <div className="mt-6">
          <h2 className="text-xl font-bold mb-4">Medicine Inventory</h2>
          <MedicineTable medicines={medicines} />
        </div>
      </main>

      <BottomNav />
    </div>
  );
}
