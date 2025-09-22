import React from "react";
import Image from "next/image";

export const Banner: React.FC = () => {
  return (
    <div className="relative w-full max-w-[1000px] mx-auto overflow-hidden  ">
      <Image
        src="/assets/banner.jpg"
        alt="IEEE SeFet 2026 Conference Banner"
        width={1000} // set actual width of your banner image
        height={400} // set actual height of your banner image
        className="w-full h-auto"
        priority
        style={{
          objectFit: "contain",
        }}
      />
    </div>
  );
};
