import type { UserData } from "@/schemas/data";
import { columns, DataTable } from "@/components/data-table";

const data: UserData[] = [
  {
    id: 1,
    name: "John Doe",
    city: "New York",
  },
  {
    id: 2,
    name: "Jane Doe",
    city: "Los Angeles",
  },
  {
    id: 3,
    name: "John Smith",
    city: "Chicago",
  },
  {
    id: 4,
    name: "Jane Smith",
    city: "Bakersfield",
  },
];

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <div className="w-full max-w-4xl">
        <DataTable columns={columns} data={data} />
      </div>
    </main>
  );
}
