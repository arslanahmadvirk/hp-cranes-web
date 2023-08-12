import ContactUs from "@/components/ContactUs";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import MobileNavbar from "@/components/NavbarMobile";
import SectionHeading from "@/components/SectionHeading";
import useMediaQuery from "@/hooks/useMediaQuery";
import Head from "next/head";
import Image from "next/image";

export default function Home() {
  const isMobileScreen = useMediaQuery("(max-width: 768px)");
  return (
    <>
      <Head>
        <title>Home | HP Cranes</title>
      </Head>
      {isMobileScreen ? <MobileNavbar /> : <Navbar />}
      <Statistics />
      <WhyChooseUs />
      <ContactUs />
      <Footer />
    </>
  );
}

function WhyChooseUs() {
  return (
    <div className="container 2xl:max-w-screen-2xl mx-auto">
      <SectionHeading heading={"Why Choose HP Cranes ?"} />
      <div className="flex lg:flex-row flex-col-reverse lg:gap-0 gap-20 justify-between items-center py-20 mx-10">
        <div className="lg:basis-1/2 basis-full">
          <h2 className="font-semibold text-xl mb-4">We Commit Ourselves:</h2>
          <ul className="list-disc mx-8">
            <li>
              To A Service That Meets The Requirements Of Our Clients, First
              Time, Every Time
            </li>
            <li>To Provide Well Managed, Trained And Motivated Personnel</li>
            <li>
              To Meeting Any Regulatory And Statutory Requirements Applicable To
              Our Business
            </li>
            <li>
              To Meeting Any Regulatory And Statutory Requirements Applicable To
              Our Business
            </li>
            <li>
              To The Development And Maintenance Of A QUALITY SYSTEM Designed
              To:
            </li>
            <li>– Ensure Continuous Improvement.</li>
            <li>– Meet The Requirements Of SABS ISO 9001 : 2015.</li>
            <br />
            <li>
              To Rendering Above Average Services To The Satisfaction Of Our
              Clients In The Field O Materials Handling Equipment And Service
              That Will Highlight Our Competence.
            </li>
            <li>
              The Quality Policy Will Be Reviewed Annually To Ensure It Is
              Current.
            </li>
          </ul>
        </div>
        <div className="relative lg:basis-1/2 basis-full">
          <Image
            src={"/images/hp-cranes-img-1.png"}
            width={762}
            height={536}
            alt="HP Cranes Image"
            className="2xl:w-[650px] w-[550px] ml-auto rounded-xl shadow-yellow-down"
          />
        </div>
      </div>
    </div>
  );
}

function Statistics() {
  return <div className="container 2xl:max-w-screen-2xl mx-auto"></div>;
}
