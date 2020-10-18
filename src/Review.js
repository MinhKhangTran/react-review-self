import React from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import reviews from "./data";

export default function Review() {
  const [index, setIndex] = React.useState(0);
  const { name, job, image, text } = reviews[index];

  const checkNumber = (number) => {
    if (number > reviews.length - 1) {
      return 0;
    }
    if (number < 0) {
      return reviews.length - 1;
    }
    return number;
  };

  const nextBtn = () => {
    setIndex((count) => {
      let newCount = count + 1;
      return checkNumber(newCount);
    });
  };
  const prevBtn = () => {
    setIndex((index) => {
      let newCount = index - 1;
      return checkNumber(newCount);
    });
  };

  const randomBtn = () => {
    let random = Math.floor(Math.random() * reviews.length);
    if (random === index) {
      random = index + 1;
    }
    setIndex(checkNumber(random));
  };
  React.useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 5000);
    return () => {
      clearInterval(slider);
    };
  }, [index]);
  return (
    <div className="text-center md:w-1/3 w-11/12 mx-auto bg-gray-200 rounded-lg p-4">
      <div className="w-32 h-32 mx-auto">
        <img
          className="h-full w-full rounded-full object-cover"
          src={image}
          alt={name}
        />
      </div>
      <h1>{name}</h1>
      <h2>{job}</h2>
      <p>{text}</p>
      <div>
        <button
          onClick={nextBtn}
          className="bg-pink-200 rounded mr-4 text-pink-800 hover:shadow-xl mt-4"
        >
          <FaChevronLeft />
        </button>
        <button
          onClick={prevBtn}
          className="bg-pink-200 rounded ml-4 text-pink-800 hover:shadow-xl mt-4"
        >
          <FaChevronRight />
        </button>
      </div>
      <button
        onClick={randomBtn}
        className="bg-pink-200 rounded px-2 py-1 text-pink-800 hover:shadow-xl mt-4"
      >
        Überrasch mich
      </button>
    </div>
  );
}
