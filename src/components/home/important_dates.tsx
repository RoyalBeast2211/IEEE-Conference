import React from "react";

const importantDates = [
  { label: "Paper submission opens", date: "01st Oct 2025" },
  { label: "Deadline for full paper submission", date: "31st Jan 2026" },
  { label: "Notification of acceptance", date: "15th March 2026" },
  { label: "Registration opens", date: "15th March 2026" },
  { label: "Deadline for Early Bird Registration", date: "31st May 2026" },
  { label: "Deadline for Standard Registration", date: "15th Jun 2026" },
  {
    label: "Deadline for camera ready paper submission",
    date: "15th Jun 2026",
  },
];

export default function ImportantDatesSection() {
  return (
    <section className="my-8 sm:my-12 px-4 sm:px-8">
      <h2 className="text-xl sm:text-2xl font-bold text-center mb-6">
        Important Dates
      </h2>

      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
        {importantDates.map((item, index) => (
          <li
            key={index}
            className="flex justify-between items-center bg-gray-50 p-4 rounded-md shadow-sm hover:bg-gray-100 transition border-b last:border-b-0"
          >
            <span className="font-medium text-gray-700 text-sm sm:text-base">
              {item.label}
            </span>
            <span className="text-gray-900 font-semibold text-sm sm:text-base">
              {item.date}
            </span>
          </li>
        ))}
      </ul>

      <div className="text-gray-700 space-y-2 bg-gray-50 p-4 rounded-md text-sm sm:text-base">
        <p>
          All the accepted and presented papers will be published in the form of
          e-proceedings and submitted to IEEE Xplore Digital Library (indexed in
          SCOPUS, Google Scholar, and other major indexing).
        </p>
        <p>
          All presented papers will be considered for further review and
          publication in IEEE Transactions on Industry Applications and IEEE
          Industry Applications Magazine.
        </p>
      </div>
    </section>
  );
}
