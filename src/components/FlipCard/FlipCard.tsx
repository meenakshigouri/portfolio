import { useState } from "react";

export default function FlipCard({ title, front, back }:any) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className="w-full h-64 perspective cursor-pointer"
      onClick={() => setFlipped(!flipped)}
    >
      <div
        className={`relative w-full h-full transition-transform duration-700 transform-style preserve-3d ${
          flipped ? "rotate-y-180" : ""
        }`}
      >
        {/* Front */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#52796F] to-[#184e4a]  text-white rounded-2xl shadow-xl backface-hidden flex flex-col items-center justify-center p-6">
          <h3 className="text-2xl font-bold">{title}</h3>
          <p className="mt-3 text-center text-sm opacity-90">{front}</p>
        </div>

        {/* Back */}
        <div className="absolute inset-0 bg-white text-gray-800 rounded-2xl shadow-xl backface-hidden rotate-y-180 p-6 flex items-center justify-center text-sm">
          {back}
        </div>
      </div>
    </div>
  );
}
