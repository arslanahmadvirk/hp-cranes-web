import { GalleryGrid } from "@/components/GalleryGrid";
import Hero from "@/components/Hero";
import SectionHeading from "@/components/SectionHeading";
import SlickSlider from "@/components/SlickSlider";
import WebLayout from "@/layouts/WebLayout";
import Head from "next/head";
import Image from "next/image";

export default function FactoryMaintenanceGallery() {
  const maintenanceImages = [
    {
      src: "/images/gallery/factory-maintenance/maintenance-1.png",
      height: 768,
      width: 1024,
      alt: "Maintenance Image",
    },
    {
      src: "/images/gallery/factory-maintenance/maintenance-2.png",
      height: 768,
      width: 1024,
      alt: "Maintenance Image",
    },
    {
      src: "/images/gallery/factory-maintenance/maintenance-3.png",
      height: 768,
      width: 1024,
      alt: "Maintenance Image",
    },
    {
      src: "/images/gallery/factory-maintenance/maintenance-4.png",
      height: 768,
      width: 1024,
      alt: "Maintenance Image",
    },
  ];
  return (
    <>
      <Head>
        <title>Factory Maintenance Gallery | HP Cranes</title>
      </Head>
      <WebLayout>
        <Hero pageName={"Factory Maintenance"} />
        <GalleryGrid
          images={maintenanceImages}
          galleryName={"Factory Maintenance"}
        />
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
