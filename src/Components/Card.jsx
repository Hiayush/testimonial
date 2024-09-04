import React from "react";
import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";

export default function Card(props) {
  let reviews = props.reviews;
  return (
    <div key={reviews.id} className="flex flex-col md:relative h-4/5">
      <div className="flex flex-col justify-center mx-auto w-[150px] h-[150px] bg-violet-500 rounded-full items-center">
        <img
          className="aspcect-square rounded-full w-[140px] h-[140px] border-2 border-white"
          src={reviews.image}
          alt=""
        />
        {/* <div className="w-[150px] h-[150px] bg-violet-500 rounded-full absolute"></div> */}
      </div>

      <div className="text-center mt-7">
        <h3 className="font-bold text-2xl capitalize leading-3">
          {reviews.name}
        </h3>
      </div>
      <div className="text-center mt-4">
        <p className="text-violet-300 text-sm uppercase">{reviews.job}</p>
      </div>

      <div className="flex flex-col">
        <div className="text-violet-400 mx-auto  mt-3">
          <ImQuotesLeft />
        </div>
        <div className=" h-28 overflow-hidden">
          <p className="text-center mt-3 text-slate-500">{reviews.text}</p>
        </div>
        <div className="text-violet-400 mx-auto mt-2">
          <ImQuotesRight />
        </div>
      </div>
    </div>
  );
}
