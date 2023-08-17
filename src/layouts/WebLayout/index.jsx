import BackToTop from "@/components/BackToTop";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import MobileNavbar from "@/components/NavbarMobile";
import useMediaQuery from "@/hooks/useMediaQuery";

export default function WebLayout({ children }) {
  const isMobileScreen = useMediaQuery("(max-width: 768px)");
  return (
    <>
      {isMobileScreen ? <MobileNavbar /> : <Navbar />}
      {children}
      <BackToTop />
      <Footer />
    </>
  );
}
