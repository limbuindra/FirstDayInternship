import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { PiStarFourFill } from "react-icons/pi";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

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
				top: "103%",
				right: "32%",
				right: window.innerWidth < 768 ? "10%" : "32%",
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
				top: "103%",
				left: "32%",
				color: "white",
				left: window.innerWidth < 768 ? "10%" : "32%",
			}}
			onClick={onClick}
		/>
	);
}

const Sliders = () => {
	const [activeIndex, setActiveIndex] = useState(0);
	const slider = [
		{
			id: 1,
			text: "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.",
      name: "John Smith",
      title: "Marketing Director at XYZ Corp",
    },
		{
			id: 2,
			text: "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.",
      name: "John Smith",
      title: "Marketing Director at XYZ Corp",
    },
		{
			id: 3,
			text: "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.",
      name: "John Smith",
      title: "Marketing Director at XYZ Corp",
    },
		{
			id: 4,
			text: "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.",
      name: "John Smith",
      title: "Marketing Director at XYZ Corp",
    },

	];
	const settings = {
		customPaging: function (i) {
			return (
				<PiStarFourFill
					className={`h-[24px] w-[24px] rotate-45 ${
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
		centerPadding: "260px",
		slidesToShow: 1,
		centerPadding: window.innerWidth < 768 ? "0px" : "300px",
		nextArrow: <SampleNextArrow />,
		prevArrow: <SamplePrevArrow />,
		afterChange: (index) => setActiveIndex(index),
	};

	return (
		<section className="flex lg:max-w-[1400px] lg:mx-auto flex-col lg:pb-20 justify-center items-center bg-gray-950 px-4 py-10 rounded-[50px]">
			<div className="w-full">
				<Slider {...settings} className="text-white py-2 ">
					{slider.map((testimonial) => (
						<div key={testimonial.id} className="flex flex-col rounded-4xl items-center ">
							<div className="relative items-center w-72 md:w-90 text-white p-10 rounded-xl border border-lime-400 text-center bg-gray-800">
								<p className="text-base font-light md:text-lg">
									{testimonial.text}
								</p>
								<div className="absolute -bottom-3 left-10 w-6 h-6 bg-gray-800 -rotate-45 border-l border-b border-lime-400" />
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
