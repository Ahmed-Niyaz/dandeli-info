import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default async function RootLayout({ children }) {
  return (
    <div className="flex flex-col min-h-screen relative">
      <Navbar />
      <main className="flex-grow mt-16 md:mt-15">
        {children}
      </main>
      <Footer />
    </div>
  );
}
