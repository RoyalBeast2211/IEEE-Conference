import { Layout } from "@/components/Layout";

export default function ProgramPage() {
  return (
    <Layout>
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">
            Program Schedule
          </h1>

          <div className="prose max-w-none">
            <p className="text-lg text-gray-600 mb-8">
              The IEEE SeFet 2026 program features keynote presentations,
              technical sessions, tutorials, and networking opportunities over
              three exciting days.
            </p>

            <div className="space-y-8">
              {/* Day 1 */}
              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                <h2 className="text-2xl font-semibold text-blue-600 mb-4">
                  Day 1 - February 10, 2026
                </h2>

                <div className="space-y-4">
                  <div className="flex items-start space-x-4 pb-4 border-b border-gray-100">
                    <div className="w-20 text-sm font-medium text-gray-600">
                      8:00 AM
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900">
                        Registration & Welcome Coffee
                      </h3>
                      <p className="text-sm text-gray-600">
                        Conference registration and networking
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 pb-4 border-b border-gray-100">
                    <div className="w-20 text-sm font-medium text-gray-600">
                      9:00 AM
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900">
                        Opening Ceremony
                      </h3>
                      <p className="text-sm text-gray-600">
                        Welcome address by VNIT Director and IEEE officials
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 pb-4 border-b border-gray-100">
                    <div className="w-20 text-sm font-medium text-gray-600">
                      10:00 AM
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900">
                        Keynote 1: Future of Electric Transportation
                      </h3>
                      <p className="text-sm text-gray-600">
                        Prof. [Speaker Name] - Renowned EV Technology Expert
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 pb-4 border-b border-gray-100">
                    <div className="w-20 text-sm font-medium text-gray-600">
                      11:00 AM
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900">
                        Coffee Break
                      </h3>
                      <p className="text-sm text-gray-600">
                        Networking and refreshments
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 pb-4 border-b border-gray-100">
                    <div className="w-20 text-sm font-medium text-gray-600">
                      11:30 AM
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900">
                        Technical Session 1: Battery Technology
                      </h3>
                      <p className="text-sm text-gray-600">
                        Latest advances in battery management systems and energy
                        storage
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 pb-4 border-b border-gray-100">
                    <div className="w-20 text-sm font-medium text-gray-600">
                      1:00 PM
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900">
                        Lunch Break
                      </h3>
                      <p className="text-sm text-gray-600">
                        Networking lunch with industry partners
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 pb-4 border-b border-gray-100">
                    <div className="w-20 text-sm font-medium text-gray-600">
                      2:30 PM
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900">
                        Technical Session 2: Smart Grids
                      </h3>
                      <p className="text-sm text-gray-600">
                        Grid modernization and renewable energy integration
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 pb-4 border-b border-gray-100">
                    <div className="w-20 text-sm font-medium text-gray-600">
                      4:00 PM
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900">
                        Coffee Break
                      </h3>
                      <p className="text-sm text-gray-600">
                        Refreshments and poster viewing
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 pb-4 border-b border-gray-100">
                    <div className="w-20 text-sm font-medium text-gray-600">
                      4:30 PM
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900">
                        Panel Discussion: Industry Perspectives
                      </h3>
                      <p className="text-sm text-gray-600">
                        Industry leaders discuss future trends and challenges
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-20 text-sm font-medium text-gray-600">
                      6:00 PM
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900">
                        Welcome Reception
                      </h3>
                      <p className="text-sm text-gray-600">
                        Cultural program and networking dinner
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Day 2 */}
              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                <h2 className="text-2xl font-semibold text-green-600 mb-4">
                  Day 2 - February 11, 2026
                </h2>

                <div className="space-y-4">
                  <div className="flex items-start space-x-4 pb-4 border-b border-gray-100">
                    <div className="w-20 text-sm font-medium text-gray-600">
                      9:00 AM
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900">
                        Keynote 2: Renewable Energy Systems
                      </h3>
                      <p className="text-sm text-gray-600">
                        Dr. [Speaker Name] - Leading Renewable Energy Expert
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 pb-4 border-b border-gray-100">
                    <div className="w-20 text-sm font-medium text-gray-600">
                      10:00 AM
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900">
                        Technical Session 3: Power Electronics
                      </h3>
                      <p className="text-sm text-gray-600">
                        Advances in power conversion and control systems
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 pb-4 border-b border-gray-100">
                    <div className="w-20 text-sm font-medium text-gray-600">
                      11:30 AM
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900">
                        Coffee Break
                      </h3>
                      <p className="text-sm text-gray-600">
                        Networking and refreshments
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 pb-4 border-b border-gray-100">
                    <div className="w-20 text-sm font-medium text-gray-600">
                      12:00 PM
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900">
                        Special Session: WIE & SYP Events
                      </h3>
                      <p className="text-sm text-gray-600">
                        Women in Engineering and Student/Young Professional
                        activities
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 pb-4 border-b border-gray-100">
                    <div className="w-20 text-sm font-medium text-gray-600">
                      1:30 PM
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900">
                        Lunch Break
                      </h3>
                      <p className="text-sm text-gray-600">
                        Networking lunch and exhibition viewing
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 pb-4 border-b border-gray-100">
                    <div className="w-20 text-sm font-medium text-gray-600">
                      3:00 PM
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900">
                        Technical Session 4: Sustainable Transportation
                      </h3>
                      <p className="text-sm text-gray-600">
                        Future mobility solutions and infrastructure
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 pb-4 border-b border-gray-100">
                    <div className="w-20 text-sm font-medium text-gray-600">
                      4:30 PM
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900">
                        Coffee Break
                      </h3>
                      <p className="text-sm text-gray-600">
                        Refreshments and poster session
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-20 text-sm font-medium text-gray-600">
                      5:00 PM
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900">
                        Awards Ceremony
                      </h3>
                      <p className="text-sm text-gray-600">
                        Best paper awards and recognition
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Day 3 */}
              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                <h2 className="text-2xl font-semibold text-purple-600 mb-4">
                  Day 3 - February 12, 2026
                </h2>

                <div className="space-y-4">
                  <div className="flex items-start space-x-4 pb-4 border-b border-gray-100">
                    <div className="w-20 text-sm font-medium text-gray-600">
                      9:00 AM
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900">
                        Technical Session 5: Energy Storage
                      </h3>
                      <p className="text-sm text-gray-600">
                        Advanced energy storage technologies and applications
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 pb-4 border-b border-gray-100">
                    <div className="w-20 text-sm font-medium text-gray-600">
                      10:30 AM
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900">
                        Coffee Break
                      </h3>
                      <p className="text-sm text-gray-600">
                        Final networking opportunity
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 pb-4 border-b border-gray-100">
                    <div className="w-20 text-sm font-medium text-gray-600">
                      11:00 AM
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900">
                        Technical Session 6: AI in Energy Systems
                      </h3>
                      <p className="text-sm text-gray-600">
                        Machine learning and artificial intelligence
                        applications
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 pb-4 border-b border-gray-100">
                    <div className="w-20 text-sm font-medium text-gray-600">
                      12:30 PM
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900">
                        Lunch Break
                      </h3>
                      <p className="text-sm text-gray-600">
                        Final networking lunch
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 pb-4 border-b border-gray-100">
                    <div className="w-20 text-sm font-medium text-gray-600">
                      2:00 PM
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900">
                        Closing Keynote: Future Outlook
                      </h3>
                      <p className="text-sm text-gray-600">
                        Vision for sustainable energy and transportation
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-20 text-sm font-medium text-gray-600">
                      3:00 PM
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900">
                        Closing Ceremony
                      </h3>
                      <p className="text-sm text-gray-600">
                        Conference wrap-up and future announcements
                      </p>
                    </div>
                  </div>
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
  title: "Program Schedule - IEEE SeFet 2026",
  description: "Detailed program schedule for IEEE SeFet 2026",
};
