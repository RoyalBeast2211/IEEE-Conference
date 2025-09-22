import React from "react";

export default function SponsorsPage() {
  return (
    <div className="container">
      <h1>Our Sponsors</h1>
      <p>
        We gratefully acknowledge the support of our sponsors who make IEEE
        SeFet 2026 possible through their generous contributions.
      </p>

      <section>
        <h2>Platinum Sponsors</h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "30px",
            margin: "30px 0",
            padding: "20px",
            backgroundColor: "#fffbf0",
            borderRadius: "10px",
          }}
        >
          <div
            style={{
              textAlign: "center",
              padding: "20px",
              border: "2px solid #ffd700",
              borderRadius: "8px",
              backgroundColor: "white",
            }}
          >
            <div
              style={{
                height: "100px",
                backgroundColor: "#f0f0f0",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "15px",
                borderRadius: "5px",
              }}
            >
              <strong>Tesla Energy</strong>
            </div>
            <h3>Tesla Energy</h3>
            <p>
              Leading sustainable energy solutions and electric vehicle
              technology
            </p>
          </div>
          <div
            style={{
              textAlign: "center",
              padding: "20px",
              border: "2px solid #ffd700",
              borderRadius: "8px",
              backgroundColor: "white",
            }}
          >
            <div
              style={{
                height: "100px",
                backgroundColor: "#f0f0f0",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "15px",
                borderRadius: "5px",
              }}
            >
              <strong>Siemens Energy</strong>
            </div>
            <h3>Siemens Energy</h3>
            <p>Transforming energy systems for a sustainable future</p>
          </div>
        </div>
      </section>

      <section>
        <h2>Gold Sponsors</h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "25px",
            margin: "30px 0",
            padding: "20px",
            backgroundColor: "#f8f8f8",
            borderRadius: "10px",
          }}
        >
          <div
            style={{
              textAlign: "center",
              padding: "15px",
              border: "2px solid #c0c0c0",
              borderRadius: "8px",
              backgroundColor: "white",
            }}
          >
            <div
              style={{
                height: "80px",
                backgroundColor: "#f0f0f0",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "10px",
                borderRadius: "5px",
              }}
            >
              <strong>ABB India</strong>
            </div>
            <h4>ABB India</h4>
            <p>Power and automation technologies</p>
          </div>
          <div
            style={{
              textAlign: "center",
              padding: "15px",
              border: "2px solid #c0c0c0",
              borderRadius: "8px",
              backgroundColor: "white",
            }}
          >
            <div
              style={{
                height: "80px",
                backgroundColor: "#f0f0f0",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "10px",
                borderRadius: "5px",
              }}
            >
              <strong>Tata Power</strong>
            </div>
            <h4>Tata Power</h4>
            <p>Integrated power company</p>
          </div>
          <div
            style={{
              textAlign: "center",
              padding: "15px",
              border: "2px solid #c0c0c0",
              borderRadius: "8px",
              backgroundColor: "white",
            }}
          >
            <div
              style={{
                height: "80px",
                backgroundColor: "#f0f0f0",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "10px",
                borderRadius: "5px",
              }}
            >
              <strong>Schneider Electric</strong>
            </div>
            <h4>Schneider Electric</h4>
            <p>Digital transformation of energy management</p>
          </div>
        </div>
      </section>

      <section>
        <h2>Silver Sponsors</h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "20px",
            margin: "30px 0",
            padding: "20px",
            backgroundColor: "#fdf5f0",
            borderRadius: "10px",
          }}
        >
          <div
            style={{
              textAlign: "center",
              padding: "15px",
              border: "1px solid #cd7f32",
              borderRadius: "8px",
              backgroundColor: "white",
            }}
          >
            <div
              style={{
                height: "60px",
                backgroundColor: "#f0f0f0",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "10px",
                borderRadius: "5px",
              }}
            >
              <strong>BHEL</strong>
            </div>
            <h5>BHEL</h5>
          </div>
          <div
            style={{
              textAlign: "center",
              padding: "15px",
              border: "1px solid #cd7f32",
              borderRadius: "8px",
              backgroundColor: "white",
            }}
          >
            <div
              style={{
                height: "60px",
                backgroundColor: "#f0f0f0",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "10px",
                borderRadius: "5px",
              }}
            >
              <strong>L&T Energy</strong>
            </div>
            <h5>L&T Energy</h5>
          </div>
          <div
            style={{
              textAlign: "center",
              padding: "15px",
              border: "1px solid #cd7f32",
              borderRadius: "8px",
              backgroundColor: "white",
            }}
          >
            <div
              style={{
                height: "60px",
                backgroundColor: "#f0f0f0",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "10px",
                borderRadius: "5px",
              }}
            >
              <strong>Mahindra Electric</strong>
            </div>
            <h5>Mahindra Electric</h5>
          </div>
          <div
            style={{
              textAlign: "center",
              padding: "15px",
              border: "1px solid #cd7f32",
              borderRadius: "8px",
              backgroundColor: "white",
            }}
          >
            <div
              style={{
                height: "60px",
                backgroundColor: "#f0f0f0",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "10px",
                borderRadius: "5px",
              }}
            >
              <strong>Exide Industries</strong>
            </div>
            <h5>Exide Industries</h5>
          </div>
        </div>
      </section>

      <section>
        <h2>Bronze Sponsors</h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
            gap: "15px",
            margin: "30px 0",
            padding: "20px",
            backgroundColor: "#f0f8ff",
            borderRadius: "10px",
          }}
        >
          <div
            style={{
              textAlign: "center",
              padding: "10px",
              border: "1px solid #4169e1",
              borderRadius: "5px",
              backgroundColor: "white",
            }}
          >
            <div
              style={{
                height: "50px",
                backgroundColor: "#f0f0f0",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "8px",
                borderRadius: "3px",
                fontSize: "12px",
              }}
            >
              <strong>Hero Electric</strong>
            </div>
          </div>
          <div
            style={{
              textAlign: "center",
              padding: "10px",
              border: "1px solid #4169e1",
              borderRadius: "5px",
              backgroundColor: "white",
            }}
          >
            <div
              style={{
                height: "50px",
                backgroundColor: "#f0f0f0",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "8px",
                borderRadius: "3px",
                fontSize: "12px",
              }}
            >
              <strong>Ather Energy</strong>
            </div>
          </div>
          <div
            style={{
              textAlign: "center",
              padding: "10px",
              border: "1px solid #4169e1",
              borderRadius: "5px",
              backgroundColor: "white",
            }}
          >
            <div
              style={{
                height: "50px",
                backgroundColor: "#f0f0f0",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "8px",
                borderRadius: "3px",
                fontSize: "12px",
              }}
            >
              <strong>Ola Electric</strong>
            </div>
          </div>
          <div
            style={{
              textAlign: "center",
              padding: "10px",
              border: "1px solid #4169e1",
              borderRadius: "5px",
              backgroundColor: "white",
            }}
          >
            <div
              style={{
                height: "50px",
                backgroundColor: "#f0f0f0",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "8px",
                borderRadius: "3px",
                fontSize: "12px",
              }}
            >
              <strong>TVS Motor</strong>
            </div>
          </div>
          <div
            style={{
              textAlign: "center",
              padding: "10px",
              border: "1px solid #4169e1",
              borderRadius: "5px",
              backgroundColor: "white",
            }}
          >
            <div
              style={{
                height: "50px",
                backgroundColor: "#f0f0f0",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "8px",
                borderRadius: "3px",
                fontSize: "12px",
              }}
            >
              <strong>Sun Mobility</strong>
            </div>
          </div>
          <div
            style={{
              textAlign: "center",
              padding: "10px",
              border: "1px solid #4169e1",
              borderRadius: "5px",
              backgroundColor: "white",
            }}
          >
            <div
              style={{
                height: "50px",
                backgroundColor: "#f0f0f0",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "8px",
                borderRadius: "3px",
                fontSize: "12px",
              }}
            >
              <strong>Amara Raja</strong>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h2>Institutional Partners</h2>
        <div
          style={{
            backgroundColor: "#f9f9f9",
            padding: "20px",
            borderRadius: "8px",
            margin: "20px 0",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "15px",
            }}
          >
            <div style={{ textAlign: "center" }}>
              <h4>IEEE</h4>
              <p>Institute of Electrical and Electronics Engineers</p>
            </div>
            <div style={{ textAlign: "center" }}>
              <h4>IEEE PES</h4>
              <p>Power & Energy Society</p>
            </div>
            <div style={{ textAlign: "center" }}>
              <h4>IEEE IAS</h4>
              <p>Industry Applications Society</p>
            </div>
            <div style={{ textAlign: "center" }}>
              <h4>VNIT Nagpur</h4>
              <p>Visvesvaraya National Institute of Technology</p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h2>Become a Sponsor</h2>
        <div
          style={{
            backgroundColor: "#e7f3ff",
            padding: "20px",
            borderRadius: "8px",
          }}
        >
          <p>
            Interested in sponsoring IEEE SeFet 2026? We offer various
            sponsorship packages to meet your marketing objectives and budget.
          </p>
          <p>
            <strong>Contact:</strong> sponsorship@sefet2026.org |
            +91-712-2801234
          </p>
        </div>
      </section>
    </div>
  );
}
