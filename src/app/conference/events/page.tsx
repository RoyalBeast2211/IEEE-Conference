import React from "react";

export default function EventsPage() {
  return (
    <div className="container">
      <h1>Event Details</h1>
      <p>
        IEEE SeFet 2026 features a comprehensive program of technical sessions,
        special events, and networking opportunities over three days.
      </p>

      <section>
        <h2>Conference Overview</h2>
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
            <h3>📅 Program Schedule</h3>
            <p>
              Detailed timeline of all conference sessions, presentations, and
              events
            </p>
            <ul>
              <li>Technical paper presentations</li>
              <li>Keynote speeches</li>
              <li>Panel discussions</li>
              <li>Poster sessions</li>
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
            <h3>👩‍💼 WIE Events</h3>
            <p>Women in Engineering special sessions and networking events</p>
            <ul>
              <li>Women in STEM panel</li>
              <li>Mentorship sessions</li>
              <li>Career development workshops</li>
              <li>Networking lunch</li>
            </ul>
          </div>

          <div
            style={{
              border: "2px solid #2e8b57",
              padding: "20px",
              borderRadius: "10px",
              backgroundColor: "#f0fff0",
            }}
          >
            <h3>🎓 SYP Events</h3>
            <p>Student and Young Professional activities and competitions</p>
            <ul>
              <li>Student paper competition</li>
              <li>Young professional panel</li>
              <li>Industry mentoring sessions</li>
              <li>Career fair</li>
            </ul>
          </div>

          <div
            style={{
              border: "2px solid #8b4513",
              padding: "20px",
              borderRadius: "10px",
              backgroundColor: "#fff8dc",
            }}
          >
            <h3>🎓 Academic Panel Discussion</h3>
            <p>
              Roundtable discussions on research trends and future directions
            </p>
            <ul>
              <li>Research methodology panel</li>
              <li>Funding opportunities</li>
              <li>International collaboration</li>
              <li>Publication strategies</li>
            </ul>
          </div>

          <div
            style={{
              border: "2px solid #4169e1",
              padding: "20px",
              borderRadius: "10px",
              backgroundColor: "#f0f8ff",
            }}
          >
            <h3>🏭 Industry Events</h3>
            <p>Industry-focused sessions showcasing practical applications</p>
            <ul>
              <li>Industry showcase</li>
              <li>Technology demonstrations</li>
              <li>Partnership opportunities</li>
              <li>Investment pitches</li>
            </ul>
          </div>

          <div
            style={{
              border: "2px solid #dc143c",
              padding: "20px",
              borderRadius: "10px",
              backgroundColor: "#fff0f5",
            }}
          >
            <h3>🏛️ City Tour</h3>
            <p>
              Explore Nagpur's cultural heritage and technological landmarks
            </p>
            <ul>
              <li>Historical sites visit</li>
              <li>Technology parks tour</li>
              <li>Cultural performance</li>
              <li>Local cuisine experience</li>
            </ul>
          </div>
        </div>
      </section>

      <section>
        <h2>Event Highlights by Day</h2>

        <div style={{ margin: "30px 0" }}>
          <div
            style={{
              backgroundColor: "#f8f9fa",
              padding: "25px",
              borderRadius: "10px",
              border: "1px solid #ddd",
            }}
          >
            <h3 style={{ color: "#00629b" }}>
              🗓️ Day 1 - June 24, 2026 (Tuesday)
            </h3>
            <div style={{ marginLeft: "20px" }}>
              <p>
                <strong>8:00 AM - 9:00 AM:</strong> Registration & Welcome
                Coffee
              </p>
              <p>
                <strong>9:00 AM - 10:00 AM:</strong> Opening Ceremony & Keynote
              </p>
              <p>
                <strong>10:30 AM - 12:00 PM:</strong> Technical Session 1 -
                Sustainable Energy Systems
              </p>
              <p>
                <strong>1:00 PM - 2:00 PM:</strong> Lunch & Networking
              </p>
              <p>
                <strong>2:00 PM - 6:00 PM:</strong> Tutorials - Advanced Battery
                Systems
              </p>
              <p>
                <strong>6:30 PM - 8:00 PM:</strong> Welcome Reception
              </p>
            </div>
          </div>
        </div>

        <div style={{ margin: "30px 0" }}>
          <div
            style={{
              backgroundColor: "#f0fff0",
              padding: "25px",
              borderRadius: "10px",
              border: "1px solid #ddd",
            }}
          >
            <h3 style={{ color: "#2e8b57" }}>
              🗓️ Day 2 - June 25, 2026 (Wednesday)
            </h3>
            <div style={{ marginLeft: "20px" }}>
              <p>
                <strong>9:00 AM - 10:00 AM:</strong> Keynote - Smart Grid
                Technologies
              </p>
              <p>
                <strong>10:30 AM - 12:00 PM:</strong> Technical Session 2 -
                Electric Transportation
              </p>
              <p>
                <strong>12:00 PM - 1:00 PM:</strong> WIE Networking Lunch
              </p>
              <p>
                <strong>1:00 PM - 2:30 PM:</strong> Academic Panel Discussion
              </p>
              <p>
                <strong>2:30 PM - 4:00 PM:</strong> Poster Session & Industry
                Showcase
              </p>
              <p>
                <strong>4:00 PM - 5:30 PM:</strong> SYP Events - Student
                Competition
              </p>
              <p>
                <strong>7:00 PM - 10:00 PM:</strong> Conference Banquet
              </p>
            </div>
          </div>
        </div>

        <div style={{ margin: "30px 0" }}>
          <div
            style={{
              backgroundColor: "#fff8dc",
              padding: "25px",
              borderRadius: "10px",
              border: "1px solid #ddd",
            }}
          >
            <h3 style={{ color: "#8b4513" }}>
              🗓️ Day 3 - June 26, 2026 (Thursday)
            </h3>
            <div style={{ marginLeft: "20px" }}>
              <p>
                <strong>9:00 AM - 10:00 AM:</strong> Keynote - Future Energy
                Landscapes
              </p>
              <p>
                <strong>10:30 AM - 12:00 PM:</strong> Technical Session 3 -
                Power Electronics
              </p>
              <p>
                <strong>12:00 PM - 1:00 PM:</strong> Lunch
              </p>
              <p>
                <strong>1:00 PM - 2:30 PM:</strong> Industry Panel - Market
                Trends
              </p>
              <p>
                <strong>2:30 PM - 4:00 PM:</strong> Awards Ceremony
              </p>
              <p>
                <strong>4:00 PM - 5:00 PM:</strong> Closing Ceremony
              </p>
              <p>
                <strong>5:30 PM - 8:00 PM:</strong> Optional City Tour
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h2>Special Events</h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
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
            <h3>🏆 Awards Ceremony</h3>
            <p>
              <strong>Date:</strong> June 26, 2:30 PM - 4:00 PM
            </p>
            <p>Recognition of outstanding contributions:</p>
            <ul>
              <li>Best Paper Awards</li>
              <li>Best Poster Awards</li>
              <li>Outstanding Doctoral Thesis Award</li>
              <li>Student Travel Awards</li>
            </ul>
          </div>

          <div
            style={{
              border: "1px solid #ddd",
              padding: "20px",
              borderRadius: "8px",
            }}
          >
            <h3>🍽️ Conference Banquet</h3>
            <p>
              <strong>Date:</strong> June 25, 7:00 PM - 10:00 PM
            </p>
            <p>
              <strong>Venue:</strong> Hotel Radisson Blu
            </p>
            <p>Evening of networking, cultural performances, and fine dining</p>
            <ul>
              <li>Traditional Indian cultural show</li>
              <li>Networking opportunities</li>
              <li>Live music and entertainment</li>
            </ul>
          </div>

          <div
            style={{
              border: "1px solid #ddd",
              padding: "20px",
              borderRadius: "8px",
            }}
          >
            <h3>🎯 Technical Exhibition</h3>
            <p>
              <strong>Dates:</strong> June 24-26, All Days
            </p>
            <p>Industry partners showcasing latest technologies:</p>
            <ul>
              <li>EV charging solutions</li>
              <li>Battery technologies</li>
              <li>Smart grid equipment</li>
              <li>Renewable energy systems</li>
            </ul>
          </div>
        </div>
      </section>

      <section>
        <h2>Networking Opportunities</h2>
        <div
          style={{
            backgroundColor: "#e7f3ff",
            padding: "20px",
            borderRadius: "8px",
          }}
        >
          <h3>Professional Networking</h3>
          <ul>
            <li>
              <strong>Welcome Reception:</strong> Informal networking with
              refreshments
            </li>
            <li>
              <strong>Coffee Breaks:</strong> Structured networking sessions
              between presentations
            </li>
            <li>
              <strong>Lunch Networking:</strong> Topic-focused networking during
              meals
            </li>
            <li>
              <strong>Poster Sessions:</strong> Interactive discussions with
              researchers
            </li>
            <li>
              <strong>Industry Mixer:</strong> Connect with industry
              professionals and recruiters
            </li>
          </ul>
        </div>
      </section>

      <section>
        <h2>Event Registration</h2>
        <div
          style={{
            backgroundColor: "#fff3cd",
            padding: "20px",
            borderRadius: "8px",
          }}
        >
          <p>
            Some events require separate registration or have limited capacity.
            Please register early to secure your participation.
          </p>
          <ul>
            <li>
              <strong>Conference Banquet:</strong> ₹2,500 per person (limited
              seats)
            </li>
            <li>
              <strong>City Tour:</strong> ₹1,200 per person (transportation
              included)
            </li>
            <li>
              <strong>Tutorial Sessions:</strong> Additional fees apply
            </li>
            <li>
              <strong>WIE Events:</strong> Free for IEEE WIE members
            </li>
          </ul>
        </div>
      </section>

      <section>
        <h2>Contact Information</h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "20px",
          }}
        >
          <div
            style={{
              backgroundColor: "#f0f8ff",
              padding: "15px",
              borderRadius: "8px",
            }}
          >
            <h4>Event Coordination</h4>
            <p>
              <strong>Dr. Anita Desai</strong>
              <br />
              Email: events@sefet2026.org
              <br />
              Phone: +91-712-2801250
            </p>
          </div>
          <div
            style={{
              backgroundColor: "#f0fff0",
              padding: "15px",
              borderRadius: "8px",
            }}
          >
            <h4>Special Events</h4>
            <p>
              <strong>Prof. Vikram Singh</strong>
              <br />
              Email: special@sefet2026.org
              <br />
              Phone: +91-712-2801251
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
