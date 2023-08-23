import Hero from "@/components/Hero";
import SectionHeading from "@/components/SectionHeading";
import SlickSlider from "@/components/SlickSlider";
import WebLayout from "@/layouts/WebLayout";
import Head from "next/head";
import Image from "next/image";

export default function Cranes() {
  return (
    <>
      <Head>
        <title>Factory Maintenance | HP Cranes</title>
      </Head>
      <WebLayout>
        <div className=" 2xl:max-w-screen-2xl mx-auto">
          <Hero pageName={"Product & Services"} />
          <div className="container mx-auto my-24">
            <SectionHeading heading={"Factory Maintenance"} />
            <div className="flex flex-wrap lg:flex-nowrap justify-between items-center mt-14 gap-12">
              <div className="lg:w-1/2 w-full mx-5 lg:mx-0">
                <Image
                  src={"/images/products/factory-maintenance.png"}
                  alt="Factory Maintenance Image"
                  height={543}
                  width={943}
                  className="w-full rounded-xl"
                />
              </div>
              <div className="lg:w-1/2 w-full lg:mx-0 mx-10">
                <ul className="list-disc mb-12 space-y-4 font-medium">
                  <li>Lathe Repairs</li>
                  <li>Guillotines</li>
                  <li>Pumps</li>
                  <li>Saws</li>
                  <li>A.C. and D.C. Drives</li>
                  <li>
                    Conveyors and Material Handling Equipment, REPAIRS AND
                    INSTALLATION
                  </li>
                  <li>Building</li>
                  <li>Welding Machine Repairs</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <GallerySlider />
      </WebLayout>
    </>
  );
}

function GallerySlider() {
  const gallerySlides = [
    {
      image: "/images/gallery/factory-maintenance/maintenance-1.png",
    },
    {
      image: "/images/gallery/factory-maintenance/maintenance-2.png",
    },
    {
      image: "/images/gallery/factory-maintenance/maintenance-3.png",
    },
    {
      image: "/images/gallery/factory-maintenance/maintenance-4.png",
    },
  ];
  return (
    <div className="container 2xl:max-w-screen-2xl mx-auto lg:pb-24 pb-14 overflow-hidden">
      <div className="mt-14">
        <SlickSlider>
          {gallerySlides.map(({ image }) => (
            <div key={image} className="p-2">
              <Image
                src={image}
                width={578}
                height={350}
                alt="Product Image"
                className="rounded-xl object-cover aspect-video mx-auto"
              />
            </div>
          ))}
        </SlickSlider>
      </div>
    </div>
  );
}
