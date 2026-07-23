import type { Metadata } from "next";
import LoginForm from "./LoginForm";

// Wajib untuk Cloudflare Pages (lihat wrangler.toml)
export const runtime = "edge";

export const metadata: Metadata = {
  title: "Masuk Admin",
  robots: { index: false, follow: false },
};

export default function AdminLoginPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-primary-50 via-white to-secondary-50 px-4">
      <LoginForm />
    </div>
  );
}
