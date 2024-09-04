import { useState } from "react";
import reviews from "./data";
import Testimonial from "./Components/Testimonial";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col  justify-center items-center bg-gray-400">
      <div className="text-center mt-3">
        <h1 className="text-4xl font-bold">Our Testimonials</h1>
        <div className="bg-violet-400 h-[4px] w-[1/5] mx-auto mt-2.5"></div>
        <Testimonial reviews={reviews} />
      </div>
    </div>
  );
}

export default App;
