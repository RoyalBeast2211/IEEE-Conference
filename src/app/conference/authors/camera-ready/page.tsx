import { Layout } from "@/components/Layout";

export default function CameraReadyPage() {
  return (
    <Layout>
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">
            Camera Ready Paper Submission
          </h1>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
            <h2 className="text-xl font-semibold text-blue-800 mb-3">
              Important Dates
            </h2>
            <ul className="space-y-2 text-blue-700">
              <li>
                <strong>Camera Ready Submission Deadline:</strong> December 15,
                2025
              </li>
              <li>
                <strong>Registration Deadline:</strong> December 20, 2025
              </li>
              <li>
                <strong>Copyright Form Submission:</strong> December 20, 2025
              </li>
            </ul>
          </div>

          <div className="prose max-w-none">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Submission Guidelines
            </h2>

            <h3 className="text-xl font-semibold text-gray-700 mb-3">
              1. Paper Format
            </h3>
            <ul className="list-disc pl-6 mb-6">
              <li>Use IEEE standard format (IEEE Conference template)</li>
              <li>Maximum 6 pages for regular papers</li>
              <li>Maximum 4 pages for short papers</li>
              <li>PDF format only</li>
              <li>File size should not exceed 5MB</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-700 mb-3">
              2. Required Documents
            </h3>
            <div className="bg-gray-50 p-4 rounded-lg mb-6">
              <ul className="list-disc pl-6 space-y-2">
                <li>Final camera-ready paper (PDF)</li>
                <li>Completed IEEE copyright form</li>
                <li>Registration confirmation</li>
                <li>Source files (LaTeX/Word) if requested</li>
              </ul>
            </div>

            <h3 className="text-xl font-semibold text-gray-700 mb-3">
              3. Quality Checklist
            </h3>
            <ul className="list-disc pl-6 mb-6">
              <li>All reviewer comments have been addressed</li>
              <li>Figures and tables are high quality and readable</li>
              <li>References are complete and properly formatted</li>
              <li>Author information is correctly listed</li>
              <li>Paper title matches the accepted title</li>
            </ul>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
              <p className="text-yellow-800">
                <strong>Note:</strong> Papers will only be included in the
                proceedings if all requirements are met and at least one author
                is registered for the conference.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export const metadata = {
  title: "Camera Ready Paper Submission - IEEE SeFet 2026",
  description: "Guidelines for camera ready paper submission",
};
