import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function SlickSlider() {
  const settings = { dots: true };
  return (
    <Slider
      centerMode={true}
      accessibility={true}
      slidesToShow={3}
      slidesToScroll={1}
      autoplay={true}
      autoplaySpeed={5000}
      infinite={true}
      dots={true}
      adaptiveHeight={true}
      centerPadding="0"
      customPaging={(i) => {
        return (
          <span className="w-3 h-3 inline-block rounded-full border border-gray-300"></span>
        );
      }}
      dotsClass="slick-dots slick-thumbs"
    >
      <div className="px-2">
        <Image
          src={"/images/product-1.png"}
          width={578}
          height={350}
          alt="Product Image"
          className="rounded-xl mx-auto"
        />
      </div>
      <div className="px-2">
        <Image
          src={"/images/product-2.png"}
          width={578}
          height={350}
          alt="Product Image"
          className="rounded-xl mx-auto"
        />
      </div>
      <div className="px-2">
        <Image
          src={"/images/product-3.png"}
          width={578}
          height={350}
          alt="Product Image"
          className="rounded-xl mx-auto"
        />
      </div>
      <div className="px-2">
        <Image
          src={"/images/product-2.png"}
          width={578}
          height={350}
          alt="Product Image"
          className="rounded-xl mx-auto"
        />
      </div>
    </Slider>
  );
}
