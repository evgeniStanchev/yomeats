import React, { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";

const Featured = () => {
  const sliders = [
    {
      url: "/assets/burger_emxbtv.jpg",
    },
    {
      url: "/assets/pizza_osjb4f.jpg",
    },
    {
      url: "/assets/ric_a4ewxo.jpg",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlider = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? sliders.length - 1 : currentIndex - 1;

    moveToNextSlide(newIndex);
  };

  const nextSlider = () => {
    const isLastSlide = currentIndex === sliders.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;

    moveToNextSlide(newIndex);
  };

  const moveToNextSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className="max-w-[1520px] h-[500px] w-full py-4 relative">
      <div
        className="w-full h-full rounded-2xl bg-center bg-cover duration-500"
        style={{ backgroundImage: `url(${sliders[currentIndex].url})` }}
      >
        <div className="absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-orange-700 text-white cursor-pointer">
          <BsChevronCompactLeft onClick={prevSlider} />
        </div>
        <div className="absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-orange-700 text-white cursor-pointer">
          <BsChevronCompactRight onClick={nextSlider} />
        </div>
      </div>
      <div className="flex top-4 justify-center py-2">
        {sliders.map((sliderItems, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => moveToNextSlide(slideIndex)}
            className="text-2xl cursor-pointer"
          >
            <RxDotFilled />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Featured;
