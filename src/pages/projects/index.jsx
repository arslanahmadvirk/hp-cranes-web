import Hero from "@/components/Hero";
import SlickSlider from "@/components/SlickSlider";
import Image from "next/image";

export default function Projects() {
  const zambiaProject = [
    {
      image: "/images/projects/zambia-1.png",
    },
    {
      image: "/images/projects/zambia-2.png",
    },
    {
      image: "/images/projects/zambia-3.png",
    },
    {
      image: "/images/projects/zambia-4.png",
    },
    {
      image: "/images/projects/zambia-5.png",
    },
    {
      image: "/images/projects/zambia-6.png",
    },
    {
      image: "/images/projects/zambia-7.png",
    },
  ];

  const elandsfonteinProject = [
    {
      image: "/images/projects/elandsfontein-1.png",
    },
    {
      image: "/images/projects/elandsfontein-2.png",
    },
    {
      image: "/images/projects/elandsfontein-3.png",
    },
    {
      image: "/images/projects/elandsfontein-4.png",
    },
    {
      image: "/images/projects/elandsfontein-5.png",
    },
    {
      image: "/images/projects/elandsfontein-6.png",
    },
    {
      image: "/images/projects/elandsfontein-7.png",
    },
  ];

  const Project2016 = [
    {
      image: "/images/projects/2016-1.png",
    },
    {
      image: "/images/projects/2016-2.png",
    },
    {
      image: "/images/projects/2016-3.png",
    },
    {
      image: "/images/projects/2016-4.png",
    },
    {
      image: "/images/projects/2016-5.png",
    },
    {
      image: "/images/projects/2016-6.png",
    },
    {
      image: "/images/projects/2016-7.png",
    },
  ];

  return (
    <>
      <Hero pageName={"Projects"} />
      <ProjectOverview>
        <h1 className="font-bold text-2xl mb-4 uppercase">
          INSTALLATION COMPLETE IN ZAMBIA
        </h1>
        <p className="text-justify">
          Installation Of ; 70 Stroke, 10 Ton Overhead Crane. Complete In
          Zambia. 20 Ton Laddle Crane Upgrade with Invertors & over speed
          brakes. Also, included was a 20 000 KG Load Cell & Digital Display.
        </p>
      </ProjectOverview>
      <ProjectImageSlider slides={zambiaProject} />
      <ProjectImageSlider slides={elandsfonteinProject} />
      <ProjectImageSlider slides={Project2016} />
    </>
  );
}

function ProjectImageSlider({ slides }) {
  return (
    <div className="container 2xl:max-w-screen-2xl mx-auto lg:pb-24 pb-14 overflow-hidden">
      <SlickSlider visibleSlides={5}>
        {slides.map(({ image }, index) => (
          <div key={index} className="px-2">
            <Image src={image} width={365} height={249} alt="Project Image" />
          </div>
        ))}
      </SlickSlider>
    </div>
  );
}

function ProjectOverview({ image1, image2, children }) {
  return (
    <div className=" 2xl:max-w-screen-2xl mx-auto">
      <div className="container mx-auto my-24">
        <div className="flex flex-wrap lg:flex-nowrap justify-between gap-12">
          <div className="lg:w-1/2 w-full relative lg:mx-0 mx-5 border border-red-400">
            <Image
              src={"/images/projects/zambia-main-1.png"}
              alt="Breakdowns Image"
              height={515}
              width={362}
              className="transition-all duration-300"
            />
            <Image
              src={"/images/projects/zambia-main-2.png"}
              alt="Breakdowns Image"
              height={331}
              width={274}
            />
          </div>
          <div className="lg:w-1/2 w-full lg:mx-0 mx-5 my-5">{children}</div>
        </div>
      </div>
    </div>
  );
}
