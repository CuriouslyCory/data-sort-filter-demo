"use client";

import { Input } from "@/components/ui/input";
import type { Table } from "@tanstack/react-table";
import type { ChangeEvent } from "react";

type DataTableSearchProps<TData> = {
  table: Table<TData>;
};

export function DataTableSearch<TData>({ table }: DataTableSearchProps<TData>) {
  return (
    <div className="flex items-center py-4">
      <Input
        placeholder="Search all columns..."
        value={(table.getState().globalFilter ?? "") as string}
        onChange={(event: ChangeEvent<HTMLInputElement>) =>
          table.setGlobalFilter(event.target.value)
        }
        className="max-w-sm"
      />
    </div>
  );
}
