import React from "react";

export const Hero = () => {
  return (
    <section
      id="hero"
      className=" min-h-screen flex flex-col justify-center items-center text-center px-6 sm:px-12 bg-light-white text-very-dark"
    >
      <h1 className="font-pp italic text-4xl sm:text-5xl md:text-6xl font-medium mb-4 text-dark-teal">
        Hi, I'm Meenakshi
      </h1>
      <p className="text-sm lg:text-base max-w-xl mx-auto pb-4 font-medium animate-fadeUp delay-100">
        Senior Frontend Developer | React & TypeScript | Avid Reader & Explorer
      </p>

      <p className="text-sm lg:text-base max-w-xl mx-auto pb-4 animate-fadeUp delay-200">
        I craft responsive and engaging web applications that delight users.
        Passionate about clean code, modern web technologies, and turning ideas
        into interactive experiences.
      </p>

      <p className="text-sm lg:text-base max-w-xl mx-auto text-gray-700 animate-fadeUp delay-300">
        With 7+ years of experience building scalable apps for global enterprises
        like EPAM Systems, S&P Global, DBS Bank, and Canadian Tire Corporation, 
        I focus on performance, micro frontends, and mentoring teams to deliver 
        high-quality solutions.
      </p>
      <p className="mt-6 text-sm lg:text-lg text-gray-600 animate-fadeUp delay-400">
        Explore my projects, writings, and adventures below!
      </p>
    </section>
  );
};
