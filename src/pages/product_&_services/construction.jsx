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
        <title>Construction | HP Cranes</title>
      </Head>
      <WebLayout>
        <div className=" 2xl:max-w-screen-2xl mx-auto">
          <Hero pageName={"Product & Services"} />
          <div className="container mx-auto my-24">
            <SectionHeading heading={"Construction"} />
            <div className="flex flex-wrap lg:flex-nowrap justify-between items-center mt-14 gap-12">
              <div className="lg:w-1/2 w-full mx-5 lg:mx-0">
                <Image
                  src={"/images/products/construction.png"}
                  alt="Construction Image"
                  height={543}
                  width={943}
                  className="w-full rounded-xl"
                />
              </div>
              <div className="lg:w-1/2 w-full lg:mx-0 mx-10">
                <ul className="list-disc mb-12 space-y-4 font-medium">
                  <li>Civil</li>
                  <li>Layouts</li>
                  <li>Foundations</li>
                  <li>Steel work</li>
                  <li>Building</li>
                  <li>Erection</li>
                  <li>Certification</li>
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
