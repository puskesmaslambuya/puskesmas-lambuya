"use client";

import { useTransition } from "react";
import { cn } from "@/lib/utils";
import { updatePengaduanStatus } from "@/lib/admin/actions";

const STATUS_OPTIONS = ["Baru", "Diproses", "Selesai"];

const STATUS_COLOR: Record<string, string> = {
  Baru: "bg-amber-50 text-amber-700",
  Diproses: "bg-secondary-50 text-secondary-dark",
  Selesai: "bg-primary-50 text-primary-dark",
};

type PengaduanStatusSelectProps = {
  id: string;
  status: string;
};

export default function PengaduanStatusSelect({ id, status }: PengaduanStatusSelectProps) {
  const [isPending, startTransition] = useTransition();

  return (
    <select
      value={status}
      disabled={isPending}
      onChange={(event) => {
        const newStatus = event.target.value;
        startTransition(() => {
          updatePengaduanStatus(id, newStatus);
        });
      }}
      className={cn(
        "rounded-lg border-0 px-2.5 py-1.5 text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-primary/30",
        STATUS_COLOR[status] ?? "bg-slate-100 text-slate-600"
      )}
    >
      {STATUS_OPTIONS.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
}
