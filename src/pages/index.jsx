import ContactUs from "@/components/ContactUs";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import MobileNavbar from "@/components/NavbarMobile";
import CountUp from "react-countup";
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
      <div className="flex lg:flex-row flex-col-reverse lg:gap-0 gap-20 justify-between items-center py-20 mx-5">
        <div className="lg:basis-1/2 basis-full ">
          <h2 className="font-semibold text-xl mb-4">We Commit Ourselves:</h2>
          <ul className="list-disc mx-8 md:text-base text-sm">
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
            className="2xl:w-[650px] md:w-[550px] w-[450px] lg:ml-auto rounded-xl md:shadow-yellow-down shadow"
          />
        </div>
      </div>
    </div>
  );
}

function Statistics() {
  const statistics = [
    { item_name: "Projects Completed", value: 1240 },
    { item_name: "Happy Clients", value: 1750 },
    { item_name: "Workers Employed", value: 984 },
    { item_name: "Awards Won", value: 96 },
  ];
  return (
    <div className="py-20">
      <div className="bg-statistics bg-cover bg-center">
        <div className="relative top-0 py-16 bg-black/80">
          <div className="container 2xl:max-w-screen-2xl mx-auto">
            <div className="grid md:grid-cols-4 md:grid-rows-1 grid-cols-2 grid-rows-2 gap-8">
              {statistics.map(({ item_name, value }, index) => (
                <div key={index} className="text-white text-center">
                  <h1 className="text-4xl font-bold">
                    <CountUp end={value} duration={1} />
                  </h1>
                  <h4 className="md:text-lg">{item_name}</h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
