export default function AboutEEDPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">About VNIT</h1>

        <div className="prose max-w-none">
          <p className="text-lg text-gray-600 mb-6">
            The Department of Electrical and Electronics Engineering at VNIT
            Nagpur is one of the premier departments in the institute, known for
            its excellence in teaching, research, and innovation.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Vision</h2>
          <p className="mb-6">
            To be a leading department in electrical and electronics engineering
            education and research, contributing to sustainable technological
            development and societal welfare.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Mission</h2>
          <ul className="list-disc pl-6 mb-6">
            <li>
              To provide quality education in electrical and electronics
              engineering
            </li>
            <li>To foster research and innovation in emerging technologies</li>
            <li>
              To develop industry-ready professionals with strong ethical values
            </li>
            <li>
              To contribute to sustainable energy solutions and future
              transportation
            </li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Research Areas
          </h2>
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="font-semibold text-blue-800 mb-2">
                Power Systems
              </h3>
              <p className="text-sm">
                Smart grids, renewable energy integration, power quality
              </p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <h3 className="font-semibold text-green-800 mb-2">
                Electric Vehicles
              </h3>
              <p className="text-sm">
                EV technology, battery management, charging infrastructure
              </p>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg">
              <h3 className="font-semibold text-purple-800 mb-2">
                Control Systems
              </h3>
              <p className="text-sm">
                Advanced control techniques, automation, robotics
              </p>
            </div>
            <div className="bg-orange-50 p-4 rounded-lg">
              <h3 className="font-semibold text-orange-800 mb-2">
                Electronics
              </h3>
              <p className="text-sm">
                VLSI design, embedded systems, IoT applications
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export const metadata = {
  title: "About Electrical and Electronics Department - IEEE SeFet 2026",
  description:
    "Learn about the Electrical and Electronics Department at VNIT Nagpur",
};
