import React, { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";

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

  const [currentIndex, setCurrentIndex] = useState(2);

  return (
    <div className="max-w-[1520px] h-[500px] w-full py-4 relative">
      <div
        className="w-full h-full rounded-2xl bg-center bg-cover duration-500"
        style={{ backgroundImage: `url(${sliders[currentIndex].url})` }}
      >
        <div className="absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-orange-700 text-white cursor-pointer">
          <BsChevronCompactLeft />
        </div>
        <div className="absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-orange-700 text-white cursor-pointer">
          <BsChevronCompactRight />
        </div>
      </div>
    </div>
  );
};

export default Featured;
