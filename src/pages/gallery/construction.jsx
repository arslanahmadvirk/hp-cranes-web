import { GalleryGrid } from "@/components/GalleryGrid";
import Hero from "@/components/Hero";
import SectionHeading from "@/components/SectionHeading";
import SlickSlider from "@/components/SlickSlider";
import WebLayout from "@/layouts/WebLayout";
import Head from "next/head";
import Image from "next/image";

export default function CranesGallery() {
  const constructionImages = [
    {
      src: "/images/gallery/construction/construction-1.png",
      height: "768",
      width: "1024",
      alt: "Construction Image 1",
    },
    {
      src: "/images/gallery/construction/construction-2.png",
      height: "768",
      width: "1024",
      alt: "Construction Image 2",
    },
    {
      src: "/images/gallery/construction/construction-3.png",
      height: "768",
      width: "576",
      alt: "Construction Image 3",
    },
    {
      src: "/images/gallery/construction/construction-4.png",
      height: "768",
      width: "1024",
      alt: "Construction Image 4",
    },
    {
      src: "/images/gallery/construction/construction-5.png",
      height: "768",
      width: "1024",
      alt: "Construction Image 5",
    },
    {
      src: "/images/gallery/construction/construction-6.png",
      height: "768",
      width: "1024",
      alt: "Construction Image 6",
    },
    {
      src: "/images/gallery/construction/construction-7.png",
      height: "768",
      width: "1024",
      alt: "Construction Image 7",
    },
    {
      src: "/images/gallery/construction/construction-8.png",
      height: "768",
      width: "1024",
      alt: "Construction Image 8",
    },
    {
      src: "/images/gallery/construction/construction-9.png",
      height: "768",
      width: "1024",
      alt: "Construction Image 9",
    },
    {
      src: "/images/gallery/construction/construction-10.png",
      height: "768",
      width: "1024",
      alt: "Construction Image 10",
    },
    {
      src: "/images/gallery/construction/construction-11.png",
      height: "768",
      width: "1024",
      alt: "Construction Image 11",
    },
  ];
  return (
    <>
      <Head>
        <title>Construction Gallery | HP Cranes</title>
      </Head>
      <WebLayout>
        <Hero pageName={"Construction"} />
        <GalleryGrid galleryName={"Construction"} images={constructionImages} />
        <GallerySlider />
      </WebLayout>
    </>
  );
}

function GallerySlider() {
  const gallerySlides = [
    {
      image: "/images/gallery/construction/construction-6.png",
    },
    {
      image: "/images/gallery/construction/construction-7.png",
    },
    {
      image: "/images/gallery/construction/construction-8.png",
    },
    {
      image: "/images/gallery/construction/construction-9.png",
    },
    {
      image: "/images/gallery/construction/construction-10.png",
    },
    {
      image: "/images/gallery/construction/construction-11.png",
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
