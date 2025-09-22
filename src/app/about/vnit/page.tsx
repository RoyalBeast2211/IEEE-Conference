export default function AboutVNITPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">About VNIT</h1>

        <div className="prose max-w-none">
          <p className="text-lg text-gray-600 mb-6">
            Visvesvaraya National Institute of Technology (VNIT), Nagpur,
            established in 1960, is one of the esteemed institutes among the
            thirty-one National Institutes of Technology in India. It was named
            after Bharat Ratna Sir Mokshagundam Visvesvaraya, an eminent
            engineer, planner, and statesman of the country.
          </p>

          <p className="text-lg text-gray-600 mb-6">
            The Institute has highly qualified faculty in various departments.
            VNIT offers B.Tech degrees in eight disciplines, a B.Arch, and
            M.Tech degrees in twenty disciplines. The Institute also offers
            master's programmes in M.Sc (Mathematics, Chemistry, and Physics)
            and doctoral research programs in Engineering, Architecture,
            Sciences, and Humanities disciplines.
          </p>

          <p className="text-lg text-gray-600 mb-6">
            The Institute has collaborated with various reputed research &
            academic organizations. The distance of the campus from Nagpur
            Airport/Railway Station is approximately 6 km.
          </p>
        </div>
      </div>
    </div>
  );
}

export const metadata = {
  title: "About VNIT - IEEE SeFet 2026",
  description:
    "Learn about Visvesvaraya National Institute of Technology (VNIT), Nagpur",
};
