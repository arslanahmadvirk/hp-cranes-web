import ContactUs from "@/components/ContactUs";
import CountUp, { useCountUp } from "react-countup";
import SectionHeading from "@/components/SectionHeading";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import SlickSlider from "@/components/SlickSlider";
import { FaStar } from "react-icons/fa";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import WebLayout from "@/layouts/WebLayout";
import useIntersection from "@/hooks/useIntersection";

export default function Home() {
  const isIntersecting = useIntersection("contactUs");
  return (
    <>
      <Head>
        <title>Home | HP Cranes</title>
      </Head>
      <WebLayout>
        <Hero />
        <AboutUs />
        <ProductsAndServices />
        <Statistics />
        <Gallery />
        <WhyChooseUs />
        <Projects />
        <Testimonials />
        <div
          id="contactUs"
          className={`transition duration-1000 ease-out ${
            isIntersecting
              ? "translate-y-0 opacity-100"
              : "translate-y-10 opacity-0"
          }`}
        >
          <ContactUs />
        </div>
      </WebLayout>
    </>
  );
}

function Hero() {
  const heroSlides = [
    {
      image: "/images/hero-1.png",
    },
    {
      image: "/images/hero-2.png",
    },
    {
      image: "/images/hero-3.png",
    },
    {
      image: "/images/hero-4.png",
    },
  ];
  return (
    <div className="hero-slider relative 2xl:max-w-screen-2xl mx-auto overflow-hidden">
      <Slider
        fade={true}
        autoplay={true}
        autoplaySpeed={2000}
        className="relative"
        nextArrow={
          <Image
            src={"/images/arrow-right.png"}
            height={50}
            width={50}
            alt="Next"
          />
        }
        prevArrow={
          <Image
            src={"/images/arrow-left.png"}
            height={50}
            width={50}
            alt="Prev"
            style={{ position: "absolute !important" }}
          />
        }
        customPaging={(i) => {
          return (
            <span className="yellow-dot w-3 h-3 inline-block rounded-full border border-gray-300"></span>
          );
        }}
      >
        {heroSlides.map(({ image }) => (
          <div key={image} className="relative">
            <Image
              src={image}
              width={1024}
              height={720}
              alt="Hero Image"
              className="xl:w-full xl:h-[500px] object-cover"
            />
            <div className="carousel-overlay absolute h-full top-0 left-0 bg-black/50"></div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

function AboutUs() {
  const isIntersecting = useIntersection("aboutUs");

  const recent_posts = [
    "WORK DIRECTOR ACHIEVES ELECTRICAL RED SEAL DIPLOMA",
    " INSTALLATION COMPLETE IN ZAMBIA",
    " PRESERVING NATURE",
    "MANUFACTURING OF LEG PROTECTERS",
    " DISTRIBUTORS OF HETRONIC",
  ];
  return (
    <div
      id="aboutUs"
      className={`container 2xl:max-w-screen-2xl mx-auto lg:my-24 my-14 transition duration-1000 ease-out ${
        isIntersecting
          ? "translate-y-0 opacity-100"
          : "translate-y-10 opacity-0"
      }`}
    >
      <div className="flex lg:flex-row flex-col justify-between gap-20 lg:mx-10">
        <div className="basis-8/12 mx-6 lg:mx-0">
          <SectionHeading heading={"About Us"} />
          <div className="mt-14 text-justify">
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
              <Link
                href={"https://www.youtube.com/watch?v=7I90pjRYXoA"}
                target="_blank"
              >
                <Image
                  src={"/images/video-1.png"}
                  width={410}
                  height={265}
                  className="w-80 mx-auto mb-4"
                  alt="Video Thumbnail"
                />
                <span className="underline">How to calculate a sling load</span>
              </Link>
              <Link
                href={"https://www.youtube.com/embed/zCuciG7z1qc"}
                target="_blank"
              >
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
  const isIntersecting = useIntersection("WhyChooseUs");
  return (
    <div
      id="WhyChooseUs"
      className={`container 2xl:max-w-screen-2xl mx-auto lg:mb-24 mb-14 transition duration-1000 ease-out ${
        isIntersecting
          ? "translate-y-0 opacity-100"
          : "translate-y-10 opacity-0"
      }`}
    >
      <SectionHeading heading={"Why Choose HP Cranes ?"} />
      <div className="flex lg:flex-row flex-col-reverse lg:gap-0 gap-20 justify-between items-center mx-5 mt-14">
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
  useCountUp({
    ref: "counter",
    enableScrollSpy: true,
    scrollSpyDelay: 1000,
  });
  return (
    <div id="statistics" className="lg:mb-24 mb-14">
      <div className="bg-statistics bg-cover bg-center">
        <div className="relative top-0 py-16 bg-black/80">
          <div className="container 2xl:max-w-screen-2xl mx-auto">
            <div className="grid md:grid-cols-4 md:grid-rows-1 grid-cols-2 grid-rows-2 gap-8">
              {statistics.map(({ item_name, value }, index) => (
                <div key={index} className="text-white text-center">
                  <h1 className="text-4xl font-bold mb-4">
                    <CountUp end={value} duration={3} enableScrollSpy />
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
  const isIntersecting = useIntersection("product&Services");
  const productSlides = [
    {
      image: "/images/products/cranes.png",
      service: "Cranes",
      path: "product_&_services/cranes",
    },
    {
      image: "/images/products/factory-maintenance.png",
      service: "Factory Maintenance",
      path: "product_&_services/factory_maintenance",
    },
    {
      image: "/images/products/construction.png",
      service: "Construction",
      path: "product_&_services/construction",
    },
    {
      image: "/images/products/electrical.png",
      service: "Electrical",
      path: "product_&_services/electrical",
    },
    {
      image: "/images/products/sling-inspection.png",
      service: "Sling Inspection",
      path: "product_&_services/sling_inspection",
    },
    {
      image: "/images/products/radio-control-system.png",
      service: "Radio Button Controller",
      path: "product_&_services/radio_control_system",
    },
    {
      image: "/images/products/rates.png",
      service: "Rates",
      path: "product_&_services/rates",
    },
  ];
  return (
    <div
      id="product&Services"
      className={`container 2xl:max-w-screen-2xl mx-auto lg:pb-24 pb-14 overflow-hidden transition duration-1000 ease-out ${
        isIntersecting
          ? "translate-y-0 opacity-100"
          : "translate-y-10 opacity-0"
      }`}
    >
      <SectionHeading heading={"Products & Services"} />
      <div className="mt-14 ">
        <SlickSlider>
          {productSlides.map(({ image, service, path }) => (
            <div key={image} className="p-2">
              <Link href={path}>
                <div className="relative service-card rounded-xl cursor-pointer">
                  <Image
                    src={image}
                    width={578}
                    height={350}
                    alt="Product Image"
                    className="service-image rounded-xl mx-auto transition duration-300 object-cover"
                  />
                  <div className="service-card__overlay absolute h-full w-full flex items-center justify-center top-0 left-0 bg-black/60 opacity-0 rounded-xl transition duration-300">
                    <h1 className="font-bold text-2xl text-white text-center uppercase">
                      {service}
                    </h1>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </SlickSlider>
      </div>
      <div className="text-center mt-14">
        <Link
          href={"/product_&_services"}
          className="py-3 px-8 rounded-full font-semibold bg-primary-yellow hover:bg-primary-yellow-dark active:scale-95 transition focus:outline-none"
        >
          View More
        </Link>
      </div>
    </div>
  );
}

function Gallery() {
  const isIntersecting = useIntersection("gallery");
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
    {
      image: "/images/gallery/slider-9.png",
    },
    {
      image: "/images/gallery/slider-10.png",
    },
  ];
  return (
    <div
      id="gallery"
      className={`container 2xl:max-w-screen-2xl mx-auto lg:pb-24 pb-14 overflow-hidden transition duration-1000 ease-out ${
        isIntersecting
          ? "translate-y-0 opacity-100"
          : "translate-y-10 opacity-0"
      }`}
    >
      <SectionHeading heading={"Gallery"} />
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
      <div className="text-center mt-14">
        <Link
          href={"/gallery"}
          className="py-3 px-8 rounded-full font-semibold bg-primary-yellow hover:bg-primary-yellow-dark active:scale-95 transition focus:outline-none"
        >
          View More
        </Link>
      </div>
    </div>
  );
}

function Projects() {
  const isIntersecting = useIntersection("projects");
  const projects = [
    {
      image: "/images/project-1.png",
      title: "INSTALLATION COMPLETE IN ZAMBIA",
      desc: "Installation Of ; 70 Stroke, 10 Ton Overhead Crane...",
      link: "/projects/#projectZambia",
    },
    {
      image: "/images/project-2.png",
      title: "Elandsfontein",
      desc: "Give Credit where Credit is due. When life seems to run by us, and we sometimes forget to thank the...",
      link: "/projects/#projectElandsfontein",
    },
    {
      image: "/images/project-3.png",
      title: "MANUFACTURING OF LEG PROTECTERS",
      desc: "Manufacturing Of Special Racking LEG Protectors...",
      link: "/projects/#projectLegProtectors",
    },
  ];
  return (
    <div
      id="projects"
      className={`container 2xl:max-w-screen-2xl mx-auto lg:pb-24 pb-14 overflow-hidden transition duration-1000 ease-out ${
        isIntersecting
          ? "translate-y-0 opacity-100"
          : "translate-y-10 opacity-0"
      }`}
    >
      <SectionHeading heading={"Projects"} />
      <div className=" mt-14 ">
        <SlickSlider>
          {projects.map(({ image, title, desc, link }) => (
            <div key={image} className="px-4 py-2">
              <ProjectCard
                image={image}
                title={title}
                desc={desc}
                link={link}
              />
            </div>
          ))}
        </SlickSlider>
      </div>
    </div>
  );
}

function ProjectCard({ image, title, desc, link }) {
  return (
    <div className="flex flex-col rounded-xl shadow-md h-[450px] transition duration-300 hover:-translate-y-1  hover:shadow-lg cursor-pointer">
      <Image
        src={image}
        height={380}
        width={585}
        alt={title + ` Image`}
        className="rounded-t-xl"
      />

      <div className="my-2 px-4">
        <h1 className="text-lg font-bold uppercase h-12 mb-2">{title}</h1>
        <p className="mb-4 h-16">{desc}</p>
      </div>
      <Link
        href={link || "#"}
        className="relative bottom-3 left-4 text-left underline"
      >
        <span className="font-medium">Read More</span>
        <HiArrowRight className="inline ml-2" />
      </Link>
    </div>
  );
}

function Testimonials() {
  const isIntersecting = useIntersection("testimonials");
  return (
    <div
      id="testimonials"
      className={`bg-primary-yellow-dark py-10 lg:mb-24 mb-14 transition duration-1000 ease-out ${
        isIntersecting
          ? "translate-y-0 opacity-100"
          : "translate-y-10 opacity-0"
      }`}
    >
      <div className="mb-10">
        <h1 className="text-center px-8 mb-2 font-bold text-xl lg:text-2xl tracking-wider">
          Testimonials
        </h1>
        <hr className="w-24 mx-auto border-t-3 border-white" />
      </div>
      <div className="mx-14">
        <Slider
          centerMode={true}
          accessibility={true}
          autoplay={true}
          autoplaySpeed={5000}
          infinite={true}
          dots={true}
          adaptiveHeight={true}
          centerPadding="0"
          nextArrow={
            <HiArrowRight
              fill="white"
              style={{ height: "40px", width: "40px" }}
            />
          }
          prevArrow={
            <HiArrowLeft
              fill="white"
              style={{ height: "40px", width: "40px" }}
            />
          }
          customPaging={(i) => {
            return (
              <span className="white-dot w-3 h-3 inline-block rounded-full border border-gray-300"></span>
            );
          }}
          dotsClass="slick-dots slick-thumbs"
        >
          <Testimonial />
          <Testimonial />
          <Testimonial />
        </Slider>
      </div>
    </div>
  );
}

function Testimonial() {
  return (
    <div className="px-4">
      <div class="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center">
        <Image
          src={"/images/testimonial-user.png"}
          height={120}
          width={120}
          className="w-24 mx-auto rounded-full object-cover mb-8"
          alt="Testimonial Image"
        />
        <p className="italic mb-8 max-w-2xl mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique
          possimus tempore eius temporibus consectetur sed. Nesciunt vel alias
          fugiat laborum? Obcaecati quidem fugit dolor, libero quisquam dolorem
          consectetur dolorum nesciunt ipsa quam voluptate, molestias quas
          expedita amet similique alias repellendus magnam inventore nemo
          aspernatur, sint blanditiis enim?
        </p>
        <div className="flex justify-center gap-2 mb-8">
          <FaStar className="fill-white" />
          <FaStar className="fill-white" />
          <FaStar className="fill-white" />
          <FaStar className="fill-white" />
          <FaStar className="fill-white" />
        </div>
        <h1 className="font-bold md:text-lg lg:text-xl mb-8">John Smith</h1>
      </div>
    </div>
  );
}
