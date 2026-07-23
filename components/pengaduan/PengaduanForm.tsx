"use client";

import { useState, type FormEvent } from "react";
import { CheckCircleIcon, ExclamationTriangleIcon } from "@heroicons/react/24/outline";
import { createSupabaseBrowserClient } from "@/lib/supabase/client";
import { PENGADUAN_KATEGORI } from "@/lib/data/pengaduan";
import type { PengaduanKategori } from "@/types/pengaduan";

type StatusKirim = "idle" | "loading" | "sukses" | "gagal";

const NILAI_AWAL = {
  nama: "",
  kontak: "",
  category: PENGADUAN_KATEGORI[0] as PengaduanKategori,
  message: "",
};

export default function PengaduanForm() {
  const [values, setValues] = useState(NILAI_AWAL);
  const [status, setStatus] = useState<StatusKirim>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!values.nama.trim() || !values.kontak.trim() || !values.message.trim()) {
      setStatus("gagal");
      setErrorMsg("Mohon lengkapi nama, kontak, dan isi pengaduan.");
      return;
    }

    setStatus("loading");
    setErrorMsg("");

    try {
      const supabase = createSupabaseBrowserClient();
      const { error } = await supabase.from("pengaduan").insert({
        nama: values.nama.trim(),
        kontak: values.kontak.trim(),
        category: values.category,
        message: values.message.trim(),
        status: "Baru",
      });

      if (error) throw new Error(error.message);

      setStatus("sukses");
      setValues(NILAI_AWAL);
    } catch (error) {
      setStatus("gagal");
      setErrorMsg(
        error instanceof Error
          ? error.message
          : "Gagal mengirim pengaduan. Silakan coba lagi atau hubungi kami via WhatsApp/Email."
      );
    }
  }

  if (status === "sukses") {
    return (
      <div className="flex flex-col items-center gap-3 rounded-2xl border border-primary/30 bg-primary-50 p-8 text-center">
        <CheckCircleIcon className="h-12 w-12 text-primary" />
        <h3 className="text-lg font-semibold text-slate-900">Pengaduan Terkirim</h3>
        <p className="text-sm leading-relaxed text-slate-600">
          Terima kasih, pengaduan Anda telah kami terima dan akan segera ditindaklanjuti oleh
          Tim Puskesmas Lambuya.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="btn-secondary mt-2"
        >
          Kirim Pengaduan Lain
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-card sm:p-8"
    >
      <h3 className="text-lg font-semibold text-slate-900">Form Pengaduan</h3>

      <div>
        <label htmlFor="nama" className="mb-1.5 block text-sm font-medium text-slate-700">
          Nama Lengkap
        </label>
        <input
          id="nama"
          type="text"
          value={values.nama}
          onChange={(event) => setValues((prev) => ({ ...prev, nama: event.target.value }))}
          placeholder="Masukkan nama Anda"
          className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm text-slate-700 placeholder:text-slate-400 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
        />
      </div>

      <div>
        <label htmlFor="kontak" className="mb-1.5 block text-sm font-medium text-slate-700">
          Nomor HP / Email
        </label>
        <input
          id="kontak"
          type="text"
          value={values.kontak}
          onChange={(event) => setValues((prev) => ({ ...prev, kontak: event.target.value }))}
          placeholder="08xxxxxxxxxx atau email@contoh.com"
          className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm text-slate-700 placeholder:text-slate-400 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
        />
      </div>

      <div>
        <label htmlFor="category" className="mb-1.5 block text-sm font-medium text-slate-700">
          Kategori Pengaduan
        </label>
        <select
          id="category"
          value={values.category}
          onChange={(event) =>
            setValues((prev) => ({
              ...prev,
              category: event.target.value as PengaduanKategori,
            }))
          }
          className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm text-slate-700 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
        >
          {PENGADUAN_KATEGORI.map((kategori) => (
            <option key={kategori} value={kategori}>
              {kategori}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-slate-700">
          Isi Pengaduan
        </label>
        <textarea
          id="message"
          rows={5}
          value={values.message}
          onChange={(event) => setValues((prev) => ({ ...prev, message: event.target.value }))}
          placeholder="Jelaskan keluhan/pengaduan Anda secara rinci..."
          className="w-full resize-none rounded-xl border border-slate-200 px-4 py-2.5 text-sm text-slate-700 placeholder:text-slate-400 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
        />
      </div>

      {status === "gagal" && (
        <p className="flex items-start gap-2 rounded-xl bg-red-50 p-3 text-sm text-red-700">
          <ExclamationTriangleIcon className="mt-0.5 h-4 w-4 shrink-0" />
          {errorMsg}
        </p>
      )}

      <button type="submit" disabled={status === "loading"} className="btn-primary mt-1 disabled:opacity-60">
        {status === "loading" ? "Mengirim..." : "Kirim Pengaduan"}
      </button>

      <p className="text-xs leading-relaxed text-slate-400">
        Data yang Anda kirimkan hanya digunakan untuk keperluan penanganan pengaduan dan tidak
        disebarluaskan.
      </p>
    </form>
  );
}
