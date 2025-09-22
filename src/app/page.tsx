import React from "react";
import { Banner } from "@/components/Banner";
import { Partners } from "@/components/Partners";
import ImportantDatesSection from "@/components/home/important_dates";
import WelcomeSection from "@/components/home/main";
import RegularTracksSection from "@/components/home/tracks";

export default function HomePage() {
  return (
    <div className="flex flex-col gap-8 sm:gap-6 pt-0 sm:pt-0">
      {/* Banner Section */}
      <div className="px-4 sm:px-2">
        <Banner />
      </div>

      {/* Main Content */}
      <div className="max-w-[1000px] w-full mx-auto px-[var(--container-padding)]">
        <WelcomeSection />
        <hr className="border-gray-300 my-6" />
        <ImportantDatesSection />
        <hr className="border-gray-300 my-6" />
        <RegularTracksSection />
        <hr className="border-gray-300 my-6" />
        <Partners />
      </div>
    </div>
  );
}
