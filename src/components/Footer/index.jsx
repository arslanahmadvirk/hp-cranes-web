import Image from "next/image";
import Link from "next/link";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaGooglePlusG,
  FaGithub,
  FaLinkedinIn,
  FaDribbble,
} from "react-icons/fa";
export default function Footer() {
  return (
    <footer className="yellow-gradient pt-20 pb-6">
      <div className=" container 2xl:max-w-screen-2xl mx-auto lg:flex block justify-between gap-10 lg:px-0 px-8 mb-16 lg:space-y-0 space-y-12">
        <div className="basis-4/12">
          <Image
            src={"/images/company-logo.png"}
            height={95}
            width={399}
            alt="Company Logo"
            className="lg:w-72 w-48 mb-4"
          />
          <p className="font-medium text-sm">
            Committed to excellence in crane products, services and inspections.
          </p>
        </div>
        <div className="basis-4/12">
          <h2 className="font-bold lg:text-lg text-xl mb-4">Certifications</h2>
          <div className="flex flex-wrap gap-6 lg:w-4/5 w-full">
            <Image
              src={"/images/certifications/sabs.png"}
              alt="Certificate Image"
              width={169}
              height={120}
              className="lg:w-auto w-28 object-contain"
            />
            <Image
              src={"/images/certifications/ecsa.png"}
              alt="Certificate Image"
              width={102}
              height={120}
              className="lg:w-auto w-28 object-contain"
            />
            <Image
              src={"/images/certifications/ohsa.png"}
              alt="Certificate Image"
              width={87}
              height={120}
              className="lg:w-auto w-28 object-contain"
            />
            <Image
              src={"/images/certifications/nkonki.png"}
              alt="Certificate Image"
              width={189}
              height={103}
              className="lg:w-auto w-28 object-contain"
            />
          </div>
        </div>
        <div className="basis-4/12 ">
          <h2 className="font-bold lg:text-lg text-xl mb-4">Social Links</h2>
          <div className="flex justify-between mb-8 w-4/5">
            <Link
              href={
                "https://www.facebook.com/people/HP-Cranes-Consulting/100063529211823"
              }
              target="_blank"
            >
              <FaFacebookF className="w-6 h-6 inline-block" />
            </Link>
            <Link href={"/"} target="_blank">
              <FaTwitter className="w-6 h-6 inline-block" />
            </Link>
            <Link href={"/"} target="_blank">
              <FaInstagram className="w-6 h-6 inline-block" />
            </Link>
            <Link href={"/"} target="_blank">
              <FaDribbble className="w-6 h-6 inline-block" />
            </Link>
            <Link
              href={
                "https://workspace.google.com/blog/product-announcements/what-you-need-to-know-about-the-sunset-of-consumer-google-plus-on-april-second"
              }
              target="_blank"
            >
              <FaGooglePlusG className="w-6 h-6 inline-block" />
            </Link>
            <Link href={"/"} target="_blank">
              <FaGithub className="w-6 h-6 inline-block" />
            </Link>
            <Link
              href={
                "https://www.linkedin.com/authwall?trk=qf&original_referer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2F"
              }
              target="_blank"
            >
              <FaLinkedinIn className="w-6 h-6 inline-block" />
            </Link>
          </div>
          <h2 className="font-bold lg:text-lg text-xl mb-2">Tel:</h2>
          <Link
            href={"tel:+0117409725/28"}
            className="font-medium hover:underline underline-offset-2"
          >
            {"(011) 740 9725/28"}
          </Link>
        </div>
      </div>
      <h5 className="font-medium text-center text-xs lg:text-sm px-8">
        Copyright © 2023
        <span className="underline underline-offset-2 mx-2">
          HP CRANES CONSULTING CC
        </span>{" "}
        - Get Hooked
      </h5>
    </footer>
  );
}
