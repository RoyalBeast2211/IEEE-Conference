import React from "react";

export default function AccommodationPage() {
  return (
    <div className="container">
      <h1>Accommodation</h1>
      <p>
        We have arranged comfortable accommodation options near VNIT Nagpur for
        conference attendees at special rates.
      </p>

      <section>
        <h2>Recommended Hotels</h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
            gap: "20px",
            margin: "20px 0",
          }}
        >
          <div
            style={{
              border: "1px solid #ddd",
              padding: "20px",
              borderRadius: "8px",
            }}
          >
            <h3>Hotel Ashoka (5-Star)</h3>
            <p>
              <strong>Distance:</strong> 2.5 km from VNIT
            </p>
            <p>
              <strong>Conference Rate:</strong> ₹4,500/night
            </p>
            <p>
              <strong>Regular Rate:</strong> ₹6,000/night
            </p>
            <p>
              <strong>Amenities:</strong> Wi-Fi, AC, Restaurant, Parking
            </p>
            <p>
              <strong>Contact:</strong> +91-712-2345678
            </p>
          </div>

          <div
            style={{
              border: "1px solid #ddd",
              padding: "20px",
              borderRadius: "8px",
            }}
          >
            <h3>Radisson Blu (5-Star)</h3>
            <p>
              <strong>Distance:</strong> 3.2 km from VNIT
            </p>
            <p>
              <strong>Conference Rate:</strong> ₹5,200/night
            </p>
            <p>
              <strong>Regular Rate:</strong> ₹7,000/night
            </p>
            <p>
              <strong>Amenities:</strong> Pool, Gym, Spa, Business Center
            </p>
            <p>
              <strong>Contact:</strong> +91-712-3456789
            </p>
          </div>

          <div
            style={{
              border: "1px solid #ddd",
              padding: "20px",
              borderRadius: "8px",
            }}
          >
            <h3>Hotel Centre Point (4-Star)</h3>
            <p>
              <strong>Distance:</strong> 1.8 km from VNIT
            </p>
            <p>
              <strong>Conference Rate:</strong> ₹3,200/night
            </p>
            <p>
              <strong>Regular Rate:</strong> ₹4,200/night
            </p>
            <p>
              <strong>Amenities:</strong> Wi-Fi, Restaurant, 24/7 Service
            </p>
            <p>
              <strong>Contact:</strong> +91-712-4567890
            </p>
          </div>

          <div
            style={{
              border: "1px solid #ddd",
              padding: "20px",
              borderRadius: "8px",
            }}
          >
            <h3>Tuli Imperial (4-Star)</h3>
            <p>
              <strong>Distance:</strong> 2.1 km from VNIT
            </p>
            <p>
              <strong>Conference Rate:</strong> ₹2,800/night
            </p>
            <p>
              <strong>Regular Rate:</strong> ₹3,800/night
            </p>
            <p>
              <strong>Amenities:</strong> Restaurant, Conference Rooms, Parking
            </p>
            <p>
              <strong>Contact:</strong> +91-712-5678901
            </p>
          </div>
        </div>
      </section>

      <section>
        <h2>Budget Options</h2>
        <div
          style={{
            backgroundColor: "#f8f9fa",
            padding: "20px",
            borderRadius: "8px",
          }}
        >
          <h3>VNIT Guest House</h3>
          <p>
            <strong>Distance:</strong> On Campus
          </p>
          <p>
            <strong>Conference Rate:</strong> ₹1,200/night
          </p>
          <p>
            <strong>Amenities:</strong> Basic accommodation, Wi-Fi, Dining Hall
          </p>
          <p>
            <strong>Note:</strong> Limited availability, early booking
            recommended
          </p>
        </div>
      </section>

      <section>
        <h2>Booking Information</h2>
        <div
          style={{
            backgroundColor: "#e7f3ff",
            padding: "20px",
            borderRadius: "8px",
            margin: "20px 0",
          }}
        >
          <h3>How to Book</h3>
          <ol>
            <li>
              Contact hotels directly and mention "IEEE SeFet 2026" for special
              rates
            </li>
            <li>
              Provide conference registration confirmation for rate validation
            </li>
            <li>
              Book early as availability is limited during conference dates
            </li>
            <li>Check cancellation policies before booking</li>
          </ol>
        </div>

        <div>
          <h3>Important Dates</h3>
          <ul>
            <li>
              <strong>Conference Dates:</strong> June 24-26, 2026
            </li>
            <li>
              <strong>Check-in:</strong> June 23, 2026 (recommended)
            </li>
            <li>
              <strong>Check-out:</strong> June 27, 2026
            </li>
            <li>
              <strong>Rate Valid Until:</strong> May 15, 2026
            </li>
          </ul>
        </div>
      </section>

      <section>
        <h2>Transportation</h2>
        <ul>
          <li>
            <strong>From Airport:</strong> Dr. Babasaheb Ambedkar International
            Airport (35 km)
          </li>
          <li>
            <strong>From Railway Station:</strong> Nagpur Junction (8 km)
          </li>
          <li>
            <strong>Local Transport:</strong> Auto-rickshaws, Taxi, Bus services
            available
          </li>
          <li>
            <strong>Conference Shuttle:</strong> Available from selected hotels
          </li>
        </ul>
      </section>
    </div>
  );
}
