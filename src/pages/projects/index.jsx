import Hero from "@/components/Hero";
import SlickSlider from "@/components/SlickSlider";
import WebLayout from "@/layouts/WebLayout";
import Head from "next/head";
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
      <Head>
        <title>Projects | HP Cranes</title>
      </Head>
      <WebLayout>
        <Hero pageName={"Projects"} />
        <ProjectOverview
          image1={"/images/projects/zambia-main-1.png"}
          image2={"/images/projects/zambia-main-2.png"}
          order={"fl"}
        >
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
        <ProjectOverview
          image1={"/images/projects/elandsfontein-main-1.png"}
          image2={"/images/projects/elandsfontein-main-2.png"}
          order="flex-row-reverse"
        >
          <h1 className="font-bold text-2xl mb-4 uppercase">Elandsfontein</h1>
          <p className="text-justify">
            Give Credit where Credit is due. When life seems to run by us, and
            we sometimes forget to thank the people who gives more than their
            time to complete projects, but we at HP Cranes make time! We want to
            take this opportunity to introduce to you Henry Spamers the founder
            and CEO of HP Cranes Consulting and Mike Willemans loyal technician
            for 20 years who were the ones working hard and diligently on the
            Elandsfontein project. In a Nick of Time HP Cranes Supplied and
            Installed an 60m Gantry in Elandsfontein. Thanks to our Lead Team,
            the project is completed.
          </p>
        </ProjectOverview>
        <ProjectImageSlider slides={elandsfonteinProject} />
        <ProjectOverview
          image1={"/images/projects/2016-main-1.png"}
          image2={"/images/projects/2016-main-2.png"}
        >
          <h1 className="font-bold text-2xl mb-4 uppercase">2016 PROJECT</h1>
          <p className="text-justify">
            We can start to say that 2015 was an extraordinary year, we thank
            our employees for their hard work, and also our Provider who never
            fails to suprize. And we believe that 2016 will even be GREATER! We
            have reached greatness in 2015 and would like to share it with you
            today. Donavon Spamers is one of our lead engineers who took up a
            task that was meant to be done by a team of many. Taking his time
            away from home and his family to install 2 off 70/10 ton 40 m span
            cranes in Zambia from October 2015, and handing over in January
            2016. Thank you Donavon for the dedication and passion you add to
            your work. We want to also thank the team provided to him by the
            client. “It was a pleasure working with them” words from Donavon
            Spamers.
          </p>
        </ProjectOverview>
        <ProjectImageSlider slides={Project2016} />
        <ProjectOverview
          image1={"/images/projects/leg-manufacture-1.png"}
          image2={"/images/projects/leg-manufacture-2.png"}
          order={"flex-row-reverse"}
        >
          <h1 className="font-bold text-2xl mb-4 uppercase">
            MANUFACTURING OF LEG PROTECTERS & LIFTING DEVICES
          </h1>
          <p className="text-justify">
            Manufacturing Of Special Racking LEG Protectors .
            <br />
            Design And Manufacturing Of Special Application Lifting Devices And
            Attachments.
          </p>
        </ProjectOverview>
        <div className=" 2xl:max-w-screen-2xl mx-auto">
          <div className="container mx-auto lg:my-24 my-14">
            <div
              className={`flex flex-wrap lg:flex-nowrap justify-between gap-12`}
            >
              <div className="lg:w-1/2 w-full relative lg:mx-0 mx-5">
                <Image
                  src={"/images/breakdown-img.png"}
                  alt="Breakdowns Image"
                  height={515}
                  width={362}
                  className=" w-full"
                />
              </div>
              <div className="lg:w-1/2 w-full lg:mx-0 mx-5 my-5">
                <h1 className="font-bold text-2xl mb-4 uppercase">
                  DISTRIBUTORS OF HETRONIC
                </h1>
                <p className="text-justify">
                  We Are Proud Distributors of Hetronic Radio Control To The
                  Industry.
                </p>
              </div>
            </div>
          </div>
        </div>
      </WebLayout>
    </>
  );
}

function ProjectImageSlider({ slides }) {
  return (
    <div className="container 2xl:max-w-screen-2xl mx-auto lg:pb-24 pb-14 overflow-hidden">
      <div className="lg:mx-0 mx-5">
        <SlickSlider visibleSlides={5}>
          {slides.map(({ image }, index) => (
            <div key={index} className="px-2">
              <Image src={image} width={365} height={249} alt="Project Image" />
            </div>
          ))}
        </SlickSlider>
      </div>
    </div>
  );
}

function ProjectOverview({ image1, image2, order, children }) {
  return (
    <div className=" 2xl:max-w-screen-2xl mx-auto">
      <div className="container mx-auto lg:my-24 my-14">
        <div
          className={`flex flex-wrap ${order} lg:flex-nowrap justify-between gap-12`}
        >
          <div className="lg:w-1/2 w-full relative lg:mx-0 mx-5">
            <Image
              src={image1}
              alt="Breakdowns Image"
              height={515}
              width={362}
              className="lg:w-2/3 w-full inline-block"
            />
            <Image
              src={image2}
              alt="Breakdowns Image"
              height={331}
              width={274}
              className="w-1/3 relative right-12 top-40 lg:inline-block hidden float-right"
            />
          </div>
          <div className="lg:w-1/2 w-full lg:mx-0 mx-5 my-5">{children}</div>
        </div>
      </div>
    </div>
  );
}
