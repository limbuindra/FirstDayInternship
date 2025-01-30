import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;

  return (
    <div
      className={className}
      style={{ ...style, display: "block" ,top:"90%",right:"25%"}}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        zIndex: 100,
        top: "100%",
        left: "25%",
      }}
      onClick={onClick}
    ></div>
  );
}

const Sliders = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const slider = [
    {
      id: 1,
      text: "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.",
    },
    {
      id: 2,
      text: "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.",
    },
    {
      id: 3,
      text: "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.",
    },
    {
      id: 4,
      text: "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.",
    },
    {
      id: 5,
      text: "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.",
    },
    {
      id: 6,
      text: "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.",
    },
  ];
  const settings = {
    customPaging: function (i) {
      console.log("IIIII", i);
      return (
        <div
          className={`h-[10px] w-[10px] ${
            i == activeIndex ? "bg-red-200" : "bg-gray-400"
          }`}
        ></div>
      );
    },
    dotsClass: "slick-dots slick-thumb",
    dots: true,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    className: "center",
    centerMode: true,
    centerPadding: "260px",
    slidesToShow: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    afterChange: (index) => setActiveIndex(index),
  };

  return (
    <div className="w-[625px] h-[625px] pt-10">

      <div className="pt-10 flex justify-center w-[1240px]">
        <div className="bg-white rounded-4xl p-6 w-[1240px] ">
          <div className="">
            <Slider {...settings} className="bg-[#191A23] text-white p-6">
              {slider.map((item) => (
                <div key={item.id} className="">
                  <div className="w-[550px] h-[190x] p-6 border-3 border-[#B9FF66] rounded-4xl overflow-hidden relative top-1.5">
                    {item.text}
                  </div>

                  <div className="h-[20px] w-[200px] flex gap-6.5 pl-18  relative ">
                    <div className=" bg-[#B9FF66] h-10 w-0.5 rotate-135"></div>
                    <div className=" bg-[#B9FF66] h-10 w-0.5  rotate-45"></div>
                  </div>
                  <div className="pl-23 ">
                    <p className="text-[#B9FF66] mt-4">John Smith</p>
                    <p className="text-white">Marketing Director at XYZ Corp</p>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Sliders;
