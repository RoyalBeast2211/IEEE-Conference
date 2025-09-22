export default function AboutMaharashtraPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">
          About Maharashtra
        </h1>

        <div className="prose max-w-none">
          <p className="text-lg text-gray-600 mb-6">
            Maharashtra, located in western India, is the second-most populous
            state and a major economic powerhouse known for its rich cultural
            heritage, industrial development, and educational excellence.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                About Nagpur
              </h2>
              <p className="mb-4">
                Nagpur, the host city of IEEE SeFet 2026, is strategically
                located at the center of India. Known as the "Orange City" for
                its famous oranges, Nagpur is also a major educational and
                commercial hub.
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Geographical center of India</li>
                <li>Major transportation hub</li>
                <li>Rich cultural heritage</li>
                <li>Educational excellence</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Tourist Attractions
              </h2>
              <ul className="list-disc pl-6 mb-4">
                <li>Deekshabhoomi - Sacred Buddhist site</li>
                <li>Sitabuldi Fort - Historical monument</li>
                <li>Raman Science Centre - Interactive museum</li>
                <li>Ambazari Lake - Scenic beauty</li>
                <li>Pench National Park - Wildlife sanctuary</li>
              </ul>
            </div>
          </div>

          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Climate</h2>
          <p className="mb-6">
            Nagpur experiences a tropical savanna climate. February is pleasant
            with moderate temperatures, making it an ideal time for the
            conference.
          </p>
        </div>
      </div>
    </div>
  );
}

export const metadata = {
  title: "About Maharashtra - IEEE SeFet 2026",
  description: "Discover the beautiful state of Maharashtra, India",
};
