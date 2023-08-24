import { GalleryGrid } from "@/components/GalleryGrid";
import Hero from "@/components/Hero";
import SectionHeading from "@/components/SectionHeading";
import SlickSlider from "@/components/SlickSlider";
import WebLayout from "@/layouts/WebLayout";
import Head from "next/head";
import Image from "next/image";

export default function CranesGallery() {
  const rcsImages = [
    {
      src: "/images/gallery/radio-control-system/remote-1.png",
      height: "309",
      width: "309",
      alt: "Remote Image 1",
    },
    {
      src: "/images/gallery/radio-control-system/remote-2.png",
      height: "333",
      width: "309",
      alt: "Remote Image 2",
    },
    {
      src: "/images/gallery/radio-control-system/remote-3.png",
      height: "495",
      width: "309",
      alt: "Remote Image 3",
    },
    {
      src: "/images/gallery/radio-control-system/remote-4.png",
      height: "461",
      width: "309",
      alt: "Remote Image 4",
    },
    {
      src: "/images/gallery/radio-control-system/remote-5.png",
      height: "267",
      width: "310",
      alt: "Remote Image 5",
    },
    {
      src: "/images/gallery/radio-control-system/remote-6.png",
      height: "174",
      width: "309",
      alt: "Remote Image 6",
    },
    {
      src: "/images/gallery/radio-control-system/remote-7.png",
      height: "676",
      width: "309",
      alt: "Remote Image 7",
    },
  ];
  return (
    <>
      <Head>
        <title>RCS Gallery | HP Cranes</title>
      </Head>
      <WebLayout>
        <Hero pageName={"Radio Control System"} />
        <GalleryGrid galleryName={"Radio Control System"} images={rcsImages} />
        <GallerySlider />
      </WebLayout>
    </>
  );
}

function GallerySlider() {
  const gallerySlides = [
    {
      image: "/images/gallery/radio-control-system/remote-1.png",
    },
    {
      image: "/images/gallery/radio-control-system/remote-2.png",
    },
    {
      image: "/images/gallery/radio-control-system/remote-3.png",
    },
    {
      image: "/images/gallery/radio-control-system/remote-4.png",
    },
    {
      image: "/images/gallery/radio-control-system/remote-5.png",
    },
    {
      image: "/images/gallery/radio-control-system/remote-6.png",
    },
    {
      image: "/images/gallery/radio-control-system/remote-7.png",
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
                width={250}
                height={250}
                alt="Product Image"
                className="rounded-xl object-cover aspect-square mx-auto"
              />
            </div>
          ))}
        </SlickSlider>
      </div>
    </div>
  );
}
