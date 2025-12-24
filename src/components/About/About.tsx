export const About = () => {
  // bg-gradient-to-b from-[#f2efea] to-[#184e4a]
  return (
    <section
      id="about"
      className="min-h-screen flex items-center bg-light-white px-6"
    >
      <div className="max-w-4xl mx-auto text-white space-y-8">
        {/* Fun heading */}
        <h2 className="font-pp italic text-dark-teal text-3xl md:text-3xl animate-slideIn">
          👋 A Little About Me
          <span className="inline-block ml-2 animate-wave">✨</span>
        </h2>

        {/* Personality & Approach */}
        <p className="text-sm lg:text-lg text-gray-700 leading-relaxed animate-fadeUp delay-100">
          I love turning complex challenges into clean, intuitive interfaces
          that make users’ lives easier.
        </p>

        <p className="text-sm lg:text-lg text-gray-700 leading-relaxed animate-fadeUp delay-200">
          Beyond coding, I thrive on learning new technologies, optimizing
          performance, and mentoring teams to deliver high-quality software.
        </p>

        {/* Personal touch */}
        <p className="text-sm lg:text-lg text-gray-700 leading-relaxed animate-fadeUp delay-300">
          Outside of work, you’ll find me exploring new books, traveling to new
          places, or experimenting with creative side projects.
        </p>

        {/* Optional call to action */}
        <p className="text-sm lg:text-lg text-gray-700 leading-relaxed  animate-fadeUp delay-400">
          On this site, I share stories from my work, favorite reads, and travel
          adventures — a peek into what inspires me every day.
        </p>

        {/* Skills */}
        <div className="flex flex-wrap gap-4 pt-4">
          {[
            "React",
            "Micro Frontends",
            "Performance",
            "Data Structures",
            "Recharts",
            "Data Visualisation",
          ].map((skill, i) => (
            <span
              key={skill}
              style={{ animationDelay: `${i * 150}ms` }}
              className="px-5 py-2 bg-dark-teal rounded-full text-sm backdrop-blur-md animate-floatIn"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};
