import React from "react";
import Image from "next/image";

const partners = [
  {
    name: "IEEE",
    logo: "/assets/partners/ieee.png",
    url: "https://www.ieee.org/",
  },
  {
    name: "pels",
    logo: "/assets/partners/red.png",
    url: "https://www.ieee-pels.org/",
  },
  {
    name: "VNIT",
    logo: "/assets/partners/vnit.png",
    url: "http://vnit.ac.in/",
  },
  {
    name: "IAS",
    logo: "/assets/partners/ias.png",
    url: "https://www.ieee-ias.org/",
  },
  {
    name: "Electrons",
    logo: "/assets/partners/electrons.png",
    url: "https://www.ieee-ies.org/",
  },
  {
    name: "PES",
    logo: "/assets/partners/pes.png",
    url: "https://www.ieee-pes.org/",
  },
];

export const Partners: React.FC = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-xl sm:text-2xl font-bold text-center mb-6">
          Partners
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 items-center justify-items-center">
          {partners.map((partner, index) => (
            <a
              key={index}
              href={partner.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block hover:scale-105 transition-transform duration-200"
            >
              <div className="h-24 w-40 flex items-center justify-center">
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={160}
                  height={80}
                  className={`max-h-full max-w-full object-contain ${
                    partner.name === "PES" ? "scale-300" : ""
                  }`}
                />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
