import React from "react";

export default function SpeakersPage() {
  return (
    <div className="container">
      <h1>Conference Speakers</h1>
      <p>
        IEEE SeFet 2026 features distinguished speakers from academia and
        industry, sharing their expertise in sustainable energy and future
        electric transportation.
      </p>

      <section>
        <h2>Speaker Categories</h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "20px",
            margin: "20px 0",
          }}
        >
          <div
            style={{
              border: "2px solid #00629b",
              padding: "20px",
              borderRadius: "10px",
              backgroundColor: "#f0f8ff",
            }}
          >
            <h3>🎤 Keynote Speakers</h3>
            <p>
              World-renowned experts delivering inspiring talks on breakthrough
              technologies and future trends in sustainable energy and electric
              transportation.
            </p>
            <ul>
              <li>Industry visionaries and thought leaders</li>
              <li>Distinguished academic researchers</li>
              <li>Policy makers and government officials</li>
              <li>Successful entrepreneurs and innovators</li>
            </ul>
          </div>

          <div
            style={{
              border: "2px solid #813c54",
              padding: "20px",
              borderRadius: "10px",
              backgroundColor: "#faf0f5",
            }}
          >
            <h3>👨‍🏫 Tutorial Speakers</h3>
            <p>
              Expert practitioners conducting in-depth tutorials on cutting-edge
              technologies and practical applications in the field.
            </p>
            <ul>
              <li>Hands-on technical workshops</li>
              <li>Advanced research methodologies</li>
              <li>Industry best practices</li>
              <li>Emerging technology demonstrations</li>
            </ul>
          </div>
        </div>
      </section>

      <section>
        <h2>Speaker Program Highlights</h2>
        <div
          style={{
            backgroundColor: "#f8f9fa",
            padding: "20px",
            borderRadius: "8px",
            margin: "20px 0",
          }}
        >
          <h3>Day 1 - June 24, 2026</h3>
          <ul>
            <li>
              <strong>Opening Keynote:</strong> "Future of Sustainable Energy
              Systems" (9:00 AM)
            </li>
            <li>
              <strong>Technical Tutorial:</strong> "Advanced Battery Management
              Systems" (2:00 PM)
            </li>
            <li>
              <strong>Industry Panel:</strong> "Electric Vehicle Market Trends"
              (4:00 PM)
            </li>
          </ul>

          <h3>Day 2 - June 25, 2026</h3>
          <ul>
            <li>
              <strong>Keynote Address:</strong> "Smart Grid Integration
              Challenges" (9:00 AM)
            </li>
            <li>
              <strong>Tutorial Session:</strong> "AI in Renewable Energy
              Forecasting" (2:00 PM)
            </li>
            <li>
              <strong>Innovation Showcase:</strong> "Startup Innovations in EV
              Technology" (4:00 PM)
            </li>
          </ul>

          <h3>Day 3 - June 26, 2026</h3>
          <ul>
            <li>
              <strong>Closing Keynote:</strong> "Global Energy Transition
              Roadmap" (9:00 AM)
            </li>
            <li>
              <strong>Technical Workshop:</strong> "Power Electronics for EVs"
              (2:00 PM)
            </li>
            <li>
              <strong>Future Directions Panel:</strong> "Next Decade in Clean
              Transportation" (4:00 PM)
            </li>
          </ul>
        </div>
      </section>

      <section>
        <h2>Speaker Application</h2>
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
              padding: "20px",
              borderRadius: "8px",
            }}
          >
            <h3>Call for Tutorial Proposals</h3>
            <p>
              We invite proposals for half-day and full-day tutorials on topics
              related to sustainable energy and electric transportation.
            </p>
            <ul>
              <li>
                <strong>Proposal Deadline:</strong> February 28, 2026
              </li>
              <li>
                <strong>Notification:</strong> March 31, 2026
              </li>
              <li>
                <strong>Tutorial Length:</strong> 3-6 hours
              </li>
              <li>
                <strong>Compensation:</strong> Honorarium provided
              </li>
            </ul>
          </div>

          <div
            style={{
              border: "1px solid #ddd",
              padding: "20px",
              borderRadius: "8px",
            }}
          >
            <h3>Speaker Benefits</h3>
            <ul>
              <li>Complimentary conference registration</li>
              <li>Travel support (for international speakers)</li>
              <li>Accommodation arrangements</li>
              <li>Airport pickup and local transportation</li>
              <li>Speaker dinner and networking events</li>
              <li>Certificate of appreciation</li>
            </ul>
          </div>
        </div>
      </section>

      <section>
        <h2>Speaking Opportunities</h2>
        <div
          style={{
            backgroundColor: "#e7f3ff",
            padding: "20px",
            borderRadius: "8px",
          }}
        >
          <h3>Types of Presentations</h3>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: "15px",
              marginTop: "15px",
            }}
          >
            <div>
              <h4>Keynote Talks</h4>
              <p>45-60 minutes including Q&A</p>
            </div>
            <div>
              <h4>Technical Tutorials</h4>
              <p>3-6 hours with hands-on activities</p>
            </div>
            <div>
              <h4>Panel Discussions</h4>
              <p>90 minutes moderated discussions</p>
            </div>
            <div>
              <h4>Industry Sessions</h4>
              <p>30-45 minutes focused presentations</p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h2>Contact Information</h2>
        <div
          style={{
            backgroundColor: "#fff3cd",
            padding: "20px",
            borderRadius: "8px",
          }}
        >
          <h3>Speaker Coordination Committee</h3>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: "20px",
            }}
          >
            <div>
              <h4>Keynote Speakers Chair</h4>
              <p>
                <strong>Dr. Priya Nair</strong>
                <br />
                Email: keynote@sefet2026.org
                <br />
                Phone: +91-712-2801240
              </p>
            </div>
            <div>
              <h4>Tutorial Chairs</h4>
              <p>
                <strong>Prof. Suresh Patil</strong>
                <br />
                Email: tutorials@sefet2026.org
                <br />
                Phone: +91-712-2801241
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
