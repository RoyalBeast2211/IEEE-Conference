import React from "react";

export default function GalleryPage() {
  return (
    <div className="container">
      <h1>Photo Gallery</h1>
      <p>
        Explore memorable moments from previous IEEE SeFet conferences and
        events.
      </p>

      <section>
        <h2>IEEE SeFet 2024 Highlights</h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "20px",
            marginTop: "20px",
          }}
        >
          <div
            style={{
              border: "1px solid #ddd",
              padding: "15px",
              borderRadius: "8px",
            }}
          >
            <h3>Opening Ceremony</h3>
            <p>
              Distinguished guests and participants at the conference
              inauguration.
            </p>
          </div>
          <div
            style={{
              border: "1px solid #ddd",
              padding: "15px",
              borderRadius: "8px",
            }}
          >
            <h3>Keynote Sessions</h3>
            <p>
              Renowned speakers sharing insights on sustainable energy
              technologies.
            </p>
          </div>
          <div
            style={{
              border: "1px solid #ddd",
              padding: "15px",
              borderRadius: "8px",
            }}
          >
            <h3>Technical Presentations</h3>
            <p>
              Researchers presenting cutting-edge work in electric
              transportation.
            </p>
          </div>
          <div
            style={{
              border: "1px solid #ddd",
              padding: "15px",
              borderRadius: "8px",
            }}
          >
            <h3>Poster Sessions</h3>
            <p>
              Interactive poster presentations and networking opportunities.
            </p>
          </div>
          <div
            style={{
              border: "1px solid #ddd",
              padding: "15px",
              borderRadius: "8px",
            }}
          >
            <h3>Awards Ceremony</h3>
            <p>Recognition of outstanding contributions and achievements.</p>
          </div>
          <div
            style={{
              border: "1px solid #ddd",
              padding: "15px",
              borderRadius: "8px",
            }}
          >
            <h3>Cultural Events</h3>
            <p>
              Celebrating local culture and fostering international
              collaboration.
            </p>
          </div>
        </div>
      </section>

      <section style={{ marginTop: "40px" }}>
        <h2>Previous Conferences</h2>
        <ul>
          <li>IEEE SeFet 2023 - Chennai, India</li>
          <li>IEEE SeFet 2022 - Virtual Conference</li>
          <li>IEEE SeFet 2021 - Hyderabad, India</li>
          <li>IEEE SeFet 2020 - Bhubaneswar, India</li>
        </ul>
      </section>
    </div>
  );
}
