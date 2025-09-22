import React from "react";

const steps = [
  {
    number: 1,
    title: "Camera-Ready Paper Submission",
    sections: [
      {
        heading: "Submission Requirements",
        color: "yellow",
        content: (
          <ul className="list-disc list-inside space-y-1">
            <li>
              Submit camera-ready version by <strong>May 20, 2025</strong>
            </li>
            <li>
              Plagiarism must be <strong>less than 30%</strong>
            </li>
            <li>
              Papers exceeding 30% plagiarism will <strong>not</strong> be
              submitted to IEEE Xplore
            </li>
          </ul>
        ),
      },
      {
        heading: "IEEE Template Compliance",
        color: "blue",
        content: (
          <p>
            Authors must follow the IEEE Template available at:{" "}
            <a
              href="https://www.ieee.org/conferences/publishing/templates.html"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              IEEE Template Link
            </a>
          </p>
        ),
      },
      {
        heading: "Page Limit",
        color: "green",
        content: (
          <p>
            Final camera-ready papers must be <strong>6-8 pages</strong>. Papers
            not meeting this requirement will not be submitted to IEEE Xplore.
          </p>
        ),
      },
    ],
  },
  {
    number: 2,
    title: "Author Registration & Presentation",
    sections: [
      {
        heading: "Registration Requirements",
        color: "orange",
        content: (
          <ul className="list-disc list-inside space-y-1">
            <li>
              <strong>At least one author</strong> must register with Full
              Author Registration
            </li>
            <li>
              The registered author must <strong>present the paper</strong> at
              SeFet 2026
            </li>
            <li>
              Each registration covers <strong>ONE participant only</strong>{" "}
              (certificate included)
            </li>
            <li>Co-authors requiring certificates must register separately</li>
          </ul>
        ),
      },
      {
        heading: "Copyright Notice",
        color: "purple",
        content: (
          <p>
            Add the copyright clearance code to the bottom of the first page.
            Use the template from{" "}
            <a
              href="https://www.ieee.org/conferences/publishing/templates.html"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-600 hover:underline"
            >
              IEEE Template
            </a>
          </p>
        ),
      },
    ],
  },
  {
    number: 3,
    title: "IEEE Copyright Form",
    sections: [
      {
        heading: "",
        color: "indigo",
        content: (
          <p>
            The IEEE Copyright Form must be signed and uploaded in the
            corresponding section. Access this through your CMT account login
            against your accepted paper.
          </p>
        ),
      },
    ],
  },
  {
    number: 4,
    title: "IEEE PDF eXpress Submission",
    sections: [
      {
        heading: "Before Creating PDF",
        color: "teal",
        content: (
          <ul className="list-disc list-inside space-y-1">
            <li>Add copyright notice to the bottom of the first page</li>
            <li>Proofread the document thoroughly</li>
          </ul>
        ),
      },
      {
        heading: "Creating PDF eXpress Account",
        color: "cyan",
        content: (
          <>
            <p className="font-medium">For First-time Users:</p>
            <ol className="list-decimal list-inside space-y-1 ml-4">
              <li>Log in to the IEEE PDF eXpress™ site</li>
              <li>Select "New Users - Click Here" link</li>
              <li>Enter Conference ID, email, and password</li>
              <li>Complete the information as prompted</li>
              <li>Verify account setup via online and email confirmation</li>
            </ol>
            <p className="font-medium mt-2">For Previous Users:</p>
            <p className="ml-4">
              Follow the same steps using your previous conference password and
              verify contact information.
            </p>
          </>
        ),
      },
    ],
  },
  {
    number: 5,
    title: "IEEE Copyright Form eCF Submission",
    sections: [
      {
        heading: "Important",
        color: "rose",
        content: (
          <p>
            Copyright transfer to IEEE is <strong>mandatory</strong> for papers
            to appear in IEEE Xplore. Each paper requires separate copyright
            transfer.
          </p>
        ),
      },
      {
        heading: "Copyright Transfer Process",
        color: "gray",
        content: (
          <>
            <ol className="list-decimal list-inside space-y-1">
              <li>Login to your CMT Paper Submission Portal</li>
              <li>Click on the IEEE copyright link</li>
              <li>
                Click "Click here to redirect to the IEEE copyright website"
              </li>
              <li>Follow Steps 1-5 to complete the transfer</li>
              <li>Download the completed Copyright Form as PDF</li>
              <li>Return to CMT Portal and upload the PDF file</li>
            </ol>
            <div className="mt-3 p-3 bg-amber-50 border border-amber-200 rounded">
              <p className="text-amber-800 font-medium">
                Remember: Save a copy of the completed form and ensure separate
                copyright transfer for each paper.
              </p>
            </div>
          </>
        ),
      },
    ],
  },
];

export default function CallForPapersPage() {
  return (
    <div className="max-w-6xl mx-auto p-6">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Camera Ready Paper Submission
        </h1>
        <p className="text-lg text-gray-600">
          IEEE SeFet 2026 - Guidelines for Final Paper Submission
        </p>
      </div>

      {/* Important Notice */}
      <div className="max-w-5xl mx-auto bg-red-50 border-l-4 border-red-500 p-6 mb-12">
        <h2 className="text-xl font-semibold text-red-800 mb-2">
          Important Notice
        </h2>
        <p className="text-red-700">
          <strong>Deadline:</strong> Camera-ready submissions must be completed
          by <strong>May 20, 2025</strong>
        </p>
        <p className="text-red-700 mt-2">
          <strong>Plagiarism Requirement:</strong> Manuscripts must have less
          than 30% plagiarism as verified by standard software (e.g., Turnitin)
        </p>
      </div>

      {/* Timeline */}
      <div className="relative max-w-5xl mx-auto">
        {/* Vertical Line */}
        <div className="absolute left-5 top-0 w-1 bg-gray-300 h-full"></div>

        {/* Steps */}
        <div className="space-y-12">
          {steps.map((step) => (
            <div key={step.number} className="relative flex items-start">
              {/* Step Number Circle */}
              <div className="flex-shrink-0 relative z-10">
                <div className="w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold text-lg shadow-md">
                  {step.number}
                </div>
              </div>

              {/* Step Content */}
              <div className="ml-8 space-y-4 w-full">
                <h2 className="text-2xl font-semibold text-gray-800">
                  {step.title}
                </h2>
                {step.sections.map((sec, idx) => (
                  <div
                    key={idx}
                    className={`bg-${sec.color}-50 border border-${sec.color}-200 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200`}
                  >
                    {sec.heading && (
                      <h3 className={`text-${sec.color}-800 font-medium mb-2`}>
                        {sec.heading}
                      </h3>
                    )}
                    <div className="text-gray-700">{sec.content}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Need Help Section */}
      <div className="max-w-5xl mx-auto bg-green-50 border-l-4 border-green-400 p-6 mt-12">
        <h3 className="text-xl font-semibold text-green-800 mb-2">
          Need Help?
        </h3>
        <p className="text-green-700">
          For any questions regarding the submission process, please contact the
          conference organizing committee.
        </p>
      </div>
    </div>
  );
}
