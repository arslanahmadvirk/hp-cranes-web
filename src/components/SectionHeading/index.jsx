export default function SectionHeading({ heading }) {
  return (
    <>
      <h1 className="text-center px-8 mb-2 font-bold text-xl lg:text-2xl tracking-wider">
        {heading || "Your Heading"}
      </h1>
      <hr className="w-24 mx-auto border-t-3 border-primary-yellow-dark" />
    </>
  );
}
