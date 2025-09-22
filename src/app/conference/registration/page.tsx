import { Layout } from "@/components/Layout";

export default function RegistrationPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-0 sm:py-4">
      <div className="space-y-6 sm:space-y-8">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Conference Registration
          </h1>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
            Register for IEEE SeFet 2026 conference and secure your
            participation in this premier software engineering event.
          </p>
        </div>

        {/* Registration Form Notice */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 sm:p-6">
          <h2 className="text-lg sm:text-xl font-semibold text-blue-900 mb-2">
            Registration Process
          </h2>
          <p className="text-sm sm:text-base text-blue-800">
            After paying the registration fee, please finalize your registration
            by filling out the Google form available at:{" "}
            <span className="font-medium">To be updated soon</span>
          </p>
        </div>

        {/* Registration Fees */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="px-4 sm:px-6 py-4 bg-gray-50 border-b border-gray-200">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
              Registration Fees
            </h2>
          </div>

          {/* Desktop Table View */}
          <div className="hidden lg:block overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Participants
                  </th>
                  <th
                    className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                    colSpan={2}
                  >
                    Early Bird Registration
                  </th>
                  <th
                    className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                    colSpan={2}
                  >
                    Standard Registration
                  </th>
                </tr>
                <tr className="bg-gray-100">
                  <th className="px-6 py-2 text-xs font-medium text-gray-500"></th>
                  <th className="px-4 py-2 text-xs font-medium text-gray-500 text-center">
                    IEEE Members
                  </th>
                  <th className="px-4 py-2 text-xs font-medium text-gray-500 text-center">
                    Non-IEEE Members
                  </th>
                  <th className="px-4 py-2 text-xs font-medium text-gray-500 text-center">
                    IEEE Members
                  </th>
                  <th className="px-4 py-2 text-xs font-medium text-gray-500 text-center">
                    Non-IEEE Members
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    Indian Author (Academia/Industry)
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-center text-gray-900">
                    ₹ 11,800
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-center text-gray-900">
                    ₹ 14,160
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-center text-gray-900">
                    ₹ 14,160
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-center text-gray-900">
                    ₹ 16,520
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    Indian Student Attendee (Non-Author)
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-center text-gray-900">
                    ₹ 5,900
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-center text-gray-900">
                    ₹ 7,080
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-center text-gray-900">
                    ₹ 7,080
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-center text-gray-900">
                    ₹ 8,260
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    Indian Professional Attendee (Non-Author)
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-center text-gray-900">
                    ₹ 8,260
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-center text-gray-900">
                    ₹ 9,440
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-center text-gray-900">
                    ₹ 9,440
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-center text-gray-900">
                    ₹ 10,620
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    Tutorial only (Indian Student)
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-center text-gray-900">
                    ₹ 600
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-center text-gray-900">
                    ₹ 850
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-center text-gray-900">
                    ₹ 850
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-center text-gray-900">
                    ₹ 1,200
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    Foreign Author (Academia / Industry)
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-center text-gray-900">
                    $ 415
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-center text-gray-900">
                    $ 475
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-center text-gray-900">
                    $ 475
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-center text-gray-900">
                    $ 535
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    Foreign Student Attendee (Non-Author)
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-center text-gray-900">
                    $ 235
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-center text-gray-900">
                    $ 265
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-center text-gray-900">
                    $ 265
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-center text-gray-900">
                    $ 295
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    Foreign Author Attendee (Non-Author)
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-center text-gray-900">
                    $ 295
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-center text-gray-900">
                    $ 355
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-center text-gray-900">
                    $ 355
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-center text-gray-900">
                    $ 415
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    Tutorial only (Foreign Student)
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-center text-gray-900">
                    $ 30
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-center text-gray-900">
                    $ 45
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-center text-gray-900">
                    $ 45
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-center text-gray-900">
                    $ 60
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Mobile Card View */}
          <div className="lg:hidden p-4 space-y-6">
            {/* Indian Author */}
            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-3">
                Indian Author (Academia/Industry)
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                <div className="bg-gray-50 p-3 rounded">
                  <p className="font-medium text-gray-700">Early Bird - IEEE</p>
                  <p className="text-lg font-bold text-gray-900">₹ 11,800</p>
                </div>
                <div className="bg-gray-50 p-3 rounded">
                  <p className="font-medium text-gray-700">
                    Early Bird - Non-IEEE
                  </p>
                  <p className="text-lg font-bold text-gray-900">₹ 14,160</p>
                </div>
                <div className="bg-gray-100 p-3 rounded">
                  <p className="font-medium text-gray-700">Standard - IEEE</p>
                  <p className="text-lg font-bold text-gray-900">₹ 14,160</p>
                </div>
                <div className="bg-gray-100 p-3 rounded">
                  <p className="font-medium text-gray-700">
                    Standard - Non-IEEE
                  </p>
                  <p className="text-lg font-bold text-gray-900">₹ 16,520</p>
                </div>
              </div>
            </div>

            {/* Indian Student */}
            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-3">
                Indian Student Attendee (Non-Author)
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                <div className="bg-gray-50 p-3 rounded">
                  <p className="font-medium text-gray-700">Early Bird - IEEE</p>
                  <p className="text-lg font-bold text-gray-900">₹ 5,900</p>
                </div>
                <div className="bg-gray-50 p-3 rounded">
                  <p className="font-medium text-gray-700">
                    Early Bird - Non-IEEE
                  </p>
                  <p className="text-lg font-bold text-gray-900">₹ 7,080</p>
                </div>
                <div className="bg-gray-100 p-3 rounded">
                  <p className="font-medium text-gray-700">Standard - IEEE</p>
                  <p className="text-lg font-bold text-gray-900">₹ 7,080</p>
                </div>
                <div className="bg-gray-100 p-3 rounded">
                  <p className="font-medium text-gray-700">
                    Standard - Non-IEEE
                  </p>
                  <p className="text-lg font-bold text-gray-900">₹ 8,260</p>
                </div>
              </div>
            </div>

            {/* Indian Professional */}
            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-3">
                Indian Professional Attendee (Non-Author)
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                <div className="bg-gray-50 p-3 rounded">
                  <p className="font-medium text-gray-700">Early Bird - IEEE</p>
                  <p className="text-lg font-bold text-gray-900">₹ 8,260</p>
                </div>
                <div className="bg-gray-50 p-3 rounded">
                  <p className="font-medium text-gray-700">
                    Early Bird - Non-IEEE
                  </p>
                  <p className="text-lg font-bold text-gray-900">₹ 9,440</p>
                </div>
                <div className="bg-gray-100 p-3 rounded">
                  <p className="font-medium text-gray-700">Standard - IEEE</p>
                  <p className="text-lg font-bold text-gray-900">₹ 9,440</p>
                </div>
                <div className="bg-gray-100 p-3 rounded">
                  <p className="font-medium text-gray-700">
                    Standard - Non-IEEE
                  </p>
                  <p className="text-lg font-bold text-gray-900">₹ 10,620</p>
                </div>
              </div>
            </div>

            {/* Tutorial only (Indian Student) */}
            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-3">
                Tutorial only (Indian Student)
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                <div className="bg-gray-50 p-3 rounded">
                  <p className="font-medium text-gray-700">Early Bird - IEEE</p>
                  <p className="text-lg font-bold text-gray-900">₹ 600</p>
                </div>
                <div className="bg-gray-50 p-3 rounded">
                  <p className="font-medium text-gray-700">
                    Early Bird - Non-IEEE
                  </p>
                  <p className="text-lg font-bold text-gray-900">₹ 850</p>
                </div>
                <div className="bg-gray-100 p-3 rounded">
                  <p className="font-medium text-gray-700">Standard - IEEE</p>
                  <p className="text-lg font-bold text-gray-900">₹ 850</p>
                </div>
                <div className="bg-gray-100 p-3 rounded">
                  <p className="font-medium text-gray-700">
                    Standard - Non-IEEE
                  </p>
                  <p className="text-lg font-bold text-gray-900">₹ 1,200</p>
                </div>
              </div>
            </div>

            {/* Foreign Author */}
            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-3">
                Foreign Author (Academia / Industry)
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                <div className="bg-gray-50 p-3 rounded">
                  <p className="font-medium text-gray-700">Early Bird - IEEE</p>
                  <p className="text-lg font-bold text-gray-900">$ 415</p>
                </div>
                <div className="bg-gray-50 p-3 rounded">
                  <p className="font-medium text-gray-700">
                    Early Bird - Non-IEEE
                  </p>
                  <p className="text-lg font-bold text-gray-900">$ 475</p>
                </div>
                <div className="bg-gray-100 p-3 rounded">
                  <p className="font-medium text-gray-700">Standard - IEEE</p>
                  <p className="text-lg font-bold text-gray-900">$ 475</p>
                </div>
                <div className="bg-gray-100 p-3 rounded">
                  <p className="font-medium text-gray-700">
                    Standard - Non-IEEE
                  </p>
                  <p className="text-lg font-bold text-gray-900">$ 535</p>
                </div>
              </div>
            </div>

            {/* Foreign Student */}
            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-3">
                Foreign Student Attendee (Non-Author)
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                <div className="bg-gray-50 p-3 rounded">
                  <p className="font-medium text-gray-700">Early Bird - IEEE</p>
                  <p className="text-lg font-bold text-gray-900">$ 235</p>
                </div>
                <div className="bg-gray-50 p-3 rounded">
                  <p className="font-medium text-gray-700">
                    Early Bird - Non-IEEE
                  </p>
                  <p className="text-lg font-bold text-gray-900">$ 265</p>
                </div>
                <div className="bg-gray-100 p-3 rounded">
                  <p className="font-medium text-gray-700">Standard - IEEE</p>
                  <p className="text-lg font-bold text-gray-900">$ 265</p>
                </div>
                <div className="bg-gray-100 p-3 rounded">
                  <p className="font-medium text-gray-700">
                    Standard - Non-IEEE
                  </p>
                  <p className="text-lg font-bold text-gray-900">$ 295</p>
                </div>
              </div>
            </div>

            {/* Foreign Author Attendee */}
            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-3">
                Foreign Author Attendee (Non-Author)
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                <div className="bg-gray-50 p-3 rounded">
                  <p className="font-medium text-gray-700">Early Bird - IEEE</p>
                  <p className="text-lg font-bold text-gray-900">$ 295</p>
                </div>
                <div className="bg-gray-50 p-3 rounded">
                  <p className="font-medium text-gray-700">
                    Early Bird - Non-IEEE
                  </p>
                  <p className="text-lg font-bold text-gray-900">$ 355</p>
                </div>
                <div className="bg-gray-100 p-3 rounded">
                  <p className="font-medium text-gray-700">Standard - IEEE</p>
                  <p className="text-lg font-bold text-gray-900">$ 355</p>
                </div>
                <div className="bg-gray-100 p-3 rounded">
                  <p className="font-medium text-gray-700">
                    Standard - Non-IEEE
                  </p>
                  <p className="text-lg font-bold text-gray-900">$ 415</p>
                </div>
              </div>
            </div>

            {/* Tutorial only (Foreign Student) */}
            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-3">
                Tutorial only (Foreign Student)
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                <div className="bg-gray-50 p-3 rounded">
                  <p className="font-medium text-gray-700">Early Bird - IEEE</p>
                  <p className="text-lg font-bold text-gray-900">$ 30</p>
                </div>
                <div className="bg-gray-50 p-3 rounded">
                  <p className="font-medium text-gray-700">
                    Early Bird - Non-IEEE
                  </p>
                  <p className="text-lg font-bold text-gray-900">$ 45</p>
                </div>
                <div className="bg-gray-100 p-3 rounded">
                  <p className="font-medium text-gray-700">Standard - IEEE</p>
                  <p className="text-lg font-bold text-gray-900">$ 45</p>
                </div>
                <div className="bg-gray-100 p-3 rounded">
                  <p className="font-medium text-gray-700">
                    Standard - Non-IEEE
                  </p>
                  <p className="text-lg font-bold text-gray-900">$ 60</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Charges */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="px-4 sm:px-6 py-4 bg-gray-50 border-b border-gray-200">
            <h3 className="text-lg sm:text-xl font-bold text-gray-900">
              Additional Charges
            </h3>
          </div>

          {/* Desktop table for additional charges */}
          <div className="hidden sm:block overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Service
                  </th>
                  <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Rate
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    Foreign Professional Attendee (Additional Page)
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-900">
                    $ 25/page
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    Indian Professional Author/Attendee (Additional Page)
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-900">
                    ₹ 1,000/page
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Mobile view for additional charges */}
          <div className="sm:hidden p-4 space-y-4">
            <div className="border border-gray-200 rounded-lg p-4">
              <h4 className="font-medium text-gray-900 mb-2">
                Foreign Professional Attendee
              </h4>
              <p className="text-sm text-gray-600 mb-1">Additional Page</p>
              <p className="text-lg font-bold text-gray-900">$ 25/page</p>
            </div>
            <div className="border border-gray-200 rounded-lg p-4">
              <h4 className="font-medium text-gray-900 mb-2">
                Indian Professional Author/Attendee
              </h4>
              <p className="text-sm text-gray-600 mb-1">Additional Page</p>
              <p className="text-lg font-bold text-gray-900">₹ 1,000/page</p>
            </div>
          </div>
        </div>

        {/* Registration Instructions */}
        <div className="bg-white shadow-lg rounded-lg p-4 sm:p-6">
          <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4">
            Registration Instructions
          </h3>
          <div className="space-y-3">
            <div className="flex items-start">
              <span className="flex-shrink-0 w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></span>
              <p className="text-sm sm:text-base text-gray-700">
                One full author registration (Indian author or Foreign author)
                is required for the inclusion of the paper(s) in the conference
                programme and IEEE proceedings.
              </p>
            </div>
            <div className="flex items-start">
              <span className="flex-shrink-0 w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></span>
              <p className="text-sm sm:text-base text-gray-700">
                One full author registration can register up to 2 papers.
              </p>
            </div>
            <div className="flex items-start">
              <span className="flex-shrink-0 w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></span>
              <p className="text-sm sm:text-base text-gray-700">
                Student registration is not entitled to IEEE Xplore paper
                publication.
              </p>
            </div>
            <div className="flex items-start">
              <span className="flex-shrink-0 w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></span>
              <p className="text-sm sm:text-base text-gray-700">
                Author / Non-Author/Students are entitled for Tutorials.
              </p>
            </div>
            <div className="flex items-start">
              <span className="flex-shrink-0 w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></span>
              <p className="text-sm sm:text-base text-gray-700">
                GST 18% is included. Payment gateway charges are extra.
              </p>
            </div>
            <div className="flex items-start">
              <span className="flex-shrink-0 w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></span>
              <p className="text-sm sm:text-base text-gray-700">
                Spot Registration for attending Tutorials is also available with
                Double the Standard Rates.
              </p>
            </div>
            <div className="flex items-start">
              <span className="flex-shrink-0 w-2 h-2 bg-red-600 rounded-full mt-2 mr-3"></span>
              <p className="text-sm sm:text-base text-gray-700 font-medium">
                The registration fee is non-refundable.
              </p>
            </div>
            <div className="flex items-start">
              <span className="flex-shrink-0 w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></span>
              <p className="text-sm sm:text-base text-gray-700">
                Additional charges are applicable for final paper more than 6
                pages. Maximum number of pages allowed is 8.
              </p>
            </div>
          </div>
        </div>

        {/* What's Included */}
        <div className="bg-green-50 border border-green-200 rounded-lg p-4 sm:p-6">
          <h3 className="text-lg sm:text-xl font-semibold text-green-900 mb-3">
            Full Author Registration & Attendees Include:
          </h3>
          <p className="text-sm sm:text-base text-green-800">
            Access to tutorials, keynote sessions, all conference sessions,
            conference registration kit, lunch, high tea, and gala dinner.
          </p>
        </div>
      </div>
    </div>
  );
}

export const metadata = {
  title: "Conference Registration - IEEE SeFet 2026",
  description: "Register for IEEE SeFet 2026 conference",
};
