import { GalleryGrid } from "@/components/GalleryGrid";
import Hero from "@/components/Hero";
import SectionHeading from "@/components/SectionHeading";
import SlickSlider from "@/components/SlickSlider";
import WebLayout from "@/layouts/WebLayout";
import Head from "next/head";
import Image from "next/image";

export default function CranesGallery() {
  const craneImages = [
    {
      src: "/images/gallery/cranes/crane-1.png",
      height: "768",
      width: "1024",
      alt: "Crane Image 1",
    },
    {
      src: "/images/gallery/cranes/crane-2.png",
      height: "768",
      width: "1024",
      alt: "Crane Image 2",
    },
    {
      src: "/images/gallery/cranes/crane-3.png",
      height: "768",
      width: "1024",
      alt: "Crane Image 3",
    },
    {
      src: "/images/gallery/cranes/crane-4.png",
      height: "768",
      width: "576",
      alt: "Crane Image 4",
    },
    {
      src: "/images/gallery/cranes/crane-5.png",
      height: "768",
      width: "1024",
      alt: "Crane Image 5",
    },
    {
      src: "/images/gallery/cranes/crane-6.png",
      height: "768",
      width: "1024",
      alt: "Crane Image 6",
    },
    {
      src: "/images/gallery/cranes/crane-7.png",
      height: "768",
      width: "1024",
      alt: "Crane Image 7",
    },
    {
      src: "/images/gallery/cranes/crane-8.png",
      height: "268",
      width: "402",
      alt: "Crane Image 8",
    },
    {
      src: "/images/gallery/cranes/crane-9.png",
      height: "269",
      width: "402",
      alt: "Crane Image 9",
    },
    {
      src: "/images/gallery/cranes/crane-10.png",
      height: "565",
      width: "402",
      alt: "Crane Image 10",
    },
    {
      src: "/images/gallery/cranes/crane-11.png",
      height: "768",
      width: "1024",
      alt: "Crane Image 11",
    },
    {
      src: "/images/gallery/cranes/crane-12.png",
      height: "768",
      width: "1024",
      alt: "Crane Image 12",
    },
    {
      src: "/images/gallery/cranes/crane-13.png",
      height: "768",
      width: "1024",
      alt: "Crane Image 13",
    },
    {
      src: "/images/gallery/cranes/crane-14.png",
      height: "268",
      width: "835",
      alt: "Crane Image 13",
    },
  ];
  return (
    <>
      <Head>
        <title>Cranes Gallery | HP Cranes</title>
      </Head>
      <WebLayout>
        <Hero pageName={"Cranes"} />
        <GalleryGrid galleryName={"Cranes"} images={craneImages} />
        <GallerySlider />
      </WebLayout>
    </>
  );
}

function GallerySlider() {
  const gallerySlides = [
    {
      image: "/images/gallery/cranes/crane-1.png",
    },
    {
      image: "/images/gallery/cranes/crane-2.png",
    },
    {
      image: "/images/gallery/cranes/crane-3.png",
    },
    {
      image: "/images/gallery/cranes/crane-4.png",
    },
    {
      image: "/images/gallery/cranes/crane-5.png",
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
