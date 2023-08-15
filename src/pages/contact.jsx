import ContactUs from "@/components/ContactUs";
import SectionHeading from "@/components/SectionHeading";
import Image from "next/image";
import { useRouter } from "next/router";

export default function Contact() {
  const router = useRouter();
  return (
    <>
      <div
        className={
          "relative bg-hero-2 h-28 md:h-48 lg:h-72 xl:h-80  bg-center bg-cover"
        }
      >
        <div className="absolute top-0 left-0 w-full h-full flex items-center px-8 md:px-12 lg:px-16 xl:px-20 bg-black/60 text-white  text-sm md:text-base">
          <div>
            <h1 className="uppercase font-bold lg:text-5xl md:text-4xl text-3xl  mb-4">
              contact us
            </h1>
            <p>Home . Contact Us</p>
          </div>
        </div>
      </div>
      <div className="mt-24">
        <ContactUs />
      </div>
      <div className="mb-24">
        <SectionHeading heading={"Locate Us"} />
        <div className="container 2xl:max-w-screen-2xl mx-auto mt-14 rounded-xl h-80 shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3579.012005040982!2d28.3790236745114!3d-26.228799464974493!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e95235b4c16a755%3A0xddca15596de07db8!2sHP%20CRANES%20CONSULTING%20LTD!5e0!3m2!1sen!2s!4v1692121747470!5m2!1sen!2s"
            loading="lazy"
            className="rounded-xl h-full w-full"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </>
  );
}
