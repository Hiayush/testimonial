import React, { useState } from "react";
import Card from "./Card";
import { FaAngleDoubleLeft, FaAngleDoubleRight } from "react-icons/fa";

export default function Testimonial(props) {
  let reviews = props.reviews;
  const [index, setIndex] = useState(0);

  function leftShiftHandler() {
    if (index - 1 < 0) {
      setIndex(reviews.length - 1);
    } else {
      setIndex(index - 1);
    }
  }

  function rightShiftHandler() {
    if (index + 1 >= reviews.length) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  }

  function surpriceShiftHandler() {
    let randIndex = Math.floor(Math.random() * reviews.length);
    setIndex(randIndex);
  }

  return (
    <div className="flex flex-col w-[85vw] md:w-[700px] bg-white justify-center items-center my-7 p-10 transition-all duration-700 hover:shadow-xl rounded-md">
      <Card reviews={reviews[index]}></Card>
      <div className="flex flex-row text-3xl mt-5 gap-3 text-violet-800 font-bold mx-auto text-center">
        <button
          onClick={leftShiftHandler}
          className="cursor-pointer hover:text-violet-500"
        >
          {<FaAngleDoubleLeft />}
        </button>
        <button
          onClick={rightShiftHandler}
          className="cursor-pointer hover:text-violet-500"
        >
          {<FaAngleDoubleRight />}
        </button>
      </div>
      <div className="mt-6">
        <button
          onClick={surpriceShiftHandler}
          className="bg-violet-400 hover:bg-violet-500 transition-all duration-200 cursor-pointer px-10 py-2 rounded-md font-bold text-white text-lg"
        >
          Surpice Me
        </button>
      </div>
    </div>
  );
}
