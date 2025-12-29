export const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center bg-light-white px-6"
    >
      <div className="max-w-4xl mx-auto space-y-8 text-center md:text-left">

        {/* Heading */}
        <h2 className="font-pp italic text-dark-teal text-3xl md:text-4xl animate-slideIn">
          👋 A Little About Me <span className="inline-block ml-2 animate-wave">✨</span>
        </h2>

        {/* Personality & Approach */}
        <p className="text-sm lg:text-lg text-gray-700 leading-relaxed animate-fadeUp delay-100">
          I love turning complex challenges into clean, intuitive interfaces
          that make users’ lives easier.
        </p>

        <p className="text-sm lg:text-lg text-gray-700 leading-relaxed animate-fadeUp delay-200">
          I thrive on mastering new technologies, optimizing performance, and
          mentoring teams to deliver high-quality software.
        </p>

        {/* Personal touch */}
        <p className="text-sm lg:text-lg text-gray-700 leading-relaxed animate-fadeUp delay-300">
          Outside of work, I explore books, travel to new places, and experiment
          with creative side projects that keep me curious and inspired.
        </p>

        {/* Optional CTA */}
        <p className="text-sm lg:text-lg text-gray-600 leading-relaxed animate-fadeUp delay-400">
          On this site, I share my work, favorite reads, and travel adventures —
          a peek into what inspires me every day.
        </p>

        {/* Skills */}
        <div className="flex flex-wrap gap-3 pt-4 justify-center md:justify-start">
          {[
            "React",
            "Micro Frontends",
            "Performance",
            "Data Structures",
            "Recharts",
            "Data Visualization",
          ].map((skill, i) => (
            <span
              key={skill}
              style={{ animationDelay: `${i * 150}ms` }}
              className="px-5 py-2 bg-dark-teal rounded-full text-light-white text-sm backdrop-blur-md animate-floatIn"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};
