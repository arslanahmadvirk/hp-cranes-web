import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FiSearch } from "react-icons/fi";

export default function Navbar() {
  return (
    <div id="Navbar" className="md:h-32 h-28 bg-primary-yellow-dark shadow-md">
      <div className="container 2xl:max-w-screen-2xl mx-auto">
        <div className="flex justify-between items-center gap-6 py-2 border-b border-white/50">
          <div className="inline-flex lg:gap-12 gap-6 justify-between text-sm font-medium">
            <span>{"TEL: (011) 740 9725/28"}</span>
            <span>{"FAX: (011) 740 8416"}</span>
          </div>
          <div className="flex justify-between items-center gap-6">
            <SearchInput />
            <BreakdownBtn />
          </div>
        </div>
        <div className="flex justify-between items-center py-2">
          <Link href={"/"}>
            <Image
              src={"/images/company-logo.png"}
              height={95}
              width={399}
              alt="Company Logo"
              className="w-56"
            />
          </Link>
          <Navigation />
        </div>
      </div>
    </div>
  );
}

function SearchInput({ padding = "py-1.5 px-4" }) {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchQuery = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearch = () => {
    console.log(searchQuery);
  };

  const handleKeyPress = (e) => {
    e.key === "Enter" && handleSearch();
  };

  return (
    <div className="relative bg-white rounded-full">
      <input
        type="text"
        placeholder="Search"
        name="search-query"
        value={searchQuery}
        className={`${padding} pr-12 rounded-full drop-shadow-md shadow-black lg:w-64 w-56 text-sm outline-primary-yellow-dark`}
        onChange={handleSearchQuery}
        onKeyDown={handleKeyPress}
      />
      <button
        onClick={handleSearch}
        className="absolute top-2 right-4 bg-white focus:outline-none"
      >
        <FiSearch className="w-4 h-4 stroke-gray-500" />
      </button>
    </div>
  );
}

function BreakdownBtn({ togglePanel }) {
  return (
    <Link
      href={"/breakdowns"}
      onClick={togglePanel}
      className="bg-white py-1.5 px-4 rounded-full text-sm font-semibold drop-shadow-md shadow-black hover:text-primary-yellow-dark focus:text-primary-yellow-dark active:scale-95 transition focus:outline-none"
    >
      Breakdowns
    </Link>
  );
}

function Navigation() {
  const navLinks = [
    {
      path: "/",
      link: "Home",
    },
    {
      path: "//products_&_services",
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
    <nav className="2xl:basis-2/5 lg:basis-6/12 basis-8/12 flex justify-between font-medium xl:text-base text-sm">
      {navLinks.map(({ path, link }) => (
        <Link
          key={path}
          href={path}
          className="hover:underline focus:underline focus:outline-none underline-offset-2"
        >
          {link}
        </Link>
      ))}
    </nav>
  );
}

export { SearchInput, BreakdownBtn };
