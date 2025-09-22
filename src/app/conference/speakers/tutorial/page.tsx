import React from "react";

export default function TutorialSpeakersPage() {
  return (
    <div className="container">
      <h1>Tutorial Speakers</h1>
      <p>
        Learn from industry experts and academic leaders through comprehensive
        tutorials covering the latest advances in sustainable energy and
        electric transportation.
      </p>

      <section>
        <h2>Confirmed Tutorial Speakers</h2>

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
              border: "2px solid #00629b",
              padding: "25px",
              borderRadius: "10px",
              backgroundColor: "#f0f8ff",
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
                <h3 style={{ color: "#00629b", marginBottom: "5px" }}>
                  Prof. Michael Zhang
                </h3>
                <p
                  style={{
                    fontWeight: "bold",
                    color: "#666",
                    marginBottom: "10px",
                  }}
                >
                  Stanford University, USA
                </p>
                <p style={{ fontSize: "14px", marginBottom: "15px" }}>
                  <strong>Tutorial:</strong> "Advanced Battery Management
                  Systems for Electric Vehicles"
                </p>
                <p style={{ fontSize: "13px", color: "#555" }}>
                  Expert in energy storage systems with 20+ years of experience.
                  Former Tesla battery technology lead.
                </p>
                <div style={{ marginTop: "10px", fontSize: "12px" }}>
                  <strong>Duration:</strong> 6 hours | <strong>Date:</strong>{" "}
                  June 24, 2026
                </div>
              </div>
            </div>
          </div>

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
                  Dr. Sarah Johnson
                </h3>
                <p
                  style={{
                    fontWeight: "bold",
                    color: "#666",
                    marginBottom: "10px",
                  }}
                >
                  MIT, USA
                </p>
                <p style={{ fontSize: "14px", marginBottom: "15px" }}>
                  <strong>Tutorial:</strong> "Machine Learning for Smart Grid
                  Optimization"
                </p>
                <p style={{ fontSize: "13px", color: "#555" }}>
                  Leading researcher in AI applications for power systems.
                  Author of 150+ publications in top-tier journals.
                </p>
                <div style={{ marginTop: "10px", fontSize: "12px" }}>
                  <strong>Duration:</strong> 4 hours | <strong>Date:</strong>{" "}
                  June 25, 2026
                </div>
              </div>
            </div>
          </div>

          <div
            style={{
              border: "2px solid #2e8b57",
              padding: "25px",
              borderRadius: "10px",
              backgroundColor: "#f0fff0",
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
                <h3 style={{ color: "#2e8b57", marginBottom: "5px" }}>
                  Prof. Rajesh Gupta
                </h3>
                <p
                  style={{
                    fontWeight: "bold",
                    color: "#666",
                    marginBottom: "10px",
                  }}
                >
                  IIT Delhi, India
                </p>
                <p style={{ fontSize: "14px", marginBottom: "15px" }}>
                  <strong>Tutorial:</strong> "Power Electronics for Electric
                  Vehicle Charging"
                </p>
                <p style={{ fontSize: "13px", color: "#555" }}>
                  Renowned expert in power electronics and EV charging
                  infrastructure. IEEE Fellow and consultant for major
                  automotive companies.
                </p>
                <div style={{ marginTop: "10px", fontSize: "12px" }}>
                  <strong>Duration:</strong> 5 hours | <strong>Date:</strong>{" "}
                  June 26, 2026
                </div>
              </div>
            </div>
          </div>

          <div
            style={{
              border: "2px solid #8b4513",
              padding: "25px",
              borderRadius: "10px",
              backgroundColor: "#fff8dc",
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
                <h3 style={{ color: "#8b4513", marginBottom: "5px" }}>
                  Dr. Elena Rodriguez
                </h3>
                <p
                  style={{
                    fontWeight: "bold",
                    color: "#666",
                    marginBottom: "10px",
                  }}
                >
                  Technical University of Munich, Germany
                </p>
                <p style={{ fontSize: "14px", marginBottom: "15px" }}>
                  <strong>Tutorial:</strong> "Renewable Energy Integration in
                  Microgrids"
                </p>
                <p style={{ fontSize: "13px", color: "#555" }}>
                  Leading authority on renewable energy systems and grid
                  integration. EU Horizon 2020 project coordinator.
                </p>
                <div style={{ marginTop: "10px", fontSize: "12px" }}>
                  <strong>Duration:</strong> 4 hours | <strong>Date:</strong>{" "}
                  June 24, 2026
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h2>Tutorial Schedule</h2>
        <div
          style={{
            backgroundColor: "#f8f9fa",
            padding: "20px",
            borderRadius: "8px",
            margin: "20px 0",
          }}
        >
          <h3>Day 1 - June 24, 2026</h3>
          <div style={{ marginLeft: "20px" }}>
            <p>
              <strong>Morning Session (9:00 AM - 12:00 PM)</strong>
            </p>
            <ul>
              <li>
                Tutorial 1: "Renewable Energy Integration in Microgrids" - Dr.
                Elena Rodriguez
              </li>
              <li>
                Tutorial 2: "Advanced Battery Management Systems" (Part 1) -
                Prof. Michael Zhang
              </li>
            </ul>
            <p>
              <strong>Afternoon Session (2:00 PM - 6:00 PM)</strong>
            </p>
            <ul>
              <li>
                Tutorial 2: "Advanced Battery Management Systems" (Part 2) -
                Prof. Michael Zhang
              </li>
            </ul>
          </div>

          <h3>Day 2 - June 25, 2026</h3>
          <div style={{ marginLeft: "20px" }}>
            <p>
              <strong>Afternoon Session (2:00 PM - 6:00 PM)</strong>
            </p>
            <ul>
              <li>
                Tutorial 3: "Machine Learning for Smart Grid Optimization" - Dr.
                Sarah Johnson
              </li>
            </ul>
          </div>

          <h3>Day 3 - June 26, 2026</h3>
          <div style={{ marginLeft: "20px" }}>
            <p>
              <strong>Morning Session (9:00 AM - 2:00 PM)</strong>
            </p>
            <ul>
              <li>
                Tutorial 4: "Power Electronics for Electric Vehicle Charging" -
                Prof. Rajesh Gupta
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section>
        <h2>Tutorial Details</h2>
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
            <h3>Who Should Attend</h3>
            <ul>
              <li>Graduate students and PhD researchers</li>
              <li>Industry professionals and engineers</li>
              <li>Academic faculty and research scientists</li>
              <li>Technology managers and consultants</li>
              <li>Startup entrepreneurs and innovators</li>
            </ul>
          </div>

          <div
            style={{
              border: "1px solid #ddd",
              padding: "20px",
              borderRadius: "8px",
            }}
          >
            <h3>What You'll Learn</h3>
            <ul>
              <li>Latest technological advancements</li>
              <li>Practical implementation strategies</li>
              <li>Industry best practices and standards</li>
              <li>Hands-on experience with tools</li>
              <li>Future research directions</li>
            </ul>
          </div>

          <div
            style={{
              border: "1px solid #ddd",
              padding: "20px",
              borderRadius: "8px",
            }}
          >
            <h3>Tutorial Materials</h3>
            <ul>
              <li>Comprehensive slide presentations</li>
              <li>Software tools and simulation models</li>
              <li>Reference materials and readings</li>
              <li>Code examples and datasets</li>
              <li>Certificate of participation</li>
            </ul>
          </div>
        </div>
      </section>

      <section>
        <h2>Registration Information</h2>
        <div
          style={{
            backgroundColor: "#e7f3ff",
            padding: "20px",
            borderRadius: "8px",
          }}
        >
          <h3>Tutorial Registration Fees</h3>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "15px",
              marginTop: "15px",
            }}
          >
            <div
              style={{
                textAlign: "center",
                padding: "15px",
                border: "1px solid #00629b",
                borderRadius: "5px",
              }}
            >
              <h4>IEEE Members</h4>
              <p
                style={{
                  fontSize: "18px",
                  fontWeight: "bold",
                  color: "#00629b",
                }}
              >
                ₹3,000
              </p>
              <p style={{ fontSize: "12px" }}>per tutorial</p>
            </div>
            <div
              style={{
                textAlign: "center",
                padding: "15px",
                border: "1px solid #666",
                borderRadius: "5px",
              }}
            >
              <h4>Non-IEEE Members</h4>
              <p
                style={{ fontSize: "18px", fontWeight: "bold", color: "#666" }}
              >
                ₹4,000
              </p>
              <p style={{ fontSize: "12px" }}>per tutorial</p>
            </div>
            <div
              style={{
                textAlign: "center",
                padding: "15px",
                border: "1px solid #813c54",
                borderRadius: "5px",
              }}
            >
              <h4>Students</h4>
              <p
                style={{
                  fontSize: "18px",
                  fontWeight: "bold",
                  color: "#813c54",
                }}
              >
                ₹1,500
              </p>
              <p style={{ fontSize: "12px" }}>per tutorial</p>
            </div>
          </div>

          <div
            style={{
              marginTop: "20px",
              padding: "15px",
              backgroundColor: "#fff3cd",
              borderRadius: "5px",
            }}
          >
            <p>
              <strong>Note:</strong> Tutorial registration is separate from
              conference registration. Conference attendees receive a 20%
              discount on tutorial fees.
            </p>
          </div>
        </div>
      </section>

      <section>
        <h2>Contact Information</h2>
        <div
          style={{
            backgroundColor: "#f0fff0",
            padding: "20px",
            borderRadius: "8px",
          }}
        >
          <h3>Tutorial Coordination</h3>
          <p>
            <strong>Prof. Suresh Patil</strong>
            <br />
            Tutorial Chair
            <br />
            Email: tutorials@sefet2026.org
            <br />
            Phone: +91-712-2801241
          </p>

          <p>
            <strong>Dr. Kavita Sharma</strong>
            <br />
            Tutorial Co-Chair
            <br />
            Email: tutorials@sefet2026.org
            <br />
            Phone: +91-712-2801242
          </p>
        </div>
      </section>
    </div>
  );
}
