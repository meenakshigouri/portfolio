import React from "react";

export const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center text-center px-6 sm:px-12 bg-light-white text-very-dark"
    >
      <div className="max-w-3xl">
        <h1 className="font-pp italic text-4xl sm:text-5xl md:text-6xl font-medium mb-4 text-dark-teal">
          Hi, I’m Meenakshi
        </h1>

        <p className="text-base lg:text-lg font-medium mb-6 animate-fadeUp delay-100">
          Senior Frontend Developer · React & TypeScript
        </p>

        <p className="text-sm lg:text-base text-gray-700 leading-relaxed mb-4 animate-fadeUp delay-200">
          I build responsive, accessible, and high-performance web applications,
          with a strong focus on clean code and thoughtful user experiences.
        </p>

        <p className="text-sm lg:text-base text-gray-600 leading-relaxed mb-6 animate-fadeUp delay-300">
          With 7+ years of experience delivering scalable solutions for global
          organizations like EPAM Systems, S&P Global, DBS Bank, and Canadian
          Tire, I specialize in micro frontends, performance optimization, and
          mentoring teams.
        </p>

        <p className="text-sm lg:text-base text-gray-600 animate-fadeUp delay-400">
          Scroll down to explore my work, writing, and interests.
        </p>
      </div>
    </section>
  );
};
