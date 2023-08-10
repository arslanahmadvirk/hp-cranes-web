import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FiSearch } from "react-icons/fi";

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
export default function Navbar() {
  return (
    <div className="md:h-40 h-36 bg-primary-yellow-dark shadow-md">
      <div className="container 2xl:max-w-screen-2xl mx-auto">
        <div className="flex justify-between items-center gap-6 py-4 border-b border-white/50">
          <div className="inline-flex lg:gap-12 gap-6 justify-between lg:text-base text-sm font-medium">
            <span>{"TEL: (011) 740 9725/28"}</span>
            <span>{"FAX: (011) 740 8416"}</span>
          </div>
          <div className="flex justify-between items-center gap-6">
            <SearchInput />
            <BreakdownBtn />
          </div>
        </div>
        <div className="flex justify-between items-center py-4">
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

function SearchInput() {
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
        className="py-1.5 px-4 pr-12 rounded-full drop-shadow-md shadow-black w-64 text-sm outline-primary-yellow-dark "
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

function BreakdownBtn() {
  return (
    <button className="bg-white py-1.5 px-4 rounded-full text-sm font-semibold drop-shadow-md shadow-black hover:text-primary-yellow-dark focus:text-primary-yellow-dark active:scale-95 transition focus:outline-none">
      Breakdowns
    </button>
  );
}

function Navigation() {
  return (
    <nav className="2xl:basis-2/5 lg:basis-6/12 basis-8/12 flex justify-between font-medium md:text-base text-sm">
      {nav_links.map(({ path, link }) => (
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
