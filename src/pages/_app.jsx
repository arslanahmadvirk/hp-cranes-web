import BackToTop from "@/components/BackToTop";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import MobileNavbar from "@/components/NavbarMobile";
import "@/styles/globals.css";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});
export default function App({ Component, pageProps }) {
  return (
    <main className={`${montserrat.variable} font-montserrat`}>
      <Component {...pageProps} />
    </main>
  );
}
