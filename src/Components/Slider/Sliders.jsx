import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { PiStarFourFill } from "react-icons/pi";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;

  return (
    <FaArrowRight
      className={className}
      style={{
        ...style,
        display: "block",
        color: "white",
        zIndex: 100,
        right: window.innerWidth < 768 ? "10%" : "32%",
        right: "10%", 
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <FaArrowLeft
      className={className}
      style={{
        ...style,
        display: "block",
        zIndex: 100,
        top: "135%",
        left: window.innerWidth < 768 ? "10%" : "32%",
        color: "white",
      }}
      onClick={onClick}
    />
  );
}

const testimonialsData = [
  {
    id: 1,
    quote:
      "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads. The team is professional, responsive, and truly cares about the success of our business.",
    name: "John Smith",
    title: "Marketing Director at XYZ Corp",
  },
  {
    id: 2,
    quote:
      "Positivus has completely transformed the way we approach digital marketing. Their expertise and dedication are unmatched.",
    name: "Sarah Smith",
    title: "CEO at Bright Marketing",
  },
  {
    id: 3,
    quote:
      "The results speak for themselves. Our brand visibility and customer engagement have skyrocketed thanks to Positivus.",
    name: "Emily Davis",
    title: "Head of Digital Strategy at ABC Ltd.",
  },
  {
    id: 4,
    quote:
      "I am amazed at the results Positivus has delivered. Our ROI has significantly improved, and we are thrilled with the partnership.",
    name: "Michael Brown",
    title: "Business Owner at LocalTech Solutions",
  },
];

const Sliders = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const settings = {
    customPaging: function (i) {
      return (
        <PiStarFourFill
          className={`h-[34px] mt-[110px] w-[24px] rotate-45 ${
            i == activeIndex ? "text-[#B9FF66]" : "text-gray-200"
          }`}
        />
      );
    },
    dotsClass: "slick-dots slick-thumb",
    dots: true,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    className: "center",
    centerMode: true,
    centerPadding: window.innerWidth < 768 ? "0px" : "370px",
    slidesToShow: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    afterChange: (index) => setActiveIndex(index),
    // responsive: [
    //   {
    //     breakpoint: 768, 
    //     settings: {
    //       centerPadding: "4px",
    //       slidesToShow:1, 
    //     },
    //   },
    //   {
    //     breakpoint: 378, 
    //     settings: {
    //       centerPadding: "10px", 
    //     },
    //   },
    // ],
  };

  return (
    <section className=" lg:h-[635px] h-[635px] rounded-4xl justify-center lg:rounded-4xl  bg-gray-950 px- py-10">
      <div className="w-full max-w-7xl">
        <Slider {...settings} className="text-white  rounded-lg">
          {testimonialsData.map((testimonial) => (
            <div key={testimonial.id} className=" lg:mt-10">
              <div className="relative  md:w-96 text-white p-10 rounded-xl lg:p-10  w-80  border border-lime-400 text-center">
                <p className="text-lg font-light">{testimonial.quote}</p>
                <div className="absolute -bottom-3 left-10 w-6 h-6 bg-gray-950 -rotate-45 border-l border-b border-lime-400" />
              </div>

              <div className="mt-4 text-center">
                <p className="text-lime-400 font-bold text-lg">
                  {testimonial.name}
                </p>
                <p className="text-gray-400 text-sm">{testimonial.title}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Sliders;