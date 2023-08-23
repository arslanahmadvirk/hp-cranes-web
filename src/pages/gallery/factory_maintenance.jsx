import Hero from "@/components/Hero";
import SectionHeading from "@/components/SectionHeading";
import SlickSlider from "@/components/SlickSlider";
import WebLayout from "@/layouts/WebLayout";
import Head from "next/head";
import Image from "next/image";

export default function CranesGallery() {
  return (
    <>
      <Head>
        <title>Factory Maintenance Gallery | HP Cranes</title>
      </Head>
      <WebLayout>
        <Hero pageName={"Factory Maintenance"} />
        <GalleryGrid />
        <GallerySlider />
      </WebLayout>
    </>
  );
}

function GalleryGrid() {
  return (
    <div className="container 2xl:max-w-screen-2xl mx-auto lg:py-24 py-14 overflow-hidden">
      <SectionHeading heading={"Factory Maintenance"} />
      <div className="grid lg:grid-cols-4 md:grid-cols-3 md:grid-rows-3 grid-rows-2 grid-cols-2 mt-14 gap-4">
        <Image
          src={"/images/gallery/crane-1.png"}
          alt="Crane Image"
          width={836}
          height={268}
          className="lg:col-span-2 object-cover"
        />
        <Image
          src={"/images/gallery/crane-4.png"}
          alt="Crane Image"
          width={402}
          height={268}
          className=" object-cover"
        />
        <Image
          src={"/images/gallery/crane-5.png"}
          alt="Crane Image"
          width={402}
          height={268}
          className=" object-cover"
        />
        <Image
          src={"/images/gallery/crane-2.png"}
          alt="Crane Image"
          width={402}
          height={565}
          className="row-span-2 object-cover"
        />
        <Image
          src={"/images/gallery/crane-3.png"}
          alt="Crane Image"
          width={402}
          height={565}
          className=" row-span-2 object-cover"
        />
        <Image
          src={"/images/gallery/crane-6.png"}
          alt="Crane Image"
          width={402}
          height={268}
          className=" object-cover"
        />
        <Image
          src={"/images/gallery/crane-7.png"}
          alt="Crane Image"
          width={402}
          height={268}
          className=" object-cover"
        />
        <Image
          src={"/images/gallery/crane-8.png"}
          alt="Crane Image"
          width={402}
          height={268}
          className=" object-cover"
        />
        <Image
          src={"/images/gallery/crane-9.png"}
          alt="Crane Image"
          width={402}
          height={268}
          className=" object-cover"
        />
      </div>
    </div>
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
                width={579}
                height={579}
                alt="Product Image"
                className="rounded-xl mx-auto"
              />
            </div>
          ))}
        </SlickSlider>
      </div>
    </div>
  );
}
