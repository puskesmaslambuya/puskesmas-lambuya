import { ClockIcon } from "@heroicons/react/24/outline";
import type { JadwalLayanan } from "@/types/layanan";

type JadwalTableProps = {
  jadwal: JadwalLayanan[];
};

export default function JadwalTable({ jadwal }: JadwalTableProps) {
  return (
    <div className="rounded-2xl border border-slate-100 bg-surface-muted p-6">
      <h3 className="flex items-center gap-2 text-base">
        <ClockIcon className="h-5 w-5 text-primary-dark" />
        Jadwal Pelayanan
      </h3>
      <ul className="mt-4 space-y-2">
        {jadwal.map((item) => (
          <li
            key={item.hari}
            className="flex items-center justify-between rounded-xl bg-white px-4 py-2.5 text-sm shadow-card"
          >
            <span className="font-medium text-slate-700">{item.hari}</span>
            <span className="text-slate-600">{item.jam}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
