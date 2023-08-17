import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { BiMenuAltRight, BiSearch, BiX } from "react-icons/bi";
import { BreakdownBtn, SearchInput } from "../Navbar";

export default function MobileNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [disableScroll, setDisableScroll] = useState(false);

  const togglePanel = () => {
    setIsOpen(!isOpen);
    toggleScroll();
  };
  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  const toggleScroll = () => {
    if (disableScroll) {
      document.body.style.overflow = "auto";
    } else {
      document.body.style.overflow = "hidden";
    }
    setDisableScroll(!disableScroll);
  };

  return (
    <>
      <div className="relative h-20 bg-primary-yellow-dark overflow-hidden">
        <SidePanel show={isOpen} togglePanel={togglePanel} />
        <div className="mx-5 py-5 flex justify-between items-center ">
          <Image
            src={"/images/company-logo.png"}
            height={95}
            width={399}
            alt="Company Logo"
            className="sm:w-48 w-40"
          />

          <div className="flex items-center gap-4">
            <button onClick={toggleSearch} className="z-[9999]">
              {isSearchOpen ? (
                <BiX className="w-10 h-10" />
              ) : (
                <BiSearch className="w-8 h-8" />
              )}
            </button>
            <button
              onClick={togglePanel}
              className="focus:outline-none active:outline-none z-[9999]"
            >
              {isOpen ? (
                <BiX className="w-10 h-10" />
              ) : (
                <BiMenuAltRight className="w-10 h-10" />
              )}
            </button>
          </div>
        </div>
        <div
          className={`absolute left-0 top-0 h-full w-4/5 px-4 bg-primary-yellow-dark flex items-center ${
            isSearchOpen ? "opacity-100" : "opacity-0"
          }`}
        >
          <SearchInput padding="py-2 px-4" />
        </div>
      </div>
    </>
  );
}

function SidePanel({ show, togglePanel }) {
  const navLinks = [
    {
      path: "/",
      link: "Home",
    },
    {
      path: "/ProductsAndServices",
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
      path: "/contact",
      link: "Contact Us",
    },
  ];
  return (
    <div
      className={`w-screen h-screen fixed top-0 left-0 z-50 yellow-gradient transition-transform duration-500 ${
        !show && "translate-x-full"
      }`}
    >
      <nav className="p-4 relative top-12">
        <ul className="list-none divide-y divide-yellow-600 overflow-hidden">
          {navLinks.map(({ path, link }, index) => {
            return (
              <li
                key={index}
                style={{ transitionDelay: `${2 + index}00ms` }}
                className={`py-2 transition-transform ${
                  show ? "translate-x-0" : "translate-x-full"
                }`}
              >
                <Link
                  onClick={togglePanel}
                  href={path}
                  className="font-medium focus:outline-none"
                >
                  {link}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="mt-4 text-center">
          <BreakdownBtn togglePanel={togglePanel} />
        </div>
      </nav>
    </div>
  );
}
