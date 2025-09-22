"use client";

import React from "react";

const ConferenceInfo: React.FC = () => {
  return (
    <section className="max-w-5xl mx-auto px-6 py-0 space-y-0">
      <h1 className="text-4xl font-bold text-center text-gray-900">
        SeFeT 2025 Conference
      </h1>

      {/* Venue & Contact */}
      <div className="bg-gray-50 p-8 rounded-xl shadow-md space-y-6">
        <h2 className="text-2xl font-semibold text-gray-800">
          Venue & Contact
        </h2>
        <p className="text-gray-700">
          <span className="font-semibold">Email:</span> ieeesefet2026@vnit.ac.in
        </p>
        <p className="text-gray-700">
          <span className="font-semibold">Address:</span> Visvesvaraya National
          Institute of Technology Nagpur, South Ambazari Road, Nagpur,
          Maharashtra. Pin 440010, India
        </p>

        {/* Google Map */}
        <div className="mt-6 w-full h-72 rounded-lg overflow-hidden shadow-inner">
          <iframe
            title="VNIT Nagpur Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3750.7967250403867!2d79.0670720750916!3d21.14585318594832!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4c9e0f5cb9c27%3A0x7fdb7a2adbbf1aa!2sVisvesvaraya%20National%20Institute%20of%20Technology%2C%20Nagpur!5e0!3m2!1sen!2sin!4v1695431032912!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>

      {/* General Chairs */}
      <div className="bg-gray-50 p-8 rounded-xl shadow-md space-y-4">
        <h2 className="text-2xl font-semibold text-gray-800">
          General Chairs (SeFeT 2025)
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>Prof. Madhuri Chaudhuri (VNIT)</li>
          <li>Prof. Biplab Sikdar (NUS Singapore)</li>
        </ul>
      </div>
    </section>
  );
};

export default ConferenceInfo;
