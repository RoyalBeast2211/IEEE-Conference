import React from "react";

const tracks = [
  "Renewable Energy Systems, Integration, and Sustainable Technologies",
  "Power Electronics, Electrical Machines and Drives, Energy Conversion for Sustainable Transportation",
  "Charging Systems, Infrastructure, Planning and Grid Interaction for E-Mobility",
  "Energy Storage Technologies, Battery Management, and Hydrogen Storage",
  "Power System Planning, Stability, Reliability, and Smart/Microgrid Operations",
  "Control Systems, Instrumentation, and Automation in Energy/Power Applications and Industrial Applications",
  "Artificial Intelligence, Machine Learning, Data Analytics, IoT, and Cybersecurity in Power/Energy Systems",
  "Energy Markets, Regulatory Aspects, Policies, and Decarbonization Strategies",
];

export default function RegularTracksSection() {
  return (
    <section className="my-8 sm:my-12 px-4 sm:px-8">
      <h2 className="text-xl sm:text-2xl font-bold text-center mb-6">
        Regular Tracks
      </h2>

      <ul className="space-y-4">
        {tracks.map((track, index) => (
          <li
            key={index}
            className="bg-gray-50 p-4 rounded-md shadow-sm hover:bg-gray-100 transition"
          >
            <span className="font-medium text-gray-700 text-sm sm:text-base">
              {track}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}
