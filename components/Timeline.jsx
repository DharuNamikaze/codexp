// components/Timeline.js
'use client'
import { useState } from "react";

export default function Timeline() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    { name: "Front-End", description: "Learn HTML, CSS, JavaScript, React, and more!" },
    { name: "Back-End", description: "Master Node.js, Express, Databases, and API creation." },
    { name: "Database (SQL/NoSQL)", description: "Learn MySQL, MongoDB, and how to work with databases." },
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
            className={`relative flex flex-col items-center ${index === activeStep ? "text-blue-500" : "text-gray-500"}`}
            onClick={() => setActiveStep(index)}
          >
            <div
              className={`w-8 h-8 rounded-full border-2 ${index === activeStep ? "bg-blue-500 border-blue-500" : "bg-white border-gray-500"} cursor-pointer transition-all`}
            ></div>
            <p className="mt-2">{step.name}</p>
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
