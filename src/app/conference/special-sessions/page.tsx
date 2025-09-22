import React from "react";

export default function SpecialSessionsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Special Sessions
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            The organizing team invites professionals to propose Special
            Sessions for the 5th IEEE International Conference on Sustainable
            Energy and Future Electric Transportation (SeFet 2026) in Nagpur,
            India during 8th-11th July 2025.
          </p>
        </div>

        {/* Benefit Section */}
        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8 rounded-r-lg">
          <h2 className="text-xl font-semibold text-blue-900 mb-3">
            Benefits of Special Sessions
          </h2>
          <p className="text-blue-800">
            Special sessions provide the opportunity to focus in detail on
            particular emerging topics, which are not reflected in the list of
            conference tracks or represent specific working fields where
            researchers would like to meet and discuss advances.
          </p>
        </div>

        {/* Contact Info */}
        <div className="bg-white-50 rounded-lg shadow-sm border p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-3">
            Submission Details
          </h2>
          <p className="text-gray-700 mb-2">
            Please send your proposal in MS Word format to:
          </p>
          <div className="bg-gray-100 p-3 rounded border-l-4 border-blue-500">
            <p className="font-medium text-gray-900">SeFet 2026 Team</p>
            <a
              href="mailto:ieeesefet2026@vnit.ac.in"
              className="text-blue-600 hover:text-blue-800"
            >
              ieeesefet2026@vnit.ac.in
            </a>
          </div>
        </div>

        {/* Important Dates */}
        <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-8">
          <h2 className="text-xl font-semibold text-red-900 mb-4">
            Important Dates
          </h2>
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-red-800">
                Last date for proposal submission:
              </span>
              <span className="font-semibold text-red-900">
                15th November, 2025
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-red-800">Notification of acceptance:</span>
              <span className="font-semibold text-red-900">
                25th December, 2025
              </span>
            </div>
          </div>
        </div>

        {/* Proposal Content */}
        <div className="bg-white-50 rounded-lg shadow-sm border p-6 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            Proposal Requirements
          </h2>
          <div className="space-y-4">
            <div className="border-l-4 border-green-500 pl-4">
              <h3 className="font-medium text-gray-900">
                Title of the Special Session
              </h3>
            </div>
            <div className="border-l-4 border-green-500 pl-4">
              <h3 className="font-medium text-gray-900">Brief Description</h3>
              <p className="text-gray-600 text-sm mt-1">
                Approximately 300 words describing the area of concern and why
                it's an interesting and significant topic
              </p>
            </div>
            <div className="border-l-4 border-green-500 pl-4">
              <h3 className="font-medium text-gray-900">
                Session Chairs Information
              </h3>
              <p className="text-gray-600 text-sm mt-1">
                Name and contact information of maximum session chairs with
                their background
              </p>
            </div>
            <div className="border-l-4 border-green-500 pl-4">
              <h3 className="font-medium text-gray-900">
                Potential Authors List
              </h3>
              <p className="text-gray-600 text-sm mt-1">
                Minimum 10 potential authors with affiliation and contact
                details
              </p>
            </div>
            <div className="border-l-4 border-green-500 pl-4">
              <h3 className="font-medium text-gray-900">
                Potential Reviewers List
              </h3>
              <p className="text-gray-600 text-sm mt-1">
                Minimum 10 potential reviewers with affiliation and contact
                details
              </p>
            </div>
          </div>
        </div>

        {/* Organization Guidelines */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-blue-50 rounded-lg shadow-sm border p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Organization
            </h3>
            <ul className="space-y-2 text-gray-700 text-sm">
              <li>• Publicize session among researchers</li>
              <li>• Attract sufficient quality papers</li>
              <li>• Organize review process</li>
              <li>• Ensure at least 3 reviews per paper</li>
            </ul>
          </div>

          <div className="bg-green-50 rounded-lg shadow-sm border p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Requirements
            </h3>
            <ul className="space-y-2 text-gray-700 text-sm">
              <li>• Minimum 8 accepted and registered papers</li>
              <li>• Authors from at least 4 different institutions</li>
              <li>• One organizer must attend conference</li>
              <li>• Serve as session chairs</li>
            </ul>
          </div>
        </div>

        {/* Restrictions */}
        <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 mb-8">
          <h2 className="text-xl font-semibold text-amber-900 mb-4">
            Restrictions
          </h2>
          <div className="grid md:grid-cols-3 gap-4 text-sm text-amber-800">
            <div className="bg-yellow-100 p-3 rounded border-l-4 border-amber-500">
              <strong>Authorship:</strong> Maximum 2 papers per individual
              author in same session
            </div>
            <div className="bg-yellow-100 p-3 rounded border-l-4 border-amber-500">
              <strong>Organization:</strong> Maximum 2 organizers per
              institution
            </div>
            <div className="bg-yellow-100 p-3 rounded border-l-4 border-amber-500">
              <strong>Team Size:</strong> 2-4 organizers per session
            </div>
          </div>
        </div>

        {/* Paper Format */}
        <div className="bg-white-50 rounded-lg shadow-sm border p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            Paper Submission Format
          </h2>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-700 mb-2">
                <strong>Maximum 6 pages</strong> following IEEE conference
                template
              </p>
              <a
                href="https://www.ieee.org/conferences/publishing/templates.htm"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-blue-600 hover:text-blue-800 text-sm"
              >
                IEEE Conference Templates
                <svg
                  className="w-4 h-4 ml-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Benefits */}
        <div className="bg-green-50 border border-green-200 rounded-lg p-6 mt-8">
          <h2 className="text-xl font-semibold text-green-900 mb-3">
            Organizer Benefits
          </h2>
          <p className="text-green-800">
            Organizers of successful Special Sessions will receive one
            complimentary full conference registration (per at least 8 accepted
            and registered papers not authored by any organizers).
          </p>
        </div>
      </div>
    </div>
  );
}
