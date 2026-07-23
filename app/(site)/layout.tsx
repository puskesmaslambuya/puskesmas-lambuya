import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

/**
 * Layout khusus untuk semua halaman publik (Beranda, Profil, Layanan, dst).
 * Route group "(site)" tidak memengaruhi URL — /profil tetap /profil.
 * Dipisah dari /admin agar Navbar & Footer situs publik tidak ikut
 * tampil di Panel Admin.
 */
export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </>
  );
}
