import Hero from "@/components/Hero";
import Image from "next/image";
import Link from "next/link";

export default function Breakdowns() {
  const imageCategories = [
    "crane images",
    "sling inspection images",
    "electrical images",
    "factory maintenance images",
    "radio control system images",
    "construction images",
    "rates images",
  ];
  return (
    <div className=" 2xl:max-w-screen-2xl mx-auto">
      <Hero pageName={"Breakdowns"} />
      <div className="container mx-auto my-24">
        <div className="flex flex-wrap lg:flex-nowrap justify-between items-center gap-12">
          <div className="lg:w-1/2 w-full">
            <Image
              src={"/images/breakdown-img.png"}
              alt="Breakdowns Image"
              height={543}
              width={943}
              className="w-full"
            />
          </div>
          <div className="lg:w-1/2 w-full lg:mx-0 mx-5">
            <h2 className="font-bold text-lg mb-4">
              Please contact 011 740 9725 to call in your breakdown.
            </h2>
            <p>Alternatively please contact one of the following numbers:</p>
            <ul className="list-inside list-disc mb-12">
              <li>Henry – 082 564 8240</li>
              <li>Donavon – 082 784 9061</li>
              <li>Debbie – 082 570 5085</li>
            </ul>
            <p className="text-red-500 font-semibold">
              {" "}
              * Please do not contact technicians on their cellphones to book
              your breakdown.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
