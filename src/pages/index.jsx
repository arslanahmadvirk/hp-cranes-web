import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import MobileNavbar from "@/components/NavbarMobile";
import useMediaQuery from "@/hooks/useMediaQuery";
import Head from "next/head";

export default function Home() {
  const isMobileScreen = useMediaQuery("(max-width: 768px)");
  return (
    <>
      <Head>
        <title>Home | HP Cranes</title>
      </Head>
      {isMobileScreen ? <MobileNavbar /> : <Navbar />}
      <Footer />
    </>
  );
}
