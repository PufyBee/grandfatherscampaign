// campaignsite/app/layout.js
import "./styles/globals.css";               // your Tailwind import file
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata = {
  title: "Rod Macpherson Campaign",
  description: "For clean water in Montevallo",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow container mx-auto px-4 py-8">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
