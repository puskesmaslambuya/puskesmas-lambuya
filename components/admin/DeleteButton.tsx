"use client";

import { TrashIcon } from "@heroicons/react/24/outline";

type DeleteButtonProps = {
  action: () => void | Promise<void>;
  confirmMessage?: string;
};

export default function DeleteButton({
  action,
  confirmMessage = "Yakin ingin menghapus data ini? Tindakan ini tidak bisa dibatalkan.",
}: DeleteButtonProps) {
  return (
    <form
      action={action}
      onSubmit={(event) => {
        if (!window.confirm(confirmMessage)) {
          event.preventDefault();
        }
      }}
    >
      <button
        type="submit"
        aria-label="Hapus"
        className="rounded-lg p-2 text-slate-400 transition-colors hover:bg-red-50 hover:text-red-600"
      >
        <TrashIcon className="h-4 w-4" />
      </button>
    </form>
  );
}
