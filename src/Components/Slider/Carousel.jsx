import React, { useState, useEffect } from "react";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    {
      id: 1,
      content:
        "Positivus has helped us achieve a significant increase in website traffic and leads. The team is professional, responsive, and truly cares about our success.",
      name: "John Smith",
      title: "Marketing Director at XYZ Corp",
    },
    {
      id: 2,
      content:
        "We've seen remarkable improvements in our online presence thanks to Positivus. Their dedication and expertise are truly commendable.",
      name: "Jane Doe",
      title: "CEO at ABC Enterprises",
    },
    {
      id: 3,
      content:
        "Working with Positivus has been a game-changer for our marketing efforts. Their strategies have significantly boosted our engagement.",
      name: "Mary Johnson",
      title: "Product Manager at DEF Ltd",
    },
    {
      id: 4,
      content:
        "Positivus is the best in the business! Their team's commitment to excellence is reflected in our growth.",
      name: "James Wilson",
      title: "Sales Manager at GHI Inc",
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

 
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full lg:mt-20 bg-[#191A23] py-8 px-4 lg:py-12 flex flex-col items-center max-w-5xl mx-auto rounded-lg">
      <div className="relative border border-green-400 text-white p-6 w-full md:w-[500px] rounded-lg shadow-md text-center">
        <p className="text-sm md:text-base">{slides[currentIndex].content}</p>
      </div>

      <div className="text-white lg:mt-8 text-center lg:flex lg:flex-col lg: mt-4">
        <h3
          className="text-lg md:text-xl lg:text-left font-semibold"
          
        >
          {slides[currentIndex].name}
        </h3>
        <p className="text-sm md:text-base opacity-80">{slides[currentIndex].title}</p>
      </div>

   
      

      <div className="flex items-center gap-34 mt-6">
        <button
          onClick={prevSlide}
          className="bg-gray-700 text-white px-4 py-2 rounded-full hover:bg-gray-600"
        >
          &#8592;
        </button>
        <div className="flex gap-2">
          {slides.map((_, index) => (
            <div
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full cursor-pointer transition-all ${
                currentIndex === index ? "bg-white" : "bg-gray-500"
              }`}
            ></div>
          ))}
        </div>
        <button
          onClick={nextSlide}
          className="bg-gray-700 text-white px-4 py-2 rounded-full hover:bg-gray-600"
        >
          &#8594;
        </button>
      </div>
    </div>
  );
};

export default Carousel;
