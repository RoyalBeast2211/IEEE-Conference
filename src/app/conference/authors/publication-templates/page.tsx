import { Layout } from "@/components/Layout";

export default function PublicationTemplatesPage() {
  return (
    <Layout>
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">
            Publication and Templates
          </h1>

          <div className="prose max-w-none">
            <p className="text-lg text-gray-600 mb-8">
              All accepted papers will be published in IEEE Xplore Digital
              Library. Please use the official IEEE templates to ensure
              compliance with publication standards.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mb-6">
              Download Templates
            </h2>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-blue-600 mb-4">
                  LaTeX Template
                </h3>
                <p className="text-gray-600 mb-4">
                  Professional LaTeX template for IEEE conference papers with
                  automatic formatting.
                </p>
                <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
                  Download LaTeX Template
                </button>
              </div>

              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-green-600 mb-4">
                  MS Word Template
                </h3>
                <p className="text-gray-600 mb-4">
                  Microsoft Word template with pre-configured styles and
                  formatting.
                </p>
                <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition">
                  Download Word Template
                </button>
              </div>
            </div>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Publication Guidelines
            </h2>

            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <h3 className="text-lg font-semibold text-gray-700 mb-3">
                Paper Specifications
              </h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Format:</strong> IEEE Standard Conference Format
                </li>
                <li>
                  <strong>Length:</strong> 6 pages maximum (including
                  references)
                </li>
                <li>
                  <strong>Font:</strong> Times New Roman, 10pt
                </li>
                <li>
                  <strong>Margins:</strong> As specified in IEEE template
                </li>
                <li>
                  <strong>Columns:</strong> Two-column format
                </li>
              </ul>
            </div>

            <h3 className="text-xl font-semibold text-gray-700 mb-3">
              IEEE Xplore Publication
            </h3>
            <p className="mb-4">
              All accepted papers will be submitted to IEEE Xplore Digital
              Library for indexing. This ensures global visibility and
              accessibility of your research work.
            </p>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h4 className="font-semibold text-blue-800 mb-2">
                Indexing Services
              </h4>
              <ul className="list-disc pl-6 text-blue-700">
                <li>IEEE Xplore Digital Library</li>
                <li>Scopus (Elsevier)</li>
                <li>Web of Science (Clarivate Analytics)</li>
                <li>Google Scholar</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export const metadata = {
  title: "Publication and Templates - IEEE SeFet 2026",
  description: "Download templates and publication guidelines",
};
