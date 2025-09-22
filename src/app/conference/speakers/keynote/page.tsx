import { Layout } from "@/components/Layout";

export default function KeynoteSpeakersPage() {
  return (
    <Layout>
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">
            Keynote Speakers
          </h1>

          <div className="prose max-w-none">
            <p className="text-lg text-gray-600 mb-8">
              We are honored to host world-renowned experts who will share their
              insights on the future of sustainable energy and electric
              transportation.
            </p>

            <div className="space-y-12">
              <div className="bg-white border border-gray-200 rounded-lg p-8 shadow-lg">
                <div className="flex flex-col lg:flex-row gap-8">
                  <div className="lg:w-48 lg:flex-shrink-0">
                    <div className="w-48 h-48 bg-gray-200 rounded-lg mx-auto lg:mx-0 flex items-center justify-center">
                      <span className="text-gray-500">Speaker Photo</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">
                      Prof. [Keynote Speaker Name]
                    </h2>
                    <p className="text-lg text-blue-600 mb-4">
                      Institute/University Name
                    </p>

                    <h3 className="text-xl font-semibold text-gray-800 mb-3">
                      "Future of Electric Vehicle Technology and Grid
                      Integration"
                    </h3>

                    <p className="text-gray-600 mb-4">
                      Prof. [Name] is a leading researcher in electric vehicle
                      technology and smart grid systems. With over 20 years of
                      experience, they have authored more than 200 research
                      papers and hold multiple patents in EV battery technology.
                    </p>

                    <div className="space-y-2">
                      <p>
                        <strong>Research Interests:</strong> Electric Vehicles,
                        Battery Technology, Smart Grids
                      </p>
                      <p>
                        <strong>Notable Achievements:</strong> IEEE Fellow, Best
                        Paper Awards, Industry Collaborations
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-8 shadow-lg">
                <div className="flex flex-col lg:flex-row gap-8">
                  <div className="lg:w-48 lg:flex-shrink-0">
                    <div className="w-48 h-48 bg-gray-200 rounded-lg mx-auto lg:mx-0 flex items-center justify-center">
                      <span className="text-gray-500">Speaker Photo</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">
                      Dr. [Keynote Speaker Name]
                    </h2>
                    <p className="text-lg text-blue-600 mb-4">
                      Industry Leader / Organization
                    </p>

                    <h3 className="text-xl font-semibold text-gray-800 mb-3">
                      "Renewable Energy Integration and Sustainable
                      Transportation"
                    </h3>

                    <p className="text-gray-600 mb-4">
                      Dr. [Name] brings extensive industry experience in
                      renewable energy deployment and sustainable transportation
                      solutions. They have led major projects in solar and wind
                      energy integration.
                    </p>

                    <div className="space-y-2">
                      <p>
                        <strong>Expertise:</strong> Renewable Energy, Project
                        Management, Policy Development
                      </p>
                      <p>
                        <strong>Leadership:</strong> Major Clean Energy
                        Projects, International Standards
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-blue-800 mb-3">
                  Keynote Schedule
                </h3>
                <div className="space-y-2 text-blue-700">
                  <p>
                    <strong>Day 1:</strong> Opening Keynote - February 10, 2026,
                    9:00 AM
                  </p>
                  <p>
                    <strong>Day 2:</strong> Industry Keynote - February 11,
                    2026, 9:00 AM
                  </p>
                  <p>
                    <strong>Day 3:</strong> Closing Keynote - February 12, 2026,
                    2:00 PM
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export const metadata = {
  title: "Keynote Speakers - IEEE SeFet 2026",
  description: "Distinguished keynote speakers for IEEE SeFet 2026",
};
