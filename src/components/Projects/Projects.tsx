import React, { useState } from "react";
import project from "./projects.json";

const experienceData = [...project];

export const Projects = () => {
  const [openCompanyIndex, setOpenCompanyIndex] = useState<number | null>(null);
  const [openClientIndex, setOpenClientIndex] = useState<number | null>(null);

  const toggleCompany = (index: number) => {
    setOpenCompanyIndex(openCompanyIndex === index ? null : index);
    setOpenClientIndex(null); // Reset client when changing company
  };

  const toggleClient = (index: number) => {
    setOpenClientIndex(openClientIndex === index ? null : index);
  };

  return (
    <section
      id="projects"
      className="min-h-screen bg-light-white px-4 sm:px-6 lg:px-12 py-12 flex justify-center items-center"
    >
      <div className="max-w-4xl w-full space-y-8">
        <h2 className="text-3xl sm:text-4xl font-pp italic text-dark-teal mb-12 text-center animate-slideIn">
          💼 Professional Experience & Projects
        </h2>

        <div className="space-y-6">
          {experienceData.map((company, cIndex) => (
            <div
              key={company.company}
              className="bg-white/80 backdrop-blur-md rounded-xl p-5 sm:p-6 md:p-8 shadow-md animate-fadeUp transition-all duration-300"
              style={{ animationDelay: `${cIndex * 100}ms` }}
            >
              {/* Company Header */}
              <div
                className="flex justify-between items-start sm:items-center cursor-pointer"
                onClick={() => toggleCompany(cIndex)}
              >
                <div className="flex-1">
                  <h3 className="text-lg sm:text-lg font-sans font-medium text-dark-teal">
                    {company.company}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 mt-1 sm:mt-0">
                    {company.period}
                  </p>
                </div>
                <span
                  className={`transform transition-transform duration-300 ${
                    openCompanyIndex === cIndex ? "rotate-180" : "rotate-0"
                  }`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-dark-teal"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </span>
              </div>

              {/* Clients */}
              {openCompanyIndex === cIndex && (
                <div className="mt-4 space-y-4">
                  {company.clients.map((client, clIndex) => (
                    <div
                      key={client.name}
                      className="border-t border-gray-300 pt-4"
                    >
                      <div
                        className="flex justify-between items-start sm:items-center cursor-pointer"
                        onClick={() => toggleClient(clIndex)}
                      >
                        <div className="flex-1">
                          <h4 className="text-base sm:text-lg font-medium text-dark-teal">
                            {client.name}
                          </h4>
                          <p className="text-sm sm:text-base text-gray-600 mt-1 sm:mt-0">
                            {client.role} • {client.period}
                          </p>
                        </div>
                        <span
                          className={`transform transition-transform duration-300 ${
                            openClientIndex === clIndex
                              ? "rotate-180"
                              : "rotate-0"
                          }`}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 text-dark-teal"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M19 9l-7 7-7-7"
                            />
                          </svg>
                        </span>
                      </div>

                      {/* Client Description */}
                      {openClientIndex === clIndex && (
                        <ul className="mt-3 list-disc list-inside text-gray-700 space-y-1 text-sm sm:text-base">
                          {client.description.map((item, i) => (
                            <li key={i}>{item}</li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
