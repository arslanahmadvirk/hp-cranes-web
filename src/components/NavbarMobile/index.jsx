import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { BiMenuAltRight, BiX } from "react-icons/bi";

const nav_links = [
  {
    path: "/",
    link: "Home",
  },
  {
    path: "/services",
    link: "Product & Services",
  },

  {
    path: "/projects",
    link: "Projects",
  },

  {
    path: "/gallery",
    link: "Gallery",
  },
  {
    path: "/contact_us",
    link: "Contact Us",
  },
];
export default function MobileNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  const togglePanel = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className=" h-20 bg-primary-yellow-dark overflow-hidden">
        <div className="mx-5 py-5 flex justify-between items-center ">
          <Image
            src={"/images/company-logo.png"}
            height={95}
            width={399}
            alt="Company Logo"
            className="sm:w-48 w-40"
          />

          <button
            onClick={togglePanel}
            className="focus:outline-none active:outline-none z-20"
          >
            {isOpen ? (
              <BiX className="w-10 h-10" />
            ) : (
              <BiMenuAltRight className="w-10 h-10" />
            )}
          </button>
        </div>
      </div>
      <SidePanel show={isOpen} />
    </>
  );
}

function SidePanel({ show }) {
  return (
    <div
      className={`w-screen h-screen fixed top-0 left-0 yellow-gradient  transition-transform duration-500 ${
        !show && "translate-x-full"
      }`}
    >
      <nav className="p-4 relative top-12">
        <ul className="list-none divide-y divide-yellow-600 overflow-hidden">
          {nav_links.map(({ path, link }, index) => {
            return (
              <li
                key={index}
                style={{ transitionDelay: `${2 + index}00ms` }}
                className={`py-2 transition-transform ${
                  show ? "translate-x-0" : "translate-x-full"
                }`}
              >
                <Link href={path} className="font-medium focus:outline-none">
                  {link}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}
