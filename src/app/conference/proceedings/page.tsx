import React from "react";

export default function ProceedingsPage() {
  return (
    <div className="container">
      <h1>SEFET Proceedings</h1>
      <p>
        IEEE SeFet 2026 proceedings will be published in IEEE Xplore Digital
        Library, ensuring global accessibility and indexing in major databases.
      </p>

      <section>
        <h2>Publication Details</h2>
        <div
          style={{
            backgroundColor: "#f8f9fa",
            padding: "20px",
            borderRadius: "8px",
            margin: "20px 0",
          }}
        >
          <h3>IEEE Xplore Publication</h3>
          <ul>
            <li>
              <strong>Publisher:</strong> IEEE Computer Society
            </li>
            <li>
              <strong>ISSN:</strong> Will be assigned upon publication
            </li>
            <li>
              <strong>Indexing:</strong> Scopus, Web of Science, IEEE Xplore
            </li>
            <li>
              <strong>Format:</strong> Digital and Print
            </li>
            <li>
              <strong>Expected Publication:</strong> August 2026
            </li>
          </ul>
        </div>
      </section>

      <section>
        <h2>Previous Proceedings</h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "20px",
          }}
        >
          <div
            style={{
              border: "1px solid #ddd",
              padding: "15px",
              borderRadius: "8px",
            }}
          >
            <h3>IEEE SeFet 2024</h3>
            <p>
              <strong>Title:</strong> Proceedings of the 5th IEEE International
              Conference on Sustainable Energy and Future Electric
              Transportation
            </p>
            <p>
              <strong>DOI:</strong> 10.1109/SeFet2024.xxxx
            </p>
            <p>
              <strong>Papers:</strong> 156 accepted papers
            </p>
          </div>
          <div
            style={{
              border: "1px solid #ddd",
              padding: "15px",
              borderRadius: "8px",
            }}
          >
            <h3>IEEE SeFet 2023</h3>
            <p>
              <strong>Title:</strong> Proceedings of the 4th IEEE International
              Conference on Sustainable Energy and Future Electric
              Transportation
            </p>
            <p>
              <strong>DOI:</strong> 10.1109/SeFet2023.xxxx
            </p>
            <p>
              <strong>Papers:</strong> 142 accepted papers
            </p>
          </div>
        </div>
      </section>

      <section>
        <h2>Access Information</h2>
        <p>
          All proceedings are available through IEEE Xplore Digital Library.
          Conference attendees receive complimentary access to the proceedings.
        </p>
        <div style={{ marginTop: "20px" }}>
          <h3>For Authors</h3>
          <ul>
            <li>Camera-ready papers must be submitted by June 15, 2026</li>
            <li>Papers must comply with IEEE formatting guidelines</li>
            <li>Copyright forms must be completed for publication</li>
            <li>Accepted papers will be available online post-conference</li>
          </ul>
        </div>
      </section>
    </div>
  );
}
