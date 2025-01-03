// components/Timeline.js
'use client'
import { useState } from "react";

export default function Timeline() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    { name: "Front-End", description: "Learn HTML, CSS, JavaScript, React, and more!" },
    { name: "Back-End", description: "Learn C, Python, Node.js, and more." },
    { name: "Database", description: "Learn MySQL, MongoDB, and how to work with databases." },
    { name: "UI/UX", description: "Learn Adobe Illustrator, Figma to create stunning visuals" },
  ];

  return (
    <section className="py-20 bg-gray-50 text-center">
      <h2 className="text-4xl font-semibold text-gray-900">Choose Your Learning Path</h2>
      <p className="mt-4 text-xl text-gray-700">Pick a technology to start your journey!</p>

      {/* Timeline */}
      <div className="mt-12 relative flex justify-between items-center">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full h-1 bg-gray-300"></div>
        </div>

        {/* Steps */}
        {steps.map((step, index) => (
          <div
            key={index}
            className={`relative flex flex-col items-center mx-4 transition-all ${index === activeStep ? "text-purple-800" : "text-black"}`}
            onClick={() => setActiveStep(index)}
          >
            <div
              className={`border-2 w-8 h-8 border-purple-800 ${index === activeStep ? "bg-purple-700 border-purple-800 rounded-full" : "bg-white border-black btn-circle"} cursor-pointer transition-all`}
            ></div>
            <p className="mt-5">{step.name}</p>
            {index === activeStep && (
              <div className="mt-4 p-4 bg-white shadow-lg rounded-lg max-w-xs mx-auto">
                <p>{step.description}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
