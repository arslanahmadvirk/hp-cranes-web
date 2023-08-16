import Hero from "@/components/Hero";
import ContactUs from "@/components/ContactUs";
import SectionHeading from "@/components/SectionHeading";
import { useRouter } from "next/router";
import Head from "next/head";

export default function Contact() {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>Contact Us | HP Cranes</title>
      </Head>
      <Hero pageName={"Contact Us"} />
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
