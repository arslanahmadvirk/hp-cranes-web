import ContactUs from "@/components/ContactUs";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import MobileNavbar from "@/components/NavbarMobile";
import CountUp from "react-countup";
import SectionHeading from "@/components/SectionHeading";
import useMediaQuery from "@/hooks/useMediaQuery";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import SlickSlider from "@/components/SlickSlider";
import { HiArrowRight } from "react-icons/hi";

export default function Home() {
  const isMobileScreen = useMediaQuery("(max-width: 768px)");
  return (
    <>
      <Head>
        <title>Home | HP Cranes</title>
      </Head>
      {isMobileScreen ? <MobileNavbar /> : <Navbar />}
      <AboutUs />
      <ProductsAndServices />
      <Statistics />
      <Gallery />
      <WhyChooseUs />
      <Projects />
      <ContactUs />
      <Footer />
    </>
  );
}

function AboutUs() {
  const recent_posts = [
    "WORK DIRECTOR ACHIEVES ELECTRICAL RED SEAL DIPLOMA",
    " INSTALLATION COMPLETE IN ZAMBIA",
    " PRESERVING NATURE",
    "MANUFACTURING OF LEG PROTECTERS",
    " DISTRIBUTORS OF HETRONIC",
  ];
  return (
    <div className="container 2xl:max-w-screen-2xl mx-auto">
      <div className="flex lg:flex-row flex-col justify-between py-20 gap-20 lg:mx-10">
        <div className="basis-8/12 mx-6 lg:mx-0">
          <SectionHeading heading={"About Us"} />
          <div className="mt-10 text-justify">
            <Image
              src={"/images/about-us-main.png"}
              width={976}
              height={500}
              className="w-full rounded-tl-3xl rounded-bl-lg rounded-tr-lg rounded-br-3xl mb-8"
              alt="Family Image"
            />
            <p>
              The company HP Cranes was established in 1991 in Brakpan. The
              Mission of the company at the time was to do Maintenance of Gantry
              & Tower Cranes, Electrical & Mechanical Engineers, Supply of Radio
              Controls and Manufacturing and Installation of Material Handling.
            </p>
            <br />
            <p>
              H.P Cranes Consulting has designed its quality system to meet the
              requirements of ISO 9001:2008 specifically and has included
              certain customer requirements as applicable. We successfully
              qualified as SABS ISO 9001:2008.
            </p>
            <br />
            <h5 className="text-lg font-semibold">Quality Policy</h5>
            <br />
            <ul className="list-disc ml-4 space-y-2 text-justify">
              <li>
                To a service that meets the requirements of our clients, first
                time, every time
              </li>
              <li>To provide well managed, trained and motivated personnel</li>
              <li>
                To meeting any regulatory and statutory requirements applicable
                to our business
              </li>
              <li>To the development and maintenance of a QUALITY SYS...</li>
            </ul>
          </div>
        </div>
        <div className="basis-4/12 mx-12 lg:mx-0">
          <div className="lg:mt-16">
            <h1 className="text-center underline underline-offset-2 text-lg font-semibold mb-8">
              Recent Posts
            </h1>
            <ul className=" list-disc space-y-2 mb-8">
              {recent_posts.map((post) => (
                <li key={post}>
                  <Link
                    href={"#"}
                    className="underline underline-offset-2 uppercase"
                  >
                    {post}
                  </Link>
                </li>
              ))}
            </ul>
            <h1 className="text-center underline underline-offset-2 text-lg font-semibold mb-8">
              Videos
            </h1>

            <div className="flex flex-col gap-8 text-center">
              <Link href={"#"} target="_blank">
                <Image
                  src={"/images/video-1.png"}
                  width={410}
                  height={265}
                  className="w-80 mx-auto mb-4"
                  alt="Video Thumbnail"
                />
                <span className="underline">How to calculate a sling load</span>
              </Link>
              <Link href={"#"} target="_blank">
                <Image
                  src={"/images/video-2.png"}
                  width={410}
                  height={265}
                  className="w-80 mx-auto mb-8"
                  alt="Video Thumbnail"
                />
                <span className="underline">
                  Balancing A Sling Load Below A Hook Point
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function WhyChooseUs() {
  return (
    <div className="container 2xl:max-w-screen-2xl mx-auto ">
      <SectionHeading heading={"Why Choose HP Cranes ?"} />
      <div className="flex lg:flex-row flex-col-reverse lg:gap-0 gap-20 justify-between items-center lg:py-20 pt-10 pb-20 mx-5">
        <div className="lg:basis-1/2 basis-full ">
          <h2 className="font-semibold text-lg mb-4">We Commit Ourselves:</h2>
          <ul className="list-disc mx-5 space-y-1 text-justify">
            <li>
              To A Service That Meets The Requirements Of Our Clients, First
              Time, Every Time.
            </li>
            <li>To Provide Well Managed, Trained And Motivated Personnel.</li>
            <li>
              To Meeting Any Regulatory And Statutory Requirements Applicable To
              Our Business.
            </li>
            <li>
              To The Development And Maintenance Of A QUALITY SYSTEM Designed
              To:
              <ul>
                <li>– Ensure Continuous Improvement.</li>
                <li>– Meet The Requirements Of SABS ISO 9001 : 2015.</li>
              </ul>
            </li>
            <li>
              To Rendering Above Average Services To The Satisfaction Of Our
              Clients In The Field O Materials Handling Equipment And Service
              That Will Highlight Our Competence.
            </li>
            <li>
              The Quality Policy Will Be Reviewed Annually To Ensure It Is
              Current.
            </li>
          </ul>
        </div>
        <div className="relative lg:basis-1/2 basis-full">
          <Image
            src={"/images/hp-cranes-img-1.png"}
            width={762}
            height={536}
            alt="HP Cranes Image"
            className=" md:w-[550px] w-[450px] lg:ml-auto rounded-xl md:shadow-yellow-down shadow"
          />
        </div>
      </div>
    </div>
  );
}

function Statistics() {
  const statistics = [
    { item_name: "Projects Completed", value: 1240 },
    { item_name: "Happy Clients", value: 1750 },
    { item_name: "Workers Employed", value: 984 },
    { item_name: "Awards Won", value: 96 },
  ];
  return (
    <div className="py-20">
      <div className="bg-statistics bg-cover bg-center">
        <div className="relative top-0 py-16 bg-black/80">
          <div className="container 2xl:max-w-screen-2xl mx-auto">
            <div className="grid md:grid-cols-4 md:grid-rows-1 grid-cols-2 grid-rows-2 gap-8">
              {statistics.map(({ item_name, value }, index) => (
                <div key={index} className="text-white text-center">
                  <h1 className="text-4xl font-bold mb-4">
                    <CountUp end={value} duration={3} />
                  </h1>
                  <h4 className="text-sm md:text-lg">{item_name}</h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ProductsAndServices() {
  return (
    <div className="container 2xl:max-w-screen-2xl mx-auto">
      <SectionHeading heading={"Products & Services"} />
      <div className="lg:py-20 pt-10 pb-20 overflow-hidden">
        <SlickSlider>
          <div className="px-2">
            <Image
              src={"/images/product-1.png"}
              width={578}
              height={350}
              alt="Product Image"
              className="rounded-xl mx-auto"
            />
          </div>
          <div className="px-2">
            <Image
              src={"/images/product-2.png"}
              width={578}
              height={350}
              alt="Product Image"
              className="rounded-xl mx-auto"
            />
          </div>
          <div className="px-2">
            <Image
              src={"/images/product-3.png"}
              width={578}
              height={350}
              alt="Product Image"
              className="rounded-xl mx-auto"
            />
          </div>
          <div className="px-2">
            <Image
              src={"/images/product-2.png"}
              width={578}
              height={350}
              alt="Product Image"
              className="rounded-xl mx-auto"
            />
          </div>{" "}
        </SlickSlider>
      </div>
    </div>
  );
}
function Gallery() {
  return (
    <div className="container 2xl:max-w-screen-2xl mx-auto">
      <SectionHeading heading={"Gallery"} />
      <div className="lg:py-20 pt-10 pb-20 overflow-hidden">
        <SlickSlider>
          <div className="px-2">
            <Image
              src={"/images/gallery-1.png"}
              width={579}
              height={579}
              alt="Product Image"
              className="rounded-xl mx-auto"
            />
          </div>
          <div className="px-2">
            <Image
              src={"/images/gallery-2.png"}
              width={579}
              height={579}
              alt="Product Image"
              className="rounded-xl mx-auto"
            />
          </div>
          <div className="px-2">
            <Image
              src={"/images/gallery-3.png"}
              width={579}
              height={570}
              alt="Product Image"
              className="rounded-xl mx-auto"
            />
          </div>
          <div className="px-2">
            <Image
              src={"/images/gallery-2.png"}
              width={579}
              height={579}
              alt="Product Image"
              className="rounded-xl mx-auto"
            />
          </div>{" "}
        </SlickSlider>
      </div>
    </div>
  );
}
function Projects() {
  return (
    <div className="container 2xl:max-w-screen-2xl mx-auto">
      <SectionHeading heading={"Projects"} />
      <div className="lg:py-20 pt-10 pb-20 overflow-hidden ">
        <SlickSlider>
          <div className="p-2">
            <ProjectCard
              image={"/images/project-1.png"}
              title={"INSTALLATION COMPLETE IN ZAMBIA"}
              desc={"Installation Of ; 70 Stroke, 10 Ton Overhead Crane..."}
            />
          </div>
          <div className="p-2">
            <ProjectCard
              image={"/images/project-2.png"}
              title={"Elandsfontein"}
              desc={
                "Give Credit where Credit is due. When life seems to run by us, and we sometimes forget to thank the..."
              }
            />
          </div>
          <div className="p-2">
            <ProjectCard
              image={"/images/project-3.png"}
              title={"MANUFACTURING OF LEG PROTECTERS"}
              desc={"Manufacturing Of Special Racking LEG Protectors..."}
            />
          </div>
          <div className="p-2">
            <ProjectCard
              image={"/images/project-2.png"}
              title={"Elandsfontein"}
              desc={
                "Give Credit where Credit is due. When life seems to run by us, and we sometimes forget to thank the..."
              }
            />
          </div>
        </SlickSlider>
      </div>
    </div>
  );
}

function ProjectCard({ image, title, desc }) {
  return (
    <div className="flex flex-col rounded-xl shadow-md h-[450px]">
      <Image
        src={image}
        height={380}
        width={585}
        alt={title + ` Image`}
        className="rounded-t-xl"
      />

      <div className="my-2 px-4">
        <h1 className="text-lg font-bold uppercase h-12">{title}</h1>
        <p className="mb-4 h-16">{desc}</p>
      </div>
      <button className="relative bottom-3 left-4 text-left underline">
        <span className="font-medium">Read More</span>
        <HiArrowRight className="inline ml-2" />
      </button>
    </div>
  );
}
