import { GalleryGrid } from "@/components/GalleryGrid";
import Hero from "@/components/Hero";
import SectionHeading from "@/components/SectionHeading";
import SlickSlider from "@/components/SlickSlider";
import WebLayout from "@/layouts/WebLayout";
import Head from "next/head";
import Image from "next/image";

export default function ElectricalGallery() {
  const electricalImages = [
    {
      src: "/images/gallery/electrical/electrical-1.png",
      height: "768",
      width: "1024",
      alt: "Electrical Image 1",
    },
    {
      src: "/images/gallery/electrical/electrical-2.png",
      height: "768",
      width: "1024",
      alt: "Electrical Image 2",
    },
    {
      src: "/images/gallery/electrical/electrical-3.png",
      height: "768",
      width: "576",
      alt: "Electrical Image 3",
    },
    {
      src: "/images/gallery/electrical/electrical-4.png",
      height: "768",
      width: "576",
      alt: "Electrical Image 4",
    },
    {
      src: "/images/gallery/electrical/electrical-5.png",
      height: "768",
      width: "1024",
      alt: "Electrical Image 5",
    },
    {
      src: "/images/gallery/electrical/electrical-6.png",
      height: "768",
      width: "1024",
      alt: "Electrical Image 6",
    },
    {
      src: "/images/gallery/electrical/electrical-7.png",
      height: "768",
      width: "1024",
      alt: "Electrical Image 7",
    },
    {
      src: "/images/gallery/electrical/electrical-8.png",
      height: "768",
      width: "1024",
      alt: "Electrical Image 8",
    },
    {
      src: "/images/gallery/electrical/electrical-9.png",
      height: "768",
      width: "1024",
      alt: "Electrical Image 9",
    },
    {
      src: "/images/gallery/electrical/electrical-10.png",
      height: "768",
      width: "1024",
      alt: "Electrical Image 10",
    },
    {
      src: "/images/gallery/electrical/electrical-11.png",
      height: "768",
      width: "1024",
      alt: "Electrical Image 11",
    },
    {
      src: "/images/gallery/electrical/electrical-12.png",
      height: "768",
      width: "1024",
      alt: "Electrical Image 12",
    },
    {
      src: "/images/gallery/electrical/electrical-13.png",
      height: "768",
      width: "1024",
      alt: "Electrical Image 13",
    },
  ];
  return (
    <>
      <Head>
        <title>Electrical Gallery | HP Cranes</title>
      </Head>
      <WebLayout>
        <Hero pageName={"Electrical"} />
        <GalleryGrid images={electricalImages} galleryName={"Electrical"} />
        <GallerySlider />
      </WebLayout>
    </>
  );
}

function GallerySlider() {
  const gallerySlides = [
    {
      image: "/images/gallery/electrical/electrical-1.png",
    },
    {
      image: "/images/gallery/electrical/electrical-2.png",
    },
    {
      image: "/images/gallery/electrical/electrical-5.png",
    },
    {
      image: "/images/gallery/electrical/electrical-7.png",
    },
    {
      image: "/images/gallery/electrical/electrical-9.png",
    },
    {
      image: "/images/gallery/electrical/electrical-11.png",
    },
    {
      image: "/images/gallery/electrical/electrical-12.png",
    },
    {
      image: "/images/gallery/electrical/electrical-13.png",
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
