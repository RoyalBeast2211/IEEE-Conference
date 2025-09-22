export default function AboutEEDPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">
          About Electrical Engineering Department
        </h1>

        <div className="prose max-w-none">
          <p className="text-lg text-gray-600 mb-6">
            The Department of Electrical Engineering is one of the finest and
            oldest engineering departments of the Institute and stands with an
            immortal reputation. The department was formed along with the
            Institute itself and therefore is as old. The Department has highly
            educated and well-experienced faculty members who endeavour to
            produce the finest engineers, contributing incredibly to the nation.
            The alumni of the department are widespread in India and abroad,
            occupying high positions in their respective fields.
          </p>

          <p className="text-lg text-gray-600 mb-6">
            The department has an intake of 115 students per year under the UG
            course. The Electrical Engineering Department at VNIT offers a
            comprehensive M.Tech program, which spans two years and includes
            core courses, electives, and a research project in the last year
            under faculty supervision.
          </p>

          <p className="text-lg text-gray-600 mb-6">
            The department specializes in Power and Energy System (PES) and
            Power Electronics and Drives (PED), aiming to provide in-depth
            knowledge and practical experience in these fields.
          </p>
        </div>
      </div>
    </div>
  );
}

export const metadata = {
  title: "About VNIT & Electrical Engineering Department - IEEE SeFet 2026",
  description:
    "Learn about Visvesvaraya National Institute of Technology (VNIT), Nagpur and its Electrical Engineering Department",
};
