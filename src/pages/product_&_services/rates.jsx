import Hero from "@/components/Hero";
import SectionHeading from "@/components/SectionHeading";
import SlickSlider from "@/components/SlickSlider";
import WebLayout from "@/layouts/WebLayout";
import Head from "next/head";
import Image from "next/image";

export default function Construction() {
  return (
    <>
      <Head>
        <title>Rates | HP Cranes</title>
      </Head>
      <WebLayout>
        <div className=" 2xl:max-w-screen-2xl mx-auto">
          <Hero pageName={"Product & Services"} />
          <div className="container mx-auto my-24">
            <SectionHeading heading={"Rates"} />
            <div className="flex flex-wrap lg:flex-nowrap justify-between items-center mt-14 gap-12">
              <div className="lg:w-1/2 w-full mx-5 lg:mx-0">
                <Image
                  src={"/images/products/rates.png"}
                  alt="Construction Image"
                  height={543}
                  width={943}
                  className="w-full rounded-xl"
                />
              </div>
              <div className="lg:w-1/2 w-full lg:mx-0 mx-10">
                <ul className="list-disc mb-12 space-y-4 font-medium">
                  <li>Normal Rate</li>
                  <li>Overtime Rate </li>
                  <li>Sunday Rate </li>
                </ul>
                <p>
                  <span className="font-semibold">After-Hour Call-out </span>
                  <br />
                  24 HOUR availability 7 DAYS a week with immediate response.
                  CHARGES FOR AFTER-HOUR CALL-OUTS are as follows: 4 HOURS X
                  OVERTIME RATE (unless longer hours spent on site)
                </p>
              </div>
            </div>
          </div>
        </div>
      </WebLayout>
    </>
  );
}
