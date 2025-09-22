import React from "react";

export default function WIEEventsPage() {
  return (
    <div className="container">
      <h1>Women in Engineering (WIE) Events</h1>
      <p>
        IEEE SeFet 2026 is proud to support Women in Engineering through
        dedicated sessions, networking opportunities, and professional
        development programs.
      </p>

      <section>
        <h2>WIE Program Highlights</h2>
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
              border: "2px solid #813c54",
              padding: "20px",
              borderRadius: "10px",
              backgroundColor: "#faf0f5",
            }}
          >
            <h3>👩‍💼 Women in STEM Panel</h3>
            <p>
              <strong>Date:</strong> June 25, 1:00 PM - 2:30 PM
            </p>
            <p>
              Distinguished women leaders sharing their experiences and insights
            </p>
            <ul>
              <li>Career progression strategies</li>
              <li>Work-life balance discussions</li>
              <li>Breaking barriers in technology</li>
              <li>Leadership in engineering</li>
            </ul>
          </div>

          <div
            style={{
              border: "2px solid #9932cc",
              padding: "20px",
              borderRadius: "10px",
              backgroundColor: "#f8f0ff",
            }}
          >
            <h3>🤝 Mentorship Sessions</h3>
            <p>
              <strong>Date:</strong> June 25, 3:00 PM - 4:30 PM
            </p>
            <p>One-on-one and group mentoring opportunities</p>
            <ul>
              <li>Senior-junior professional matching</li>
              <li>Career guidance and advice</li>
              <li>Research collaboration discussions</li>
              <li>Skill development planning</li>
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
            <h3>💼 Career Development Workshop</h3>
            <p>
              <strong>Date:</strong> June 24, 4:00 PM - 5:30 PM
            </p>
            <p>Interactive workshops focused on professional growth</p>
            <ul>
              <li>Resume building and interview skills</li>
              <li>Negotiation strategies</li>
              <li>Presentation and communication</li>
              <li>Entrepreneurship opportunities</li>
            </ul>
          </div>

          <div
            style={{
              border: "2px solid #ff69b4",
              padding: "20px",
              borderRadius: "10px",
              backgroundColor: "#fff5fa",
            }}
          >
            <h3>🍽️ WIE Networking Lunch</h3>
            <p>
              <strong>Date:</strong> June 25, 12:00 PM - 1:00 PM
            </p>
            <p>Exclusive networking opportunity for women in engineering</p>
            <ul>
              <li>Informal networking environment</li>
              <li>Cross-industry connections</li>
              <li>International collaboration</li>
              <li>Research partnership opportunities</li>
            </ul>
          </div>
        </div>
      </section>

      <section>
        <h2>Featured WIE Speakers</h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))",
            gap: "25px",
            margin: "30px 0",
          }}
        >
          <div
            style={{
              border: "2px solid #813c54",
              padding: "25px",
              borderRadius: "10px",
              backgroundColor: "#faf0f5",
            }}
          >
            <div
              style={{ display: "flex", alignItems: "flex-start", gap: "20px" }}
            >
              <div
                style={{
                  width: "100px",
                  height: "100px",
                  backgroundColor: "#ddd",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "12px",
                  textAlign: "center",
                }}
              >
                Dr. Photo
              </div>
              <div style={{ flex: 1 }}>
                <h3 style={{ color: "#813c54", marginBottom: "5px" }}>
                  Dr. Priya Sharma
                </h3>
                <p
                  style={{
                    fontWeight: "bold",
                    color: "#666",
                    marginBottom: "10px",
                  }}
                >
                  Director of Engineering, Tesla India
                </p>
                <p style={{ fontSize: "14px", marginBottom: "15px" }}>
                  <strong>Session:</strong> "Leading Innovation in Electric
                  Vehicle Technology"
                </p>
                <p style={{ fontSize: "13px", color: "#555" }}>
                  Pioneer in EV technology with 15+ years experience. First
                  woman director of engineering at a major automotive company in
                  India.
                </p>
              </div>
            </div>
          </div>

          <div
            style={{
              border: "2px solid #9932cc",
              padding: "25px",
              borderRadius: "10px",
              backgroundColor: "#f8f0ff",
            }}
          >
            <div
              style={{ display: "flex", alignItems: "flex-start", gap: "20px" }}
            >
              <div
                style={{
                  width: "100px",
                  height: "100px",
                  backgroundColor: "#ddd",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "12px",
                  textAlign: "center",
                }}
              >
                Prof. Photo
              </div>
              <div style={{ flex: 1 }}>
                <h3 style={{ color: "#9932cc", marginBottom: "5px" }}>
                  Prof. Lisa Chen
                </h3>
                <p
                  style={{
                    fontWeight: "bold",
                    color: "#666",
                    marginBottom: "10px",
                  }}
                >
                  MIT Professor & IEEE Fellow
                </p>
                <p style={{ fontSize: "14px", marginBottom: "15px" }}>
                  <strong>Session:</strong> "Breaking Barriers in Academic
                  Research"
                </p>
                <p style={{ fontSize: "13px", color: "#555" }}>
                  Renowned researcher in renewable energy systems. Youngest
                  woman to receive IEEE Fellow status in power engineering.
                </p>
              </div>
            </div>
          </div>

          <div
            style={{
              border: "2px solid #dc143c",
              padding: "25px",
              borderRadius: "10px",
              backgroundColor: "#fff0f5",
            }}
          >
            <div
              style={{ display: "flex", alignItems: "flex-start", gap: "20px" }}
            >
              <div
                style={{
                  width: "100px",
                  height: "100px",
                  backgroundColor: "#ddd",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "12px",
                  textAlign: "center",
                }}
              >
                Ms. Photo
              </div>
              <div style={{ flex: 1 }}>
                <h3 style={{ color: "#dc143c", marginBottom: "5px" }}>
                  Ms. Ritu Patel
                </h3>
                <p
                  style={{
                    fontWeight: "bold",
                    color: "#666",
                    marginBottom: "10px",
                  }}
                >
                  Founder & CEO, CleanTech Innovations
                </p>
                <p style={{ fontSize: "14px", marginBottom: "15px" }}>
                  <strong>Session:</strong> "Entrepreneurship in Clean Energy"
                </p>
                <p style={{ fontSize: "13px", color: "#555" }}>
                  Successful entrepreneur who built a ₹500 crore clean energy
                  company. Featured in Forbes 30 Under 30 Asia list.
                </p>
              </div>
            </div>
          </div>

          <div
            style={{
              border: "2px solid #ff69b4",
              padding: "25px",
              borderRadius: "10px",
              backgroundColor: "#fff5fa",
            }}
          >
            <div
              style={{ display: "flex", alignItems: "flex-start", gap: "20px" }}
            >
              <div
                style={{
                  width: "100px",
                  height: "100px",
                  backgroundColor: "#ddd",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "12px",
                  textAlign: "center",
                }}
              >
                Dr. Photo
              </div>
              <div style={{ flex: 1 }}>
                <h3 style={{ color: "#ff69b4", marginBottom: "5px" }}>
                  Dr. Sarah Williams
                </h3>
                <p
                  style={{
                    fontWeight: "bold",
                    color: "#666",
                    marginBottom: "10px",
                  }}
                >
                  CTO, Renewable Energy Solutions
                </p>
                <p style={{ fontSize: "14px", marginBottom: "15px" }}>
                  <strong>Session:</strong> "Technical Leadership in Industry"
                </p>
                <p style={{ fontSize: "13px", color: "#555" }}>
                  Technology executive leading digital transformation in
                  renewable energy. Holds 25+ patents in smart grid
                  technologies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h2>WIE Student Opportunities</h2>
        <div
          style={{
            backgroundColor: "#f0f8ff",
            padding: "20px",
            borderRadius: "8px",
            margin: "20px 0",
          }}
        >
          <h3>Special Programs for Women Students</h3>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: "15px",
              marginTop: "15px",
            }}
          >
            <div
              style={{
                border: "1px solid #813c54",
                padding: "15px",
                borderRadius: "5px",
                backgroundColor: "white",
              }}
            >
              <h4>🎓 Student Paper Competition</h4>
              <p>
                Special category for women students with additional recognition
              </p>
            </div>
            <div
              style={{
                border: "1px solid #9932cc",
                padding: "15px",
                borderRadius: "5px",
                backgroundColor: "white",
              }}
            >
              <h4>💰 Travel Grants</h4>
              <p>
                Priority travel grants for women students from developing
                countries
              </p>
            </div>
            <div
              style={{
                border: "1px solid #dc143c",
                padding: "15px",
                borderRadius: "5px",
                backgroundColor: "white",
              }}
            >
              <h4>🤝 Mentorship Program</h4>
              <p>Year-long mentorship with industry professionals</p>
            </div>
            <div
              style={{
                border: "1px solid #ff69b4",
                padding: "15px",
                borderRadius: "5px",
                backgroundColor: "white",
              }}
            >
              <h4>🏆 WIE Excellence Award</h4>
              <p>Recognition for outstanding contributions by women students</p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h2>Registration and Participation</h2>
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
            <h3>WIE Event Registration</h3>
            <ul>
              <li>
                <strong>IEEE WIE Members:</strong> Free participation
              </li>
              <li>
                <strong>Conference Attendees:</strong> ₹500 for WIE events
              </li>
              <li>
                <strong>WIE Networking Lunch:</strong> ₹800 per person
              </li>
              <li>
                <strong>Registration Deadline:</strong> June 15, 2026
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
            <h3>How to Register</h3>
            <ol>
              <li>Complete conference registration</li>
              <li>Select WIE events during registration</li>
              <li>Provide IEEE WIE membership details</li>
              <li>Confirm participation by email</li>
            </ol>
          </div>
        </div>
      </section>

      <section>
        <h2>WIE Statistics & Impact</h2>
        <div
          style={{
            backgroundColor: "#fff3cd",
            padding: "20px",
            borderRadius: "8px",
          }}
        >
          <h3>Our Commitment to Diversity</h3>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "15px",
              marginTop: "15px",
            }}
          >
            <div style={{ textAlign: "center", padding: "10px" }}>
              <h4 style={{ color: "#813c54", fontSize: "24px" }}>35%</h4>
              <p>Women speakers at SeFet 2026</p>
            </div>
            <div style={{ textAlign: "center", padding: "10px" }}>
              <h4 style={{ color: "#9932cc", fontSize: "24px" }}>₹50,000</h4>
              <p>WIE travel grant fund</p>
            </div>
            <div style={{ textAlign: "center", padding: "10px" }}>
              <h4 style={{ color: "#dc143c", fontSize: "24px" }}>25+</h4>
              <p>Women mentors available</p>
            </div>
            <div style={{ textAlign: "center", padding: "10px" }}>
              <h4 style={{ color: "#ff69b4", fontSize: "24px" }}>200+</h4>
              <p>Expected WIE participants</p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h2>Contact Information</h2>
        <div
          style={{
            backgroundColor: "#faf0f5",
            padding: "20px",
            borderRadius: "8px",
          }}
        >
          <h3>WIE Committee</h3>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: "20px",
            }}
          >
            <div>
              <h4>WIE Chair</h4>
              <p>
                <strong>Dr. Kavita Mehta</strong>
                <br />
                Email: wie@sefet2026.org
                <br />
                Phone: +91-712-2801260
              </p>
            </div>
            <div>
              <h4>WIE Student Coordinator</h4>
              <p>
                <strong>Ms. Pooja Agarwal</strong>
                <br />
                Email: wie-students@sefet2026.org
                <br />
                Phone: +91-712-2801261
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
