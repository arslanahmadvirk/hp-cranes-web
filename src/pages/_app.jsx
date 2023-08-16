import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import MobileNavbar from "@/components/NavbarMobile";
import useMediaQuery from "@/hooks/useMediaQuery";
import "@/styles/globals.css";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});
export default function App({ Component, pageProps }) {
  const isMobileScreen = useMediaQuery("(max-width: 768px)");

  return (
    <main className={`${montserrat.variable} font-montserrat`}>
      {isMobileScreen ? <MobileNavbar /> : <Navbar />}

      <Component {...pageProps} />
      <Footer />
    </main>
  );
}
