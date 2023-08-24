import { GalleryGrid } from "@/components/GalleryGrid";
import Hero from "@/components/Hero";
import SectionHeading from "@/components/SectionHeading";
import SlickSlider from "@/components/SlickSlider";
import WebLayout from "@/layouts/WebLayout";
import Head from "next/head";
import Image from "next/image";

export default function SlingsGallery() {
  const slingsImages = [
    {
      src: "/images/gallery/slings/sling-1.png",
      height: "480",
      width: "640",
      alt: "Sling Image 1",
    },
    {
      src: "/images/gallery/slings/sling-2.png",
      height: "480",
      width: "640",
      alt: "Sling Image 2",
    },
    {
      src: "/images/gallery/slings/sling-3.png",
      height: "480",
      width: "640",
      alt: "Sling Image 3",
    },
    {
      src: "/images/gallery/slings/sling-4.png",
      height: "480",
      width: "640",
      alt: "Sling Image 4",
    },
    {
      src: "/images/gallery/slings/sling-5.png",
      height: "480",
      width: "640",
      alt: "Sling Image 5",
    },
    {
      src: "/images/gallery/slings/sling-6.png",
      height: "383",
      width: "324",
      alt: "Sling Image 6",
    },
    {
      src: "/images/gallery/slings/sling-7.png",
      height: "250",
      width: "592",
      alt: "Sling Image 7",
    },
    {
      src: "/images/gallery/slings/sling-8.png",
      height: "250",
      width: "592",
      alt: "Sling Image 8",
    },
    {
      src: "/images/gallery/slings/sling-9.png",
      height: "250",
      width: "592",
      alt: "Sling Image 9",
    },
    {
      src: "/images/gallery/slings/sling-10.png",
      height: "250",
      width: "592",
      alt: "Sling Image 10",
    },
    {
      src: "/images/gallery/slings/sling-11.png",
      height: "250",
      width: "592",
      alt: "Sling Image 11",
    },
  ];
  return (
    <>
      <Head>
        <title>Slings Gallery | HP Cranes</title>
      </Head>
      <WebLayout>
        <Hero pageName={"Slings"} />
        <GalleryGrid galleryName={"Slings"} images={slingsImages} />
        <GallerySlider />
      </WebLayout>
    </>
  );
}

function GallerySlider() {
  const gallerySlides = [
    {
      image: "/images/gallery/slings/sling-1.png",
    },
    {
      image: "/images/gallery/slings/sling-5.png",
    },
    {
      image: "/images/gallery/slings/sling-6.png",
    },
    {
      image: "/images/gallery/slings/sling-7.png",
    },
    {
      image: "/images/gallery/slings/sling-8.png",
    },
    {
      image: "/images/gallery/slings/sling-9.png",
    },
    {
      image: "/images/gallery/slings/sling-10.png",
    },
    {
      image: "/images/gallery/slings/sling-11.png",
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
