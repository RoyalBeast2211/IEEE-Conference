"use client";

import React from "react";

type CommitteeSection = {
  title: string;
  members?: string[];
  subsections?: CommitteeSection[];
};

const committeeData: CommitteeSection[] = [
  {
    title: "Chief Patron",
    members: ["Shri. Madabhushi Madan Gopal (BoG Chairman, VNIT Nagpur)"],
  },
  { title: "Patron", members: ["Prof. P.L. Patel (Director, VNIT Nagpur)"] },
  {
    title: "Honorary Chairs",
    members: [
      "Prof. Ayman EL-Refaie (President, IEEE, IAS)",
      "Prof. Johan Enslin (President, IEEE, PELS)",
      "Prof. Juan José Rodríguez-Andina (President Elect, IEEE, IES)",
      "Prof. Shay Bahramirad (President, IEEE, PES)",
      "Prof. Akshay Rathore (NUS Singapore)",
    ],
  },
  {
    title: "General Chair",
    members: [
      "Prof. Madhuri Chaudhuri (VNIT)",
      "Prof. Biplab Sikdar (NUS Singapore)",
    ],
  },
  {
    title: "Organizing Chair",
    members: ["Dr. Arghya Mitra (VNIT)", "Dr. Siba Kumar Patro (IIT Roorkee)"],
  },
  {
    title: "Conference Secretaries",
    members: ["Dr. Soumyabrata Das (VNIT)", "Dr. Sunanda Sinha (MNIT Jaipur)"],
  },
  {
    title: "Finance Chair",
    members: ["Dr. Ritesh Kumar Keshri (VNIT)", "Dr. Makrand Lokhande (VNIT)"],
  },
  {
    title: "TPC Chairs",
    members: [
      "Dr. Ramsha Karampuri (VNIT)",
      "Dr. Ashwin Dhabale (VNIT)",
      "Dr. Chirodeep Bakli (IIT Kharagpur)",
      "Dr. Avineet Kumar (IIT Patna)",
      "Dr. Binod K. Bussa (IIT Patna)",
      "Dr. Anurag Sharma (Newcastle University)",
      "Dr. Akhilesh Mathur (MNIT Jaipur)",
      "Dr. Amritesh Kumar (NIT Silchar)",
      "Dr. Manoj Debnath (SoA, Bhubaneswar)",
      "Dr. Srinivas Karanki (IIT BBS)",
    ],
  },
  {
    title: "Publication Chair",
    members: [
      "Dr. Manoj Debnath (SoA, Bhubaneswar)",
      "Dr. Jawaharlal Bhukya (VNIT)",
    ],
  },
  {
    title: "Plenary Chair",
    members: [
      "Prof. M.S. Ballal (VNIT)",
      "Prof. Phaneendra Babu Bobba (GRIET)",
      "Sivanesan Balakrishnan (SIT Singapore)",
    ],
  },
  {
    title: "Tutorial and Workshop Chairs",
    members: ["Prof. M. R. Ramteke (VNIT)", "Prof. Vinod Khadkikar (KU, UAE)"],
  },
  {
    title: "Industry Interaction and Sponsorship Chairs",
    members: [
      "Dr. Aneesh Prabhakar (MNIT Jaipur)",
      "Dr. Kapil Pareek (MNIT Jaipur)",
      "Dr. Kalpana Ramesh (NIT Surathkal)",
      "Dr. Pradyumn Chaturvedi (VNIT)",
      "Prof. Sunil Bhat (VNIT)",
    ],
  },
  {
    title: "Student Activity & Award Chair",
    members: [
      "Dr. Kapil Chauhan (MNNIT Allahabad)",
      "Dr. Mohd Alam (VNIT)",
      "Narendrababu A. (VNIT)",
    ],
  },
  {
    title: "WIE Chair",
    members: [
      "Dr. Asha Rani (NIT Silchar)",
      "Dr. Deepti Saxena (MNIT Jaipur)",
      "Prof. N. R. Patne (VNIT)",
      "Prof. Tripta Thakur (NPTI, MANIT Bhopal)",
    ],
  },
  {
    title: "Hospitality Chairs (All VNIT)",
    subsections: [
      {
        title: "Logistic and Travel Arrangement",
        members: ["Dr. Ashwin Dhabale", "Dr. Bhooshan Rajpathak"],
      },
      { title: "Fooding", members: ["Dr. R.J. Satputaley", "Dr. S.K. Raju"] },
      {
        title: "Accommodation (Guest)",
        members: ["Prof. V.S. Kale", "Dr. Joydeep Sengupta"],
      },
      { title: "Accommodation (Student)", members: ["Dr. Gaurav Mishra"] },
      {
        title: "Registration Committee",
        members: ["Dr. Jayprakash Singh", "Dr. Avisha Tah"],
      },
      {
        title: "Stage Committee",
        members: ["Prof. Nita Patne", "Dr. A. Mitra"],
      },
      {
        title: "Printing and Designing Committee",
        members: ["Dr. Mohd Alam", "Dr. K. Raju"],
      },
    ],
  },
  {
    title: "Publicity Chair",
    members: [
      "Prof. Dheeman Chatterjee (IIT Kharagpur)",
      "Prof. Subhojit Ghosh (NIT Raipur)",
      "Dr. Subho Paul (IIT BHU)",
      "Prof. P.S. Kulkarni (VNIT)",
      "Dr. Padmini Singh (IIT Jammu)",
      "Dr. Biman Saharoy (NIT Durgapur)",
      "Dr. Jiwanjot Singh (NIT Hamirpur)",
      "Dr. Sukriti Tiwari (NIT Calicut)",
      "Dr. Dipanshu Naware (NIT Trichy)",
      "Dr. Raghavendra Naik (NIT Jamshedpur)",
      "Dr. Altaf Badar (NIT Warangal)",
      "Dr. Souvik Ganguli (TIET Patiala)",
      "Dr. Manish Kumar (HPU Shimla)",
      "Dr. Prashant Malik (Swaniti Global)",
      "Selish Satyam (NIT Trichy)",
      "Ashwini (NIT Manipur)",
      "D. Govind (NIT Delhi)",
      "Supriya Jaiswal (NIT Hamirpur)",
      "Siddharth Sabyachachi",
      "Rajashekar",
      "Amrendra (CU, Karnataka)",
      "Kusum Lata Aggarwal (Karnavati University)",
      "Siddharth Singh Chauhan (Nirma University)",
    ],
  },
  {
    title: "Special Session Chair",
    members: ["Dr. Ravita Lamba (IIT Roorkee)", "Dr. Narendrababu A. (VNIT)"],
  },
  {
    title: "Steering Committee Chair",
    members: ["Dr. Sunanda Sinha (MNIT Jaipur)"],
  },
  {
    title: "Website Chairs",
    members: ["Dr. Poonam Sharma (VNIT)", "Dr. Gaurav Mishra (VNIT)"],
  },
  {
    title: "National Advisory Committee",
    members: [
      "Prof. Rangan Banerjee (IIT Delhi)",
      "Prof. K. Gopakumar (IISc Bangalore)",
      "Prof. Chandan Chakraborty (IIT Kharagpur)",
      "Prof. Kishore Chatterjee (IIT Bombay)",
      "Prof. Krishna Vasudevan (IIT Madras)",
      "Prof. S.N. Singh (IIT Kanpur)",
      "Prof. B.K. Panigrahi (IIT Delhi)",
      "Prof. H.M. Suryawanshi (VNIT)",
      "Prof. M.V. Aware (NIT Arunachal Pradesh)",
      "Prof. V.B. Borghate (VNIT)",
      "Prof. B.S. Umre (VNIT)",
      "Prof. Tripta Thakur (NPTI, MANIT Bhopal)",
    ],
  },
  {
    title: "International Advisory Committee",
    members: [
      "Prof. Akshay Rathore (SIT Singapore)",
      "Prof. Giuseppe Buja (University of Padova, Italy)",
      "Prof. Andew M Knight (University of Calgary, Canada)",
      "Prof. Alberto Borghetti (University of Bologna, Italy)",
      "Dr. Subhashish Bhattacharya (NC State University, USA)",
      "Prof. Kashem Muttaqui (Australia)",
      "Prof. Kouki Matsuse (Meiji University, Japan)",
      "Prof. Lalit Goel (NTU Singapore)",
      "Prof. Tapas Mallick (University of Exeter, UK)",
      "Prof. Hemanshu R. Pota (UNSW Australia)",
    ],
  },
];

const CommitteeItem: React.FC<{ section: CommitteeSection }> = ({
  section,
}) => (
  <div className="mb-6">
    <h3 className="text-lg font-semibold text-gray-800 mb-1">
      {section.title}
    </h3>
    {section.members && (
      <ul className="list-disc list-inside text-gray-700 space-y-1">
        {section.members.map((member, idx) => (
          <li key={idx}>{member}</li>
        ))}
      </ul>
    )}
    {section.subsections &&
      section.subsections.map((sub, idx) => (
        <div key={idx} className="ml-4">
          <CommitteeItem section={sub} />
        </div>
      ))}
  </div>
);

const Committee: React.FC = () => {
  return (
    <section className="max-w-6xl mx-auto px-6 py-10">
      <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
        Conference Committee
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
        {committeeData.map((section, index) => (
          <CommitteeItem key={index} section={section} />
        ))}
      </div>
    </section>
  );
};

export default Committee;
