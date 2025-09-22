import { Layout } from "@/components/Layout";

export default function VenueContactPage() {
  return (
    <Layout>
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">
            Venue & Contact
          </h1>

          <div className="prose max-w-none">
            <p className="text-lg text-gray-600 mb-8">
              IEEE SeFet 2026 will be held at the beautiful campus of
              Visvesvaraya National Institute of Technology (VNIT), Nagpur, one
              of India's premier technical institutions.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  Conference Venue
                </h2>
                <div className="space-y-3">
                  <div>
                    <h3 className="font-semibold text-gray-700">Institution</h3>
                    <p className="text-gray-600">
                      Visvesvaraya National Institute of Technology (VNIT)
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-700">Address</h3>
                    <p className="text-gray-600">
                      South Ambazari Road
                      <br />
                      Nagpur, Maharashtra 440010
                      <br />
                      India
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-700">
                      Main Conference Hall
                    </h3>
                    <p className="text-gray-600">
                      Visvesvaraya Auditorium, VNIT Campus
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  Getting There
                </h2>
                <div className="space-y-3">
                  <div>
                    <h3 className="font-semibold text-gray-700">By Air</h3>
                    <p className="text-gray-600">
                      Dr. Babasaheb Ambedkar International Airport (25 km from
                      campus)
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-700">By Train</h3>
                    <p className="text-gray-600">
                      Nagpur Railway Station (12 km from campus)
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-700">By Road</h3>
                    <p className="text-gray-600">
                      Well connected by National Highways to major cities
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
              <h2 className="text-2xl font-semibold text-blue-800 mb-4">
                Campus Facilities
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                <ul className="list-disc pl-6 space-y-2 text-blue-700">
                  <li>
                    State-of-the-art auditorium with 1000+ seating capacity
                  </li>
                  <li>Multiple conference halls for parallel sessions</li>
                  <li>High-speed Wi-Fi throughout campus</li>
                  <li>Audio-visual equipment and live streaming facilities</li>
                </ul>
                <ul className="list-disc pl-6 space-y-2 text-blue-700">
                  <li>Exhibition space for industry partners</li>
                  <li>Catering facilities and dining halls</li>
                  <li>Parking facilities for 500+ vehicles</li>
                  <li>Guest house accommodation on campus</li>
                </ul>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  Contact Information
                </h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-gray-700">
                      General Inquiries
                    </h3>
                    <p className="text-gray-600">
                      Email:{" "}
                      <a
                        href="mailto:sefet2026@vnit.ac.in"
                        className="text-blue-600 hover:underline"
                      >
                        sefet2026@vnit.ac.in
                      </a>
                      <br />
                      Phone: +91-712-2801-XXX
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-700">
                      Registration Support
                    </h3>
                    <p className="text-gray-600">
                      Email:{" "}
                      <a
                        href="mailto:registration@sefet2026.vnit.ac.in"
                        className="text-blue-600 hover:underline"
                      >
                        registration@sefet2026.vnit.ac.in
                      </a>
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-700">
                      Technical Support
                    </h3>
                    <p className="text-gray-600">
                      Email:{" "}
                      <a
                        href="mailto:technical@sefet2026.vnit.ac.in"
                        className="text-blue-600 hover:underline"
                      >
                        technical@sefet2026.vnit.ac.in
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  Local Organizing Committee
                </h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-gray-700">
                      Conference Chair
                    </h3>
                    <p className="text-gray-600">
                      Prof. [Name]
                      <br />
                      Department of Electrical Engineering
                      <br />
                      VNIT Nagpur
                      <br />
                      <a
                        href="mailto:chair@sefet2026.vnit.ac.in"
                        className="text-blue-600 hover:underline"
                      >
                        chair@sefet2026.vnit.ac.in
                      </a>
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-700">
                      Local Arrangements
                    </h3>
                    <p className="text-gray-600">
                      Prof. [Name]
                      <br />
                      <a
                        href="mailto:local@sefet2026.vnit.ac.in"
                        className="text-blue-600 hover:underline"
                      >
                        local@sefet2026.vnit.ac.in
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 bg-gray-100 p-6 rounded-lg">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Interactive Map
              </h2>
              <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center">
                <p className="text-gray-600">
                  Interactive campus map will be available here
                </p>
              </div>
              <p className="text-sm text-gray-600 mt-2">
                Detailed campus map with conference venues, accommodation, and
                parking information.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export const metadata = {
  title: "Venue & Contact - IEEE SeFet 2026",
  description:
    "Conference venue details and contact information for IEEE SeFet 2026",
};
