import { Geist } from "next/font/google";
import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";

const manrope = Geist({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <main className={manrope.className}>{children}</main>
      <Footer />
    </>
  );
}
