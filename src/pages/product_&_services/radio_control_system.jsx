import Hero from "@/components/Hero";
import SectionHeading from "@/components/SectionHeading";
import SlickSlider from "@/components/SlickSlider";
import WebLayout from "@/layouts/WebLayout";
import Head from "next/head";
import Image from "next/image";

export default function RadioControlSystem() {
  return (
    <>
      <Head>
        <title>Radio Control System | HP Cranes</title>
      </Head>
      <WebLayout>
        <div className=" 2xl:max-w-screen-2xl mx-auto">
          <Hero pageName={"Product & Services"} />
          <div className="container mx-auto my-24">
            <SectionHeading heading={"Radio Control System"} />
            <div className="flex flex-wrap lg:flex-nowrap justify-between items-center mt-14 gap-12">
              <div className="lg:w-1/2 w-full mx-5 lg:mx-0">
                <Image
                  src={"/images/products/radio-control-system.png"}
                  alt="radio-control-System Image"
                  height={543}
                  width={943}
                  className="w-full rounded-xl"
                />
              </div>
              <div className="lg:w-1/2 w-full lg:mx-0 mx-10">
                <p className="text-justify">
                  HP CRANES CONSULTING is committed to providing safe, reliable
                  and affordable RRCs to the many different industries. We
                  strive to make your machine operation safer and more
                  economical. Thank you for your interest in our RRCs, and we
                  look forward to working with you on control solutions for your
                  equipment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </WebLayout>
    </>
  );
}
