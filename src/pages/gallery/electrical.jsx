import Hero from "@/components/Hero";
import SectionHeading from "@/components/SectionHeading";
import SlickSlider from "@/components/SlickSlider";
import WebLayout from "@/layouts/WebLayout";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import { Gallery } from "react-grid-gallery";
import { Lightbox } from "yet-another-react-lightbox";

export default function CranesGallery() {
  return (
    <>
      <Head>
        <title>Electrical Gallery | HP Cranes</title>
      </Head>
      <WebLayout>
        <Hero pageName={"Electrical"} />
        <GalleryGrid />
        <GallerySlider />
      </WebLayout>
    </>
  );
}

function GalleryGrid() {
  const [index, setIndex] = useState(-1);
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
  const handleClick = (index) => setIndex(index);
  return (
    <div className="container 2xl:max-w-screen-2xl mx-auto lg:py-24 py-14 overflow-hidden">
      <SectionHeading heading={"Electrical"} />
      <div className="mt-14">
        <Gallery
          images={electricalImages}
          enableImageSelection={false}
          onClick={handleClick}
        />
        <Lightbox
          slides={electricalImages}
          open={index >= 0}
          index={index}
          close={() => setIndex(-1)}
        />
      </div>
    </div>
  );
}
function GallerySlider() {
  const gallerySlides = [
    {
      image: "/images/gallery/electrical/electrical-1.png",
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
