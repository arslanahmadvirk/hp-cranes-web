import Navbar from "@/components/Navbar";
import MobileNavbar from "@/components/NavbarMobile";
import useMediaQuery from "@/hooks/useMediaQuery";

export default function Home() {
  const isMobileScreen = useMediaQuery("(max-width: 768px)");
  return <>{isMobileScreen ? <MobileNavbar /> : <Navbar />}</>;
}
