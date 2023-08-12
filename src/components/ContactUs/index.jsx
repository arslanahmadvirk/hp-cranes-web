import SectionHeading from "../SectionHeading";
import { FiPhone } from "react-icons/fi";
import { MdOutlineMail, MdOutlineLocationOn } from "react-icons/md";
export default function ContactUs() {
  return (
    <div className="container 2xl:max-w-screen-2xl mx-auto">
      <SectionHeading heading={"Contact Us"} />
      <div className="flex lg:flex-row flex-col-reverse lg:gap-0 gap-20 justify-between py-20 lg:mx-10 mx-auto">
        <div className="lg:basis-1/2 basis-full lg:mx-0 mx-10">
          <h1 className="font-bold lg:text-4xl text-2xl mb-12">
            Get in touch with <br /> our team today
          </h1>
          <div className="flex flex-wrap gap-12 ">
            <ContactItem
              icon={<FiPhone className="w-8 h-8" />}
              item={"Phone"}
              value={"011 740 8416  / 011 740 9725"}
            />
            <ContactItem
              icon={<MdOutlineMail className="w-8 h-8" />}
              item={"Email"}
              value={"admin1@hpcranes.co.za"}
            />
            <ContactItem
              icon={<MdOutlineLocationOn className="w-8 h-8" />}
              item={"Address"}
              value={"11 Queen Ave, Brakpan North, SA"}
            />
          </div>
        </div>
        <div className="lg:basis-1/2 basis-full">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}

function ContactItem({ icon, item, value }) {
  return (
    <div className="flex gap-4">
      <div className="flex items-center justify-center h-14 w-14 bg-primary-yellow">
        {icon}
      </div>
      <div>
        <h3 className="font-bold text-lg">{item}</h3>
        <h6 className="font-medium text-gray-600">{value}</h6>
      </div>
    </div>
  );
}

function ContactForm() {
  return (
    <form className="md:w-96 w-80 mx-auto flex flex-col gap-4 p-8 rounded-xl bg-white border border-gray-300 md:shadow-double shadow">
      <input
        type="text"
        className="input-field"
        name="name"
        id="name"
        placeholder="Name"
      />
      <input
        type="email"
        className="input-field"
        name="email"
        id="email"
        placeholder="Email"
      />
      <input
        type="text"
        className="input-field"
        name="phone"
        id="phone"
        placeholder="Phone"
      />
      <textarea
        name="message"
        id="message"
        className="h-28 border border-gray-700 rounded-2xl px-4 py-2 placeholder:italic placeholder:text-gray-500 resize-none"
        placeholder="Message"
      ></textarea>
      <button
        onClick={(e) => e.preventDefault()}
        className="py-2 mt-2 rounded-full bg-primary-yellow hover:bg-primary-yellow-dark font-semibold text-lg"
      >
        Send Message
      </button>
    </form>
  );
}
