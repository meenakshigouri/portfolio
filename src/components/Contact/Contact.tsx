import React from "react";

export const Contact = () => {
  return (
    <section
      id="contact"
      className="min-h-screen bg-dark-teal text-light-white flex flex-col justify-center items-center text-center px-6 sm:px-12"
    >
      <h2 className="font-pp text-3xl sm:text-4xl md:text-5xl font-bold mb-6 animate-slideIn">
        Get In Touch
      </h2>

      <p className="text-sm sm:text-base lg:text-lg max-w-xl mb-6 animate-fadeUp delay-100">
        I’m always open to exciting opportunities, collaborations, or just a friendly chat. Feel free to reach out!
      </p>

      {/* Contact Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 animate-fadeUp delay-200">
        <a
          href="mailto:meenakshigouri5@gmail.com"
          className="px-6 py-3 bg-soft-green text-dark-teal font-medium rounded-lg shadow-lg hover:bg-green-500 transition-colors"
        >
          Email Me
        </a>
        <a
          href="https://www.linkedin.com/in/meenakshi-gouri/"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 bg-transparent border-2 border-light-white text-light-white font-medium rounded-lg hover:bg-light-white hover:text-dark-teal transition-colors"
        >
          LinkedIn
        </a>
      </div>

      {/* Optional small note */}
      <p className="text-xs sm:text-sm mt-6 text-gray-300 animate-fadeUp delay-300">
        I’ll try to respond as quickly as possible. Let’s build something amazing together!
      </p>
    </section>
  );
};
