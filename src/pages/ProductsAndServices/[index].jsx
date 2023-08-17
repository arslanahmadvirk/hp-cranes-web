import Hero from "@/components/Hero";
import SectionHeading from "@/components/SectionHeading";
import SlickSlider from "@/components/SlickSlider";
import Image from "next/image";

export default function ProductPage() {
  return (
    <>
      <div className=" 2xl:max-w-screen-2xl mx-auto">
        <Hero pageName={"Product & Services"} />
        <div className="container mx-auto my-24">
          <SectionHeading heading={"Cranes"} />
          <div className="flex flex-wrap lg:flex-nowrap justify-between items-center mt-14 gap-12">
            <div className="lg:w-1/2 w-full mx-5 lg:mx-0">
              <Image
                src={"/images/products/cranes.png"}
                alt="Breakdowns Image"
                height={543}
                width={943}
                className="w-full rounded-xl"
              />
            </div>
            <div className="lg:w-1/2 w-full lg:mx-0 mx-10">
              <ul className="list-disc mb-12 space-y-4 font-medium">
                <li>
                  Crane Manufacturing Any crane up to 20 ton single and double
                  girders.
                </li>
                <li>
                  Crane Modifications Upgrading and Modernizing of all types of
                  cranes.
                </li>
                <li>
                  Erection and take down of cranes, complete rigging facility’s.
                </li>
                <li>
                  Service Service of all types of cranes with all documentation
                  and repairs.
                </li>
                <li>Load Test We do load tests. Water or solid weights.</li>
                <li>
                  Experience on Following– Cranes Demag, Condra, Morris,
                  Verlinde, Lasch, Wolf, Koni, Sachmech etc– Hoists Elephant,
                  Toco, Kito, Rope Master, Kukdong, Nitchi, etc.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <GallerySlider />;
    </>
  );
}

{
  `




`;
}

function GallerySlider() {
  const gallerySlides = [
    {
      image: "/images/gallery/slider-1.png",
    },
    {
      image: "/images/gallery/slider-2.png",
    },
    {
      image: "/images/gallery/slider-3.png",
    },
    {
      image: "/images/gallery/slider-4.png",
    },
    {
      image: "/images/gallery/slider-5.png",
    },
    {
      image: "/images/gallery/slider-6.png",
    },
    {
      image: "/images/gallery/slider-7.png",
    },
    {
      image: "/images/gallery/slider-8.png",
    },
  ];
  return (
    <div className="container 2xl:max-w-screen-2xl mx-auto lg:pb-24 pb-14 overflow-hidden">
      <SectionHeading heading={"Images"} />
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