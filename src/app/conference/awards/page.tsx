import React from "react";

export default function AwardsPage() {
  return (
    <div className="container">
      <h1>Conference Awards</h1>
      <p>
        IEEE SeFet 2026 recognizes outstanding contributions in research,
        education, and innovation.
      </p>

      <section>
        <h2>Award Categories</h2>

        <div>
          <h3>Outstanding Doctoral Thesis Award</h3>
          <p>
            Recognizing exceptional doctoral research in sustainable energy and
            electric transportation.
          </p>
          <ul>
            <li>Award Amount: $1,000</li>
            <li>Eligibility: PhD thesis defended within the last 2 years</li>
            <li>Application Deadline: March 15, 2026</li>
          </ul>
        </div>

        <div>
          <h3>Student Travel Awards</h3>
          <p>
            Supporting student participation and presentation at the conference.
          </p>
          <ul>
            <li>Award Amount: Up to $500 per student</li>
            <li>Eligibility: Full-time students presenting papers</li>
            <li>Application Deadline: April 1, 2026</li>
          </ul>
        </div>

        <div>
          <h3>Best Paper Award</h3>
          <p>
            Honoring the most impactful research contributions presented at the
            conference.
          </p>
        </div>

        <div>
          <h3>Best Poster Award</h3>
          <p>
            Recognizing excellence in poster presentation and research
            communication.
          </p>
        </div>
      </section>
    </div>
  );
}
